import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'llamadas',
        loadChildren: () => import('../llamadas/llamadas.module').then(m => m.LlamadasPageModule)
      },
      {
        path: 'mensajes',
        loadChildren: () => import('../mensajes/mensajes.module').then(m => m.MensajesPageModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert.module').then(m => m.AlertPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/llamadas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/llamadas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
