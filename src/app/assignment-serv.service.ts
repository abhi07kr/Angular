import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Assignment } from './assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServService {

  constructor(private httpSrv : HttpClient){ }

  getUserResponse(url : string) : Observable<Assignment>{
    return this.httpSrv.get<Assignment>(url)
}
}
