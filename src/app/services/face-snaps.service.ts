import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService{

    constructor(private http:HttpClient){}
    foundFaceSnap!:FaceSnap; 

    private faceSnaps!: FaceSnap[]; 

    getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:8080/facesnaps');}

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:8080/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'):void{
       // const faceSnap = this.getFaceSnapById(faceSnapId);
       // snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(FormValue:{title:string, description: string, imageUrl:string, location:string}):void{
        const faceSnap: FaceSnap = {
            ...FormValue,
            createdDate: new Date(),
            snaps:0,
            id:this.faceSnaps[this.faceSnaps.length -1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }

}