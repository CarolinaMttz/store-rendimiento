import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ContactModule {

}
