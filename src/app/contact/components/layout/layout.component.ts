import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../core/models/employeeData.model';

const name = ['Jaime', 'Frank', 'Benito', 'Jorge'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];


  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate( name, [10, 15], 10 );
    this.bList = this.generatorService.generate( name, [10, 15], 10 );
  }

  addItem( list: EmployeeData[], label: string){
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 15]),
     });//unshift para que la dejes de primera
  }

}
