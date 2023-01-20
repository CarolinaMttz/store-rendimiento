import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../core/models/employeeData.model';
import { tap } from 'rxjs/operators';

const name = ['Jaime', 'Frank', 'Benito', 'Jorge'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  value$: Observable<number>;
  //sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    this.value$ = this.generatorService.getData()
    .pipe(
      tap( num => console.log(num) )
    );
  }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate( name, [10, 15], 10 );
    this.bList = this.generatorService.generate( name, [10, 15], 10 );
    // this.sub$ = this.generatorService.getData()
    // .subscribe( value => {
    //   this.value = value;
    //   console.log( 'value', value )
    // })
  }

  addItem( list: EmployeeData[], label: string){
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 15]),
     });//unshift para que la dejes de primera
  }

  ngOnDestroy(): void {
    console.log('destroy');
    // this.sub$.unsubscribe();
  }

}
