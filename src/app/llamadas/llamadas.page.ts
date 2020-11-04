import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-llamadas',
  templateUrl: 'llamadas.page.html',
  styleUrls: ['llamadas.page.scss']
})
export class LlamadasPage implements OnInit {

  private contacto = [
    {
      id: '1',
      title: 'Han Solo',
      comments: ['Cazarrecompensas'],
      imageURL: '/assets/icon/hansolo.png'
    }

  ]

  constructor(){}
    ngOnInit(){}

}
