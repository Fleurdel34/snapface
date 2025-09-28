import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';




export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {
        path:'auth/login',
        loadChildren:() => import('./auth/auth.routes').then(m=> m.authRoutes)
    },
    {
        path:'facesnaps',
        loadChildren:() => import('./face-snaps/face-snaps.routes').then(m=> m.faceSnapsRoutes)
    }
];
