import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe, NgClass, NgStyle, DatePipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap!:FaceSnap;
  snapButtonText!:string;
  userhasSnapped!:boolean;

  constructor(private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText='Oh Snap!';
    this.userhasSnapped=false;
  }
}
