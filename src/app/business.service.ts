import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(
    private http: HttpClient
  ) { }

  addBusiness(person_name, business_name, business_gst_number) {
      const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj)
    }

  getAllBusiness(): Observable<any>{
    return this.http.get(`${this.uri}`);
  }

  getBusiness(id: string): Observable<any>{
    return this.http.get(`${this.uri}/edit/${id}`)
  }

  editBusiness(person_name, business_name, business_gst_number, id: string) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    return this.http.post(`${this.uri}/update/${id}`, obj)
  }

  delete(id: string){
    return this.http.get(`${this.uri}/delete/${id}`)
  }

}
