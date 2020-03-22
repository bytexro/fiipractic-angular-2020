import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NoOfTodosPipe } from "./pipes";
import { MaterialModule } from "./material.module";


@NgModule({
  declarations: [
    NoOfTodosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NoOfTodosPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
