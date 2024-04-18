import { Component } from '@angular/core';
import { GithubRepo } from '../github-repo';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent {

  repos : GithubRepo[] =[]

  isReady : boolean = false


  constructor(private srv :  GithubApiService){}

  fetchProjectResponse(){
    let url = "https://api.github.com/users/fabpot/repos"
    this.srv.getProjectResponse(url).subscribe(
      /*
          for next chunk of response received,
          a)loop over the responses
          b) send each response to repos array of class by pushing
            response into this array
      */
      {
        next : (value : GithubRepo[])=>{
            value.forEach(  (r : GithubRepo)=> this.repos.push(r)  )
        },

        complete : ()=>{this.isReady = true; console.log("FINISHED!")}
      }
    )
  }

  resetData(){
      
    this.isReady = false
    
  }
 
}


/*
repos=[      {}  , {}, {} ]




[    ]

*/



