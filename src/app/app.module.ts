import { LOCALE_ID, NgModule } from '@angular/core';
import localeEsAr from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { materialForms } from './constants/material';
import { StateIconComponent } from './core/forms/state-icon/state-icon.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsAr, 'es');

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    ...materialForms,
    StateIconComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
