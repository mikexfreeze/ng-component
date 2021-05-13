import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TnTableV1Component } from './tn-table-v1.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    TnTableV1Component
  ],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  exports: [
    TnTableV1Component
  ]
})
export class TnTableV1Module { }
