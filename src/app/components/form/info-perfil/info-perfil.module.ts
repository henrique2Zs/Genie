import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPerfilComponent } from './info-perfil.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [InfoPerfilComponent],
  exports: [InfoPerfilComponent]
})
export class InfoPerfilComponentModule {}
