import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService{

    foundFaceSnap!:FaceSnap; 

    private faceSnaps: FaceSnap[] =[
        {
            id:4,
            title: 'Archibald',
            description:'Mon meilleur ami depuis toujours',
            imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdAt:new Date(),
            snaps:41,
            location:'Paris'
        },
        {
            id:5,
            title: 'Three Rock Mountain',
            description:'Un endroit magnifique pour les randonnées.',
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdAt:new Date(),
            snaps:27,
            location:'la montagne'
        },
        {
            id:6,
            title:'Un bon repas',
            description:'Mmmh que c\'est bon !',
            imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdAt:new Date(),
            snaps:156
        }        
    ];

    getAllFaceSnaps():FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        for(let faceSnap of this.faceSnaps){
            if(faceSnap.id == faceSnapId){
                this.foundFaceSnap = faceSnap;
            }
        }
        if(!this.foundFaceSnap){
            throw new Error('FaceSnap not found!')
        }else{
            return this.foundFaceSnap;
        }
    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'):void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(FormValue:{title:string, description: string, imageUrl:string, location:string}):void{
        const faceSnap: FaceSnap = {
            ...FormValue,
            createdAt: new Date(),
            snaps:0,
            id:this.faceSnaps[this.faceSnaps.length -1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }

}