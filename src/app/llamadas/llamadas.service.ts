import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {llamadas} from './llamadas.model';

@Injectable({
  providedIn: 'root'
})
export class LlamadasService {

  private contactos: llamadas[] = [
    {
      id: '1',
      title: 'Han Solo',
      comments: ['Cazarrecompensas'],
      imagenURL: '/assets/icon/hansolo.png'
    },
    {
      id: '2',
      title: 'Rey',
      comments: ['Recolectora'],
      imagenURL: '/assets/icon/rey.png'
    },
    {
      id: '3',
      title: 'Finn',
      comments: ['Piloto'],
      imagenURL: '/assets/icon/finn.png'
    },
    {
      id: '4',
      title: 'Leia',
      comments: ['Princesa'],
      imagenURL: '/assets/icon/leia.png'
    }
  ]
  constructor() { }

  getContactos() {
    return [...this.contactos]
  }

  getContacto(contactoId: string){
    return{
      ...this.contactos.find(contacto => {
        return contacto.id === contactoId
      })
    }
  }

}
