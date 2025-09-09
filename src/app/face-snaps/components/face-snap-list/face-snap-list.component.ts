import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, AsyncPipe, NgFor],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnap$!:Observable<FaceSnap[]>

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void { 
    this.faceSnap$ = this.faceSnapsService.getAllFaceSnaps();
    console.log(this.faceSnap$);    
  }

}
