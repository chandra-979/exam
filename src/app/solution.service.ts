import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http:HttpClient) { }
  GetData()
  {
    return this.http.get<any[]>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")

  }
}
