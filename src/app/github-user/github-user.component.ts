import { Component } from '@angular/core';
import { GithubApiService } from '../github-api.service';
import { Githubuser } from '../githubuser';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent {

  constructor(private srv : GithubApiService){}

  user! : Githubuser 

  isReady : boolean = false

  ngOnInit(){}

  fetchData(){
    let url : string = "https://api.github.com/users/fabpot"
    
    //syntax for subscribe has changed starting from angular 8+
    this.srv.getUserResponse(url).subscribe(
        {
          next : (value : Githubuser) => { this.user = value },
          complete : () => { this.isReady=true ; console.log("API COMPLETE")}        
        }
      )
    }
    resetData(){
      
      this.isReady = false
      
    }
   
}
