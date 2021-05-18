import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TnTableV1Component } from './tn-table-v1.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    TnTableV1Component,
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzToolTipModule,
  ],
  exports: [
    TnTableV1Component
  ]
})
export class TnTableV1Module { }
