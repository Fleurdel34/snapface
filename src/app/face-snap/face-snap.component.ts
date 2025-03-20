import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!:FaceSnap;

  snapButtonText!:string;
  userhasSnapped!:boolean;
  
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
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userhasSnapped=false;
  }

  snap(){
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops unSnap!';
    this.userhasSnapped=true;
  }
}
