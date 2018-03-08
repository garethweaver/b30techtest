import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './config/firebase';

import { AppComponent } from './app.component';
import { InsightListComponent } from './components/insight-list.component';
import { InsightCardComponent } from './components/insight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InsightListComponent,
    InsightCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
