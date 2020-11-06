import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contacto',
    children: [
      {
        path: "",
        loadChildren: () => import('./llamadas/llamadas.module').then( m => m.LlamadasPageModule)
      },
      {
        path: ":contactoId",
        loadChildren: () => import('./llamadas/contacto/contacto.module').then( m => m.ContactoPageModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}