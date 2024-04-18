import { Component } from '@angular/core';
import { AssignmentServService } from '../assignment-serv.service';
import { Assignment } from '../assignment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  constructor(private srv : AssignmentServService){}

  user! : Assignment
  isReady : boolean = false
  userName : string = ""

  ngOnInit(){}

  fetchData(){
    let url : string = `https://api.github.com/users/${this.userName}`

    this.srv.getUserResponse(url).subscribe(
      {
        next : (value : Assignment) => {this.user = value},
        complete: () => {this.isReady = true; console.log("API Successful");
        }
      }
    )
  }

  resetData(){
    this.userName = ""
    this.isReady = false
    
  }
}
