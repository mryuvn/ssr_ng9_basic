import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SafeHtmlModule } from '../../safe-html';
import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SafeHtmlModule
  ],
  exports: [AvatarComponent]
})
export class AvatarModule { }
