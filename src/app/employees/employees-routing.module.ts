import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';


const routes: Routes = [
  { path : 'emp-list' , component: EmployeeListContainer},
  { path : 'employee-form-container/:id' , component: EmployeeFormContainer},
  { path : 'emp-list/add' , component: EmployeeFormContainer}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
