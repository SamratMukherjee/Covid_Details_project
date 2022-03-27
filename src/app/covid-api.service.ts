import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http:HttpClient) { }
  
  getAllCovid_details(){
    return this.http.get('https://data.covid19india.org/state_district_wise.json');
  }
}
