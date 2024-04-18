import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-with-id',
  templateUrl: './employee-with-id.component.html',
  styleUrls: ['./employee-with-id.component.css']
})
export class EmployeeWithIdComponent {


isReady : boolean = false
employeeId : number = 0  
employee! : Employee 
employeeid : number = 0
constructor(private activateRoute :ActivatedRoute, private srv : EmployeeDetailsService){}

  runCode(){
    /*
    Fetch all query related data from browser request
    */
    let queryData = this.activateRoute.paramMap.subscribe(
      //find out paramenters of the query
      (params)=>{
        //locate eidd
        let value = params.get('eid')

        //if eid isnot null, type cast eid value to unknown then number
        if(value !=null){
          this.employeeId= (value as unknown as number)
        }
      }
    )
    this.employee= this.srv.fetchEmployeeById(this.employeeId)
    console.log("MSG")
    console.log(this.employee);
    
    this.isReady = true
  }

  getDetails(){
    let value : string= `${this.employeeid}`

    if(value !=null){
      this.employeeId= (value as unknown as number)
    }
    this.employee= this.srv.fetchEmployeeById(this.employeeId)
    this.isReady = true
  }
}
