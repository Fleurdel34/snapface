import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, withInterceptors } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  {provide:LOCALE_ID, useValue: 'fr-FR'},
  HttpClientModule,
  provideHttpClient(withInterceptors([authInterceptor]))
]
};
