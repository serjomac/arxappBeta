import { Component, OnInit } from '@angular/core';
import { DireccionesService } from '../servicios/direcciones/direcciones.service';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { Direccion } from '../models/direccion';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public manzana: string = '';
  public villa: string= '';
  public referenncia: string = '';
  public direccionDelUsuario: Direccion;
  public arryDir: any = [];
  public manzanaActual :string;
  constructor(private servicioDirecciones: DireccionesService, private auth: AngularFireAuth) { }
  
  ngOnInit() {

    this.servicioDirecciones.getDireccionByIdResidente(this.auth.auth.currentUser.uid).subscribe(res => {
      console.log(res[0])
      this.direccionDelUsuario = res[0];
      this.arryDir = res;
      console.log("dsadsadasd", this.arryDir[0])
    })

  }

  actualizarDatos(){

    let direccionNueva: Direccion = {
      id_usuarioResidente: this.auth.auth.currentUser.uid,
      villa: this.villa,
      manzana :this.manzana,
      referencia : this.referenncia
    }

    this.servicioDirecciones.updateDireccionDeUnUsuario(this.arryDir[0].id, direccionNueva);
  }

}
