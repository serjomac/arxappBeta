import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

export interface Invitado{
  fechaIngreso: Date;
  fechaSalida: Date;
  id_usuarioResidente: string;
  id_usuarioVisitante: string;
  estado: boolean;
}

export interface UsuarioResidente{
  name: string;
  cedula: string;
  lastName: string;
  telefono: string;
  estado: boolean;
  uid: string;
  id_direccion: string;
  rol: string;
  username: string;
}

@Component({
  selector: 'app-lista-guardia',
  templateUrl: './lista-guardia.page.html',
  styleUrls: ['./lista-guardia.page.scss'],
})


export class ListaGuardiaPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public data: any;
  public arrayInvitados : any[] = [];
  public listaDelGuardia: any[] = [];
  
  constructor(private dataBase: AngularFirestore, public router: Router, private auth: AngularFireAuth) { 
  
  }

  loadData(event) {
    setTimeout(() => {
      //console.log(event);
      var dataTmp = [];

      //this.data = dataTmp;
      console.log("veamos que tiene data: ", this.listaDelGuardia[0]);
      event.target.complete();

      if (this.data.length > 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  
  listaInvitadoPorResidente(){
    this.router.navigate(['../listainvitados']);
  }

  ngOnInit() {
    
    this.data = this.dataBase.collection('invitados').snapshotChanges().pipe(map(res => {
      this.arrayInvitados = [];
      this.listaDelGuardia = [];
      res.map(inv => {
        
        //console.log('el id_usuarioVisitante es: ', inv.payload.doc.data()['id_usuarioVisitante'])
        //console.log('el id_usuarioVisitante es: ', inv.payload.doc.data())
        const invitado = inv.payload.doc.data() as Invitado;
        const usuarios = this.dataBase.collection('users').snapshotChanges().pipe(map(res => {
          this.listaDelGuardia = []
          res.map(usuario => {
            
            let usuarioResidente = usuario.payload.doc.data() as UsuarioResidente
            if (usuarioResidente.rol == "residente") {
              this.listaDelGuardia.push(usuarioResidente); //Obtengo lista de los residentes
              console.log(usuarioResidente);
              console.log(this.listaDelGuardia);
            
              if(usuarioResidente.uid == invitado.id_usuarioVisitante){
                if(invitado.id_usuarioResidente == this.auth.auth.currentUser.uid){
                  this.arrayInvitados.push(invitado); //Obtengo lista de visitantes por residente
                  console.log(invitado);
                }
              } 
            }
          })
        }))
        usuarios.forEach(users => {

        })
      });
    }));

    this.data.forEach(users => {
      
    });
  }

  

}
