import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlamadasPage } from './llamadas.page';

const routes: Routes = [
  {
    path: '',
    component: LlamadasPage,
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlamadasPageRoutingModule {}
