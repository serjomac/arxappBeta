import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService, Chat }from '../servicios/chats.service'

import { ModalController } from '@ionic/angular'
import { from } from 'rxjs';
import { ChatComponent } from '../componets/chat/chat.component'
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service'
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})


export class ChatPage implements OnInit {
  

  public arrayChats: any = [];
  
  public chatVicrieel: any;
  
  constructor(public route: Router, public chatServices: ChatsService,
              public modal: ModalController, public actionSheetController: ActionSheetController,
              public auth: AuthService, private fs: AngularFirestore) {
  
  }

  ngOnInit() {
    this.chatServices.getChatRooms().subscribe( chats=> {
      this.arrayChats = chats;
    })

    this.chatVicrieel = this.fs.collection('vicireelChat').valueChanges()
  }

  openChat(chat){
    this.modal.create({
      component:ChatComponent,
      componentProps:{  
        chat: chat
      }
    }).then((modal) =>modal.present())
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
  

}

