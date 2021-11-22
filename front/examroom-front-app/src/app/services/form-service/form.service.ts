import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  APIurl = "http://localhost:62005/";

  constructor(private http: HttpClient) { }

  getAllFormsList() {
    return this.http.get(this.APIurl + "api/Form/");
  }

  getAllSubmittedFormsList() {
    return this.http.get(this.APIurl + "api/Form/GetAllSubmittedForms")
  }

  getAllFormActions(id: number, candidateId: number) {
    return this.http.get(this.APIurl + "api/Form/GetAllFormActions/form/" + id+"/candidate/"+candidateId);
  }

  deleteForm(id: number) {
    return this.http.delete(this.APIurl + "api/Form/" + id);
  }
}
