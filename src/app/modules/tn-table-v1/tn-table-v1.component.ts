import { Component, OnInit, OnChanges, SimpleChanges, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';

@Component({
  selector: 'tn-table-v1',
  templateUrl: './tn-table-v1.component.html',
  styleUrls: ['./tn-table-v1.component.less']
})
export class TnTableV1Component<T = NzSafeAny> implements OnInit, OnChanges{

  @Input() nzData: any;
  @Input() columns: any;
  @Input() nzCell: any;
  @Input() nzCell1: any;
  @Input() nzCell2: any;
  @Input() nzCell3: any;
  @Input() total = 0;
  @Input() setOfCheckedId = new Set();
  @Input() nzPageIndex = 1;
  @Input() @InputBoolean() nzLoading = false;
  @Input() nzPageIndexChange: any
  @Input() nzPageSizeChange: any
  // @Output() readonly nzPageIndexChange = new EventEmitter<number>();

  checked = true;

  isString(value: any){
    return typeof value === "string"
  }

  constructor() {
  }

  ngOnInit(): void {
    // this.nzPageIndexChange.next(pageIndex);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('this.nzData', this.nzData)
    console.log('this.columns', this.columns)
  }
}


