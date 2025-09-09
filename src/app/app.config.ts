import { ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';



export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  importProvidersFrom(CoreModule),
  importProvidersFrom(FaceSnapsModule),
  importProvidersFrom(LandingPageModule)
]
};
