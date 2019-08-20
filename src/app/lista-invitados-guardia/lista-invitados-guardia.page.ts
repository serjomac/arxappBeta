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

@Component({
  selector: 'app-lista-invitados-guardia',
  templateUrl: './lista-invitados-guardia.page.html',
  styleUrls: ['./lista-invitados-guardia.page.scss'],
})
export class ListaInvitadosGuardiaPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public data: any;
  public arrayInvitados : any[] = [];
  public listaDeInvitados: string[] = [];
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
    this.servicioInvitados.getInvitadoEstadoTrueByIdResidente(localStorage.getItem("idResidente")).subscribe((res)=> {
      console.log(res);
      this.arrayInvitados = res;
    })
    
  }

  eliminarInvitadoDeLista(invitado: Invitado){
   
    //console.log(invitado.uid)
    console.log('se va a cambiar el estdo del invitado: ', invitado.id)
    this.servicioInvitados.updateEstoInvitado(invitado.id, false, localStorage.getItem("idResidente"))
   
  
  }

}
