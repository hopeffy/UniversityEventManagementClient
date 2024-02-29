import { HttpClient, HttpParams } from '@angular/common/http';
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

  addEvent(model : Partial<Events>) : Observable<Events> {
    return this.http.post<Events>('http://localhost:5281/api/Event' , model);
  }

  getAllEvent() : Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}`);
  }

  getEventById(id : string) : Observable<Events>{
    debugger

    //üstteki ve alttaki requestin farkına bir bakmak lazım.

    /*üstteki requestte get requestini kullanarak aslında 
    http://localhost:5281/api/Event/id şeklinde yapmaktadır. Güvenlik açısından mantıksız bir yol.
    */
    return this.http.get<Events>(`http://localhost:5281/api/Event/${id}`);
    // return this.http.post<Events>('http://localhost:5281/api/Event/' , id);
  }
}
