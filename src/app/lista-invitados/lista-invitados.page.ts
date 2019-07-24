import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

export interface Invitado{
  fechaIngreso: Date;
  fechaSalida: Date;
  id_usuarioResidente: string;
  id_usuarioVisitante: string;
  estado: boolean;
}

export interface UsuarioInvitado{
  name: string;
  cedula: string;
  lastName: string;
  telefono: string;
  estado: boolean;
  uid: string;
}

@Component({
  selector: 'app-lista-invitados',
  templateUrl: './lista-invitados.page.html',
  styleUrls: ['./lista-invitados.page.scss'],
})


export class ListaInvitadosPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public data: any;
  public arrayInvitados : any[] = [];
  public listaDeInvitados: string[] = [];
  
  constructor(private dataBase: AngularFirestore, private modal: ModalController, private auth: AngularFireAuth) { 
  


  }
  loadData(event) {
    setTimeout(() => {
      //console.log(event);
      var dataTmp = [];

      //this.data = dataTmp;
      //console.log("veamos que tiene data: ", this.listaDeInvitados[1]);
      event.target.complete();

      if (this.data.length > 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  
  addInvitado(listaInvitados){
    this.modal.create({
      component:AddInvitadoComponent,
      componentProps: {
        listaInvitados: listaInvitados,
      }
    }).then((modal) =>modal.present())
  }   
  ngOnInit() {
    
    this.data = this.dataBase.collection('invitados').snapshotChanges().pipe(map(res => {
      this.arrayInvitados = [];
      res.map(inv => {
        //console.log('el id_usuarioVisitante es: ', inv.payload.doc.data()['id_usuarioVisitante'])
        const invitado = inv.payload.doc.data() as Invitado;
        const usuarios = this.dataBase.collection('users').snapshotChanges().pipe(map(res => {
          res.map(usuario => {
            const usuarioInvitado = usuario.payload.doc.data() as UsuarioInvitado
            //console.log(usuarioInvitado);
            if(invitado.id_usuarioVisitante == usuarioInvitado.uid){
              if(invitado.id_usuarioResidente == this.auth.auth.currentUser.uid){
                //console.log("el usuario invitado es: ", usuarioInvitado.name);
                this.arrayInvitados.push(usuarioInvitado);
                
              }
            } 
          })
        }))
        usuarios.forEach(users => {

        })
        /*
        usuarios.forEach(user => {
          user.forEach(campo => {
            if(invitado.id_usuarioVisitante == campo['uid']){
              //const nombreInvitado = campo['name'];
              //console.log('el usuario invitado es: ', nombreInvitado)
              const usuarioInviatdo = 
            }
          })
        })
        */
        //const i = inv.payload.doc.data() as Invitado;
        //this.arrayInvitados.push(i);
      });
    }));

    this.data.forEach(users => {
      
    });
  }

  

}
