import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import {EmployeeData  } from './../../../core/models/employeeData.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() data: EmployeeData[] = [];
  label: string;

  @Output() add = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  addItem(){
    this.add.emit(this.label);
    // this.data.push({
    //   label: this.label,
    //   num: 30
    // });
    this.label = '';
  }

  // calc(item: EmployeeData){
  //   //console.log('Calc', item.num);
  //   console.log('list', this.title);
  //   return fibonacci(item.num);
  // }

}
