import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Message } from '../../models/message'
import {ChatsService} from '../../servicios/chats.service'
import { IonContent } from '@ionic/angular';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public colorRandom: string;

  

  aleatorio(inferior: any,superior: any){ 
    let numPosibilidades = superior - inferior 
    let aleat = Math.random() * numPosibilidades 
    aleat = Math.floor(aleat) 
    return parseInt(inferior) + aleat 
 }

  dame_color_aleatorio(){ 
    let hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let color_aleatorio = "#"; 
    for (let i=0;i<6;i++){ 
       let posarray = this.aleatorio(0,hexadecimal.length) 
       color_aleatorio += hexadecimal[posarray] 
    } 
    return color_aleatorio 
 }


  public arrayMensajes = [
  ];
  @ViewChild('content') private content: any;
  @ViewChild('content-end') private contentEnd: any;
  public c2 : any;
  public colorNombre: string;
  public coloresDelosNombres= [];
  public chatRef: any;
  public uid: string;
  public chat: any; 
  public img: string;
  public room: any;
  public mensaje: string;
  public msg: string;
  public nombreDelosOtrosUsuariosTmp=[];
  public nombreDelosOtrosUsuarios=[];
  
  constructor(private navParams: NavParams,
              private modal: ModalController,
              private chatService: ChatsService,
              private fs: AngularFirestore,
              private auth: AngularFireAuth)
              { 
                
                this.uid = auth.auth.currentUser.uid
                this.chatRef = this.fs.collection('vicireelChat', ref=> ref.orderBy('Timestamp')).valueChanges()
                this.colorNombre = this.dame_color_aleatorio();
                this.chatRef.forEach(chat => {
                  
                  if (chat.name != this.auth.auth.currentUser.displayName){
                    //this.nombreDelosOtrosUsuariosTmp.push(chat.name);
                    console.log(chat['name']);
                    console.log(chat);
                  }
                });
                  
                for(let i=0; i< this.nombreDelosOtrosUsuariosTmp.length ; i++){
                  
                  for(let j=0; j< this.nombreDelosOtrosUsuariosTmp.length ; j++){
                    if(this.nombreDelosOtrosUsuariosTmp[i] == this.nombreDelosOtrosUsuariosTmp[j]){
                      this.nombreDelosOtrosUsuarios.push(this.nombreDelosOtrosUsuariosTmp[i]);
                      this.coloresDelosNombres.push(this.dame_color_aleatorio());
                      break;
                    }
                    
                  }
                }

                for(let i=0; i< this.nombreDelosOtrosUsuariosTmp.length ; i++){
                  this.coloresDelosNombres.push(this.dame_color_aleatorio())
                  
                }
                console.log(this.coloresDelosNombres)
                //this.ScrollToBottom()
              }

  ngOnInit() {
      
      //console.log(content2)
      //this.content.scrollToBottom(300);
      this.content.scrollToBottom(300);
    /*
    this.chatService.getChatRoom(this.chat.id).subscribe(room=>{
      console.log(room);
      this.room = room;
    });
    this.chat = this.navParams.get('chat');
    */
  }

  closeChat(){
    this.modal.dismiss();
  }

  sendMensaje(){

    if(this.msg != ""){

          const mensaje :Message ={
            content: this.msg,
            type: "text",
            date: new Date(),
            name_user: this.auth.auth.currentUser.displayName,
            uid: this.auth.auth.currentUser.uid
          }
        
          
          this.fs.collection('vicireelChat').add({
            name:this.auth.auth.currentUser.displayName,
            constent: this.msg,
            id_user: this.auth.auth.currentUser.uid,
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          //this.scrollToBottomOnInit();
          this.msg = ""
          setTimeout(()=>{
            this.content.scrollToBottom(200);
          }, 100)
    //this.ScrollToBottom()
    }else { 
      console.log("debe llnar los campos");
    }
  }
  ionViewDidEnter() {
    console.log(this.content)
    setTimeout(()=>{
      this.content.scrollToBottom(5);
    }, 100)
    
   // this.content.scrollToBottom(300);
  }
  
}
