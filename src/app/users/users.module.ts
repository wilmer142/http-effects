import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [ListComponent, UserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    ListComponent
  ]
})
export class UsersModule { }
