import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListaInvitadosPage, UsuarioInvitado } from '../lista-invitados/lista-invitados.page';
import { MenuController } from '@ionic/angular';

import { from } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario'
import { Direccion } from '../models/direccion';
import { DireccionesService } from '../servicios/direcciones/direcciones.service';
import { InvitadoServiceService } from '../servicios/InvitadoServiceService';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public user: Usuario;
  public name: string;
  public numeroInvitadosTotal: string = '0';
  public direccionUsuario: Direccion;
  constructor(private router: Router, private actionSheetController: ActionSheetController, private auth: AuthService, private autFb: AngularFireAuth, private dataBase: AngularFirestore, private servicioDireccion: DireccionesService, private servicioInvittado: InvitadoServiceService) {
    
    var contador: number = 0;
    this.name = autFb.auth.currentUser.displayName;

    this.servicioInvittado.getInvitadoEstadoTrueByIdResidente(this.autFb.auth.currentUser.uid).subscribe(res=>{
       this.numeroInvitadosTotal = ""+res.length;
    })
    
    
  }
  ngOnInit() {
    this.servicioDireccion.getDireccionByIdResidente(this.autFb.auth.currentUser.uid).subscribe(res => {
      this.direccionUsuario = res[0];
    })
  }
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Cerrar sesion',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.auth.logOut();
        }
      }
      ]
    });
    await actionSheet.present();
  }

  getUsers(){
    return this.dataBase.collection('users').snapshotChanges().pipe(map(users=>{
      return users.map(user=>{
        
        const userTmp = user.payload.doc.data() as Usuario
        console.log(userTmp);
      })
    }))
  }

}


