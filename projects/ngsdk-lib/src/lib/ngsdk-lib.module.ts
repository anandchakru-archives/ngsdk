import { NgModule } from '@angular/core';
import { NgsdkLibComponent } from './ngsdk-lib.component';
import { NavComponent } from './components/nav/nav.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    NgsdkLibComponent,
    NavComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [NgsdkLibComponent]
})
export class NgsdkLibModule { }
