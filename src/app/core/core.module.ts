import { NgModule, LOCALE_ID } from '@angular/core'; 
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { withInterceptors } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[],
  imports: [
    CommonModule
  ],
  providers: [
    HttpClientModule,
    {provide:LOCALE_ID, useValue: 'fr-FR'},
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
})
export class CoreModule { 
  constructor(){registerLocaleData(fr.default)}
}
