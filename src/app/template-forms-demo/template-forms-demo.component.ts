import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrls: ['./template-forms-demo.component.css']
})
export class TemplateFormsDemoComponent {
  title = 'template-forms-demo';

  userName :string=""
  userEmail : string=""
  userStreet : string = ""
  userCity : string = ""
  userZipCode : string = ''
  userMobile : string = ""

  OnSubmit(value : any){
    console.log(value);    
  }

  ngOnInit(): void {
      
  }
}
