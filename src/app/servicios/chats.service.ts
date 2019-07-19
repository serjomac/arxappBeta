import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { from } from 'rxjs';
import { map } from 'rxjs/operators'
import { Message } from '../models/message'
import { firestore } from 'firebase';

export interface Chat {
  id : String;
  description: String;
  name: String;
  img: String;
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private dataBase: AngularFirestore) { }

  getChatRooms(){
    return this.dataBase.collection('chatRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id
        return data;
      })
    }))
  }

  getChatRoom(chat_id: string){
    return this.dataBase.collection('chatRooms').doc(chat_id).valueChanges();

  }

  sendMsgToFirebase(message: Message, chatId: string){
    this.dataBase.collection('chatRooms').doc(chatId).update({
      messages: firestore.FieldValue.arrayUnion(message)
    })

  }
}
