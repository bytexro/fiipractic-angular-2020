import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ListComponent } from "./components";
import { ToDosComponent } from "./todos.component";
import { SharedModule } from "../shared/shared.module";
import { ToDosRoutingModule } from "./todos-routing.module";
import { ToDoService } from "./services";


@NgModule({
  declarations: [
    ListComponent,
    ToDosComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    ToDosRoutingModule
  ],
  providers: [
    ToDoService
  ]
})
export class TodosModule {}
