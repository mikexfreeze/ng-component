import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-component';

  hdlClick(e: any){
    console.log(e)
  }

  columns = [
    {name: "Name", field: 'name'},
    {name: "Age", field: 'age'},
    {name: "Address", field: 'address'},
    {name: "Action", template: 'custom' }
  ]
  
  nzData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ]
}
