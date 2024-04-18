import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { CryptoHistoryComponent } from './crypto-history/crypto-history.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeComponent } from './employee/employee.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { SalaryComponent } from './salary/salary.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { EmployeeWithIdComponent } from "./employee-with-id/employee-with-id.component";
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { ModelDrivenFormDemoComponent } from './model-driven-form-demo/model-driven-form-demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';


const routes: Routes = [
  {path : "", component : LandingComponent },
  {path : "crypto", component : CryptoSinglePriceComponent},
  {path : "cryptohistory", component : CryptoHistoryComponent},
  {path : "githubuser", component : GithubUserComponent},
  {path : "githubproject", component : GithubReposComponent},
  {path : "assignment", component : AssignmentComponent},
  {path : "calculator", component : CalculatorComponent},
  {path : "pipes", component : PipeDemoComponent},
  {
    path : "employee",
    children:[
      {path : "", component: EmployeeComponent},
      {path:"salary", component: SalaryComponent},
      {path: "update", component: UpdateDataComponent}
    ]
  },
  {path : "details",component : EmployeeWithIdComponent},
  //path parameter
  {path : "Details/:eid",component : EmployeeWithIdComponent},
  {path : "modelforms", component : ModelDrivenFormDemoComponent},
  {path : "templateforms", component: TemplateFormsDemoComponent},
   {path : "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
