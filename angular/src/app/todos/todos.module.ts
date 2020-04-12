import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ListComponent } from "./components";
import { ToDosComponent } from "./todos.component";
import { SharedModule } from "../shared/shared.module";
import { ToDosRoutingModule } from "./todos-routing.module";
import { featureReducer } from "./store/reducers/todo.reducer";
import { TodoEffects } from "./store/effects/todo/todo.effects";


@NgModule({
  declarations: [
    ListComponent,
    ToDosComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    ToDosRoutingModule,
    StoreModule.forFeature('todoFeature', featureReducer),
    EffectsModule.forFeature([
      TodoEffects
    ])
  ]
})
export class TodosModule {}
