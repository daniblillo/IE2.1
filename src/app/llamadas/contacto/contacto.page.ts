import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';
import {LlamadasService} from '../llamadas.service';
import {llamadas} from '../llamadas.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  contacto: llamadas;
  constructor(private activaterouter: ActivatedRoute, private LlamadasService: LlamadasService) { }

  ngOnInit() {
    this.activaterouter.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('contactoId')
      this.contacto = this.LlamadasService.getContacto(recipeId);
      console.log(this.contacto)
    })
  }

}
