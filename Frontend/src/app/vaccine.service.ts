import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vaccine} from './models/vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private url = 'http://localhost:3000/vaccine';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  getVaccines(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(this.url);
  }
  postVaccine(vaccine1: any): Observable<Vaccine> {
    return this.http.post<Vaccine>(this.url, vaccine1, this.httpOptions);
  }
  updateVaccine(vaccine1: any, id: string): Observable<Vaccine> {
    return this.http.put<Vaccine>(this.url + '/' + id, vaccine1, this.httpOptions);
  }
}
