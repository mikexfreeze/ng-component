import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDemoButtonBasicComponent } from './button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    NzDemoButtonBasicComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
  ],
  exports:[
    NzDemoButtonBasicComponent
  ]
})
export class ButtonModule { }
