import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../interfaces/Events';
import { environment } from '../envirenment/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = `${environment.baseUrl}/api/Event`;
  constructor(
    private http : HttpClient
  ) { }

  addEvent(model : Partial<Events>) : Observable<void> {
    debugger
    return this.http.post<void>('http://localhost:5281/api/Event' , model);
  }

  getAllEvent() : Observable<void> {
    debugger
    return this.http.get<void>(`${this.baseUrl}`);
  }

  getEventById(id : string) : Observable<void>{
    debugger
    return this.http.get<void>(`${this.baseUrl}`);
  }
}
