import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeRecord : Employee[]=[]

  ngOnInit(){
    let empObj1 : Employee ={
      employeeId : 101,
      employeeName : "Ajay", 
      employeeAge : 32, 
      employeeEmailId : "ajay@abc.com", 
      employeeSkills : ["programming", "Machine Learning"]
      }

    let empObj2 : Employee ={
      employeeId : 102,
      employeeName : "Shreyanshi", 
      employeeAge : 30, 
      employeeEmailId : "chiya@abc.com", 
      employeeSkills : ["documentation", "api development"]
    }
  
    this.employeeRecord.push(empObj1)
    this.employeeRecord.push(empObj2)
  }



}
