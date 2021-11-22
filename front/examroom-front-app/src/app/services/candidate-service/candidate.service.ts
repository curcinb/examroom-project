import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  APIurl = "http://localhost:62005/";

  constructor(private http: HttpClient) { }

  getAllCandidatesList() {
    return this.http.get(this.APIurl + "api/Candidate/");
  }

  getCandidateById(id: number) {
    return this.http.get(this.APIurl + "api/Candidate/GetCandidateById/" + id)
  }

  getCandidateByEmail(email: string) {
    return this.http.get(this.APIurl + "api/Candidate/GetCandidateByEmail/" + email + "/");
  }
}
