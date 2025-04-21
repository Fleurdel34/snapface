import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe, NgClass, NgStyle, DatePipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!:FaceSnap;

  snapButtonText!:string;
  userhasSnapped!:boolean;

  constructor(private faceSnapService: FaceSnapsService){}
  
  ngOnInit(): void {
    this.snapButtonText='Oh Snap!';
    this.userhasSnapped=false;
  }

  onSnap(): void{
    if(this.userhasSnapped){
      this.unSnap();
    }else{
      this.snap();
    }
  }

  unSnap(){
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userhasSnapped=false;
  }

  snap(){
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops unSnap!';
    this.userhasSnapped=true;
  }
}
