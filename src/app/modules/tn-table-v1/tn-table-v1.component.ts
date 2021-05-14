import { Component, OnInit, OnChanges, SimpleChanges, Input, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'tn-table-v1',
  templateUrl: './tn-table-v1.component.html',
  styleUrls: ['./tn-table-v1.component.less']
})
export class TnTableV1Component<T = NzSafeAny> implements OnInit, OnChanges{

  @Input() nzData: any;
  @Input() columns: any;
  @Input() nzCell: any;

  isString(value: any){
    return typeof value === "string"
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('this.nzData', this.nzData)
    console.log('this.columns', this.columns)
  }
}


