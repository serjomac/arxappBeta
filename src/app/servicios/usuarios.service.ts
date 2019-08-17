import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private dataBase: AngularFirestore) { }

  getAllUsers(){
    return this.dataBase.collection('users').snapshotChanges().pipe(map(users =>{
      return users.map(res => {
        const user = res.payload.doc.data() as Usuario
        return user;
      })
    }))
  }

  getUsersRolInvitado(idUsuarioVisitante: string){
    return this.dataBase.collection('users', ref => ref.where("rol", "==", "visitante").where("uid", "==", idUsuarioVisitante)).snapshotChanges().pipe(map(res => {
      return res.map(usuarioInvitado => {
        const usuarioTmp = usuarioInvitado.payload.doc.data() as Usuario; 
        return usuarioTmp;
      })
    }))
  }

  getuserInvitadoByUsername(username: string){
    return this.dataBase.collection('users', ref => ref.where("username", "==", username)).snapshotChanges().pipe(map(res => {
      return res.map(data => {
        const userTmp = data.payload.doc.data() as Usuario;
        if(userTmp.rol == "visitante"){
          return userTmp;
        }else{
          return {
            mensaje: "Elusuario ingresado no es visitante"
          }
        }
        
      })
    }))
  }

  getAllUserResidentes(){
    return this.dataBase.collection('users', ref => ref.where("rol", "==", "residente")).snapshotChanges().pipe(map(res => {
      return res.map(data => {
        const userTmp = data.payload.doc.data() as Usuario;
          return userTmp;
      })
    }))
  }
}
