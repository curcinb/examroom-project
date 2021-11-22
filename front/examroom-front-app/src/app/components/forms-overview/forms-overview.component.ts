import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/models/form.model';
import { SubmittedForm } from 'src/app/models/submitted-form.model';
import { CandidateService } from 'src/app/services/candidate-service/candidate.service';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.css']
})


export class FormsOverviewComponent implements OnInit {

  allSubmittedForms: SubmittedForm[] = [];

  constructor(private router: Router, private formService: FormService,
     private candidateService: CandidateService) {
  }


  ngOnInit(): void {
    this.getAllSubmittedForms();
  }

  getAllSubmittedForms() {
    this.formService.getAllSubmittedFormsList().subscribe(data=>{
      this.allSubmittedForms = JSON.parse(JSON.stringify(data));
    });
  };

  redirectToForm(submittedForm: SubmittedForm) {
    localStorage.setItem("submittedForm", JSON.stringify(submittedForm));
  }
}
