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
    },
    {
      id: '2',
      title: 'Rey',
      comments: ['Recolectora'],
      imageURL: '/assets/icon/rey.png'
    },
    {
      id: '3',
      title: 'Finn',
      comments: ['Piloto'],
      imageURL: '/assets/icon/finn.png'
    },
    {
      id: '4',
      title: 'Leia',
      comments: ['Princesa'],
      imageURL: '/assets/icon/leia.png'
    }

  ]

  constructor(){}
    ngOnInit(){}

}
