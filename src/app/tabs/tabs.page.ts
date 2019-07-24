import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { ChatPage } from '../chat/chat.page';
import { PerfilPage } from '../perfil/perfil.page';
import { from } from 'rxjs';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }


}
