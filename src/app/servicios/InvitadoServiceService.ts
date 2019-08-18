import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Invitado } from '../models/invitado';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvitadoServiceService {
  constructor(private dataBse: AngularFirestore) { }
  public invitado: Invitado;
  getInvitados(){
    return this.dataBse.collection('invitados').snapshotChanges().pipe(map(invitado => {
      return invitado.map(data => {
        const invitadoTmp = data.payload.doc.data() as Invitado;
        invitadoTmp.id = data.payload.doc.id;
        //console.log(invitadoTmp);
        return invitadoTmp;
        
      })
    }))
  }

  addInvitado(invitado: Invitado){
    alert('el invitado se ingreso correctamente'); 
    return this.dataBse.collection('invitados').add(invitado);
  }

  getInvitadoByIdResidente(id_Residente: string){
    

    return this.dataBse.collection('invitados', ref => ref.where('id_usuarioResidente', '==', id_Residente )).snapshotChanges().pipe(map(inv => {
      return inv.map(data => {
        const invi = data.payload.doc.data() as Invitado;
        invi.id = data.payload.doc.id;
        return invi;
      
      })
    }))
   
  }

  getInvitadoEstadoTrueByIdResidente(id_Residente: string){
    
    return this.dataBse.collection('invitados', ref => ref.where('id_usuarioResidente', '==', id_Residente ).where("invitacion_activa", "==", true)).snapshotChanges().pipe(map(inv => {
      return inv.map(data => {
        const invi = data.payload.doc.data() as Invitado;
        invi.id = data.payload.doc.id;
        return invi;
      
      })
    }))
   
  }

  updateEstoInvitado(idInvitado: string, estado: boolean){
    return this.dataBse.collection('invitados').doc(idInvitado).update({
      invitacion_activa: estado
    });
  }

  getInvitadoById(idVisitante){
    return this.dataBse.collection('invitados').doc(idVisitante).snapshotChanges().pipe(map(res => {
      
        const invitadoTmp = res.payload.data() as Invitado;
        return invitadoTmp;
     
    }))
  }
}
