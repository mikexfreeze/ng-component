import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
interface Param {
  titles: string[]
}

@Component({
  selector: 'app-tn-table-v1',
  templateUrl: './tn-table-v1.component.html',
  styleUrls: ['./tn-table-v1.component.less']
})
export class TnTableV1Component<T = NzSafeAny> implements OnInit, OnChanges{

  @Input() nzData: ReadonlyArray<T> = [];
  
  @Input()
  titles = ["未设置titles"]

  constructor() {
  }

  ngOnInit(): void {
    console.log("this.titles", this.titles)
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
