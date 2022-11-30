import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({ exports: [
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
] })

export class MaterialModule {

 }
