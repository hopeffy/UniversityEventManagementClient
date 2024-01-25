import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People, Person } from '../interfaces/Person';
import { Observable } from 'rxjs';
import { environment } from '../envirenment/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl = `${environment.baseUrl}/api/Person`;

  constructor( private http : HttpClient) { }

  addPeople(model : Partial<Person>) : Observable<void> {
    debugger
    return this.http.post<void>(`${this.baseUrl}` , model);
  }

  getAllPeople() : Observable<void> {
    return this.http.get<void>(`${this.baseUrl}`);
  }

  //402 unsported media type hatası dönüyor
  getPeopleById(personId : string) : Observable<any> {
    debugger
    return this.http.post<void>(`${this.baseUrl}` , {personId});
  }
}
