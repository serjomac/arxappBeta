import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActionSheetController } from '@ionic/angular';
import { FirebaseAuth } from '@angular/fire';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  animations:[
    trigger('myVisility',[
      state('visible', style({
        
        opacity: 1
      })),
      state('invisible', style({
        
        opacity:0
      })),
      transition('* => *', animate('1s'))
    ])
  ]

})
export class TutorialComponent implements OnInit {
  visibleState: String = 'invisible';
  
  constructor(public actionSheetController: ActionSheetController, private auth: AuthService) { }


  ngOnInit() {
    
    setTimeout(()=>{ 
      this.visibleState = "visible";
    }, 800);
    
    var slides = document.querySelector('ion-slides');
    console.log(slides);
    
  }

  aparicionImagen(){
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible'
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
