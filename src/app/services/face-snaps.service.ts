import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { HttpClient } from "@angular/common/http";
import { filter, map, Observable, switchMap } from "rxjs";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService{

    constructor(private http:HttpClient){}
    foundFaceSnap!:FaceSnap; 


    getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:8080/facesnaps');}

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:8080/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'):Observable<FaceSnap>{
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap=>({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap=> 
                this.http.put<FaceSnap>(`http://localhost:8080/facesnaps/${faceSnapId}`, updatedFaceSnap))
        );
    }

    addFaceSnap(formValue: FormGroup): Observable<FaceSnap>{
    return this.getAllFaceSnaps().pipe(
        map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
        map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length -1]),
        map(previousFacesnap=>({
            ...formValue,
            snaps:0,
            createdDate: new Date(),
            id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:8080/facesnaps', newFacesnap))); 
    }

}