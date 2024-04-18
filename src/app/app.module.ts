import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeWithServiceComponent } from './employee-with-service/employee-with-service.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { CryptoHistoryComponent } from './crypto-history/crypto-history.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { ModelDrivenFormDemoComponent } from './model-driven-form-demo/model-driven-form-demo.component';
import { ModelFormChildComponent } from './model-form-child/model-form-child.component';
import { SalaryComponent } from './salary/salary.component';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { UnitTestDemoComponent } from './unit-test-demo/unit-test-demo.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { EmployeeWithIdComponent } from './employee-with-id/employee-with-id.component';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    EmployeeWithServiceComponent,
    GithubUserComponent,
    CryptoSinglePriceComponent,
    GithubReposComponent,
    CryptoHistoryComponent,
    CalculatorComponent,
    PipeDemoComponent,
    AssignmentComponent,
    ErrorComponent,
    LandingComponent,
    ModelDrivenFormDemoComponent,
    ModelFormChildComponent,
    SalaryComponent,
    StructuralDirectivesDemoComponent,
    TemplateFormsDemoComponent,
    UnitTestDemoComponent,
    UpdateDataComponent,
    EmployeeWithIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
