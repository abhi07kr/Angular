import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  navArray : string[] = [
    "employee",
    "crypto",
    "cryptohistory",
    "githubproject",
    "githubuser",
    "modelforms",
    "templateforms",
    "assignment",
    "calculator",
    "pipes",
    "details",
    "Error"
  ]
}
