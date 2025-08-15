import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe, NgClass, NgStyle, DatePipe, NgIf, AsyncPipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap$!:Observable<FaceSnap>;
  buttonText!:string;


  constructor(private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}
  
  ngOnInit() {
    this.buttonText = 'Oh Snap!'
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    //if(this.buttonText === 'Oh snap!'){
     // this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    //  this.buttonText = 'Oops unSnap!';
    //}else{
   // this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
   // this.buttonText = 'Oh Snap!';      
   // }
  }

}
