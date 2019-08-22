import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController, ActionSheetController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Route } from '@angular/router'
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuario';
import { AuthService } from '../servicios/auth.service';
import { DireccionesService } from '../servicios/direcciones/direcciones.service';
import { Direccion } from '../models/direccion';
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
  public arrayDirecciones: any = [];
  public data: any;
  public arrayInvitados : any[] = [];
  public listaDelGuardia: any[] = [];
  
  constructor(private dataBase: AngularFirestore, public router: Router, private auth: AngularFireAuth, private servicioUsuario: UsuariosService,private actionSheetController: ActionSheetController, private authService: AuthService, private direcciones: DireccionesService) { 
  
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


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Cerrar sesion',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.authService.logOut();
        }
      }
      ]
    });
    await actionSheet.present();
  }

  listIncitados(idResidente: Usuario){
    localStorage.setItem('idResidente', idResidente.uid);
    console.log(localStorage.getItem("idResidente"));
    this.router.navigate(["/lista-invitados-guardia"]);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  
  listaInvitadoPorResidente(){
    

  }

  ngOnInit() {
    this.servicioUsuario.getAllUserResidentes().subscribe((res)=>{
      this.listaDelGuardia = res;
      for (let i = 0; i < this.listaDelGuardia.length; i++) {
        this.direcciones.getDireccionByIdResidente(this.listaDelGuardia[i].uid).subscribe(res=>{
          //console.log(res[0])
          this.arrayDirecciones.push(res[0]);
          console.log(this.arrayDirecciones[i]);
        })
        
      }
     
      
    })
  }

  

}
