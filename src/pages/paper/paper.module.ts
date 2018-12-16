import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaperPage } from './paper';

@NgModule({
  declarations: [
    PaperPage,
  ],
  imports: [
    IonicPageModule.forChild(PaperPage),
  ],
})
export class PaperPageModule {}
