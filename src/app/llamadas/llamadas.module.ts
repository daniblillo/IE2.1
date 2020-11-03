import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LlamadasPage } from './llamadas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LlamadasPageRoutingModule } from './llamadas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LlamadasPageRoutingModule
  ],
  declarations: [LlamadasPage]
})
export class LlamadasPageModule {}
