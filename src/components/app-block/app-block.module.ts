import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBlockComponent } from './header-block/header-block.component';
import { FooterBlockComponent } from './footer-block/footer-block.component';

@NgModule({
  declarations: [
    HeaderBlockComponent,
    FooterBlockComponent
  ],
  exports: [
    HeaderBlockComponent,
    FooterBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppBlockModule { }
