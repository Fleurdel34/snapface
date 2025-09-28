import { Routes } from '@angular/router';
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { authGuard } from '../core/guards/auth.guards';


export const faceSnapsRoutes: Routes=[
    {path:'create', component:NewFaceSnapComponent, canActivate:[authGuard]},
    {path: ':id', component:SingleFaceSnapComponent, canActivate:[authGuard]},
    {path:'', component:FaceSnapListComponent, canActivate:[authGuard]},
]

