import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { InvitadoServiceService } from '../servicios/InvitadoServiceService';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuario';
import { Invitado } from '../models/invitado';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


export interface UsuarioInvitado{
  name: string;
  cedula: string;
  lastName: string;
  telefono: string;
  estado: boolean;
  uid: string;
  username: string;
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
  //public invitadoTmp: Invitado;
  constructor(private dataBase: AngularFirestore, private modal: ModalController, private auth: AngularFireAuth, private servicioInvitados: InvitadoServiceService, private servicioUsuario: UsuariosService) { 
  
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
    this.servicioInvitados.getInvitadoEstadoTrueByIdResidente(this.auth.auth.currentUser.uid).subscribe((res)=> {
      console.log(res);
      this.arrayInvitados = res;
    })
    
  }

  eliminarInvitadoDeLista(invitado: Invitado){
   
    //console.log(invitado.uid)
    console.log('se va a cambiar el estdo del invitado: ', invitado.id)
    this.servicioInvitados.updateEstoInvitado(invitado.id, false)
   
  
  }

  

}
