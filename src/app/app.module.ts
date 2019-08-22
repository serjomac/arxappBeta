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
import { PerfilInvitadoPage } from './perfil-invitado/perfil-invitado.page';
import { AuthIngresarCiudadelaComponent } from './componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MapaVisitantePage } from './mapa-visitante/mapa-visitante.page';


const config: SocketIoConfig = { url: 'https://arxappws.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TutorialComponent,
    AddInvitadoComponent,
    ListaGuardiaPage,
    ListaInvitadosGuardiaPage,
    AuthIngresarCiudadelaComponent
    
  ],
  entryComponents: [
    ChatComponent,
    TutorialComponent,
    AddInvitadoComponent,
    ListaGuardiaPage,
    ListaInvitadosGuardiaPage,
    AuthIngresarCiudadelaComponent
  ],
  imports: [BrowserModule,BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, AngularFirestoreModule, FormsModule, SocketIoModule.forRoot(config)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
