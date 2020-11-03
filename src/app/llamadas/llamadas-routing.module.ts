import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlamadasPage } from './llamadas.page';

const routes: Routes = [
  {
    path: '',
    component: LlamadasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlamadasPageRoutingModule {}
