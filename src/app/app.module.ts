import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from '../environments/environment'
import { AngularFireModule } from '@angular/fire'

import { AngularFireAuthModule } from '@angular/fire/auth'

import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { ChatComponent } from './componets/chat/chat.component'

import { FormsModule } from '@angular/forms'
import { TutorialComponent } from './componets/tutorial/tutorial.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { AddInvitadoComponent } from './componets/add-invitado/add-invitado.component';
import { ListaGuardiaPage } from './lista-guardia/lista-guardia.page';
import { ListaInvitadosPage } from './lista-invitados/lista-invitados.page';
import { ListaInvitadosGuardiaPage } from './lista-invitados-guardia/lista-invitados-guardia.page';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TutorialComponent,
    AddInvitadoComponent,
    ListaGuardiaPage
    
    
  ],
  entryComponents: [
    ChatComponent,
    TutorialComponent,
    AddInvitadoComponent,
    ListaGuardiaPage
  ],
  imports: [BrowserModule,BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, AngularFirestoreModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
