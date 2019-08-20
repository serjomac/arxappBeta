import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { database } from 'firebase';
import { map } from 'rxjs/operators';
import { Direccion } from '../../models/direccion';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  constructor(private dataBase: AngularFirestore) { }

  getDireccionByIdResidente(idResidente: string){
    return this.dataBase.collection('directions', ref => (ref.where("id_usuario", "==", idResidente))).snapshotChanges().pipe(map(ref => {
      return ref.map(direcion => {
        const direccion = direcion.payload.doc.data() as Direccion
        direccion.id = direcion.payload.doc.id;
        return direccion
      })
    }))
  }

  updateDireccionDeUnUsuario(idDireccion: string, direccion: Direccion){
    return this.dataBase.collection('directions').doc(idDireccion).update(direccion);

  }
}
