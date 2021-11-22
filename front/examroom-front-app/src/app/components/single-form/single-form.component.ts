import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/models/candidate.model';
import { FormAction } from 'src/app/models/form-action.model';
import { Form } from 'src/app/models/form.model';
import { SubmittedForm } from 'src/app/models/submitted-form.model';
import { CandidateService } from 'src/app/services/candidate-service/candidate.service';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent implements OnInit {

  submittedForm: SubmittedForm;

  candidateArr: Candidate[] = [];
  candidate: Candidate;

  formActions: FormAction[] = [];
  totalWaitingTime: number;

  isDataLoaded: boolean = false;

  constructor(private router: Router, private formService: FormService, private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.extractSubmittedForm();
    this.getCompleteCandidate();

    setTimeout(() => {
      this.getFormActions();
    }, 1000);

    setTimeout(() => {
      this.isDataLoaded = true;
    }, 1500);
  }

  extractSubmittedForm() {
    if (localStorage.getItem("submittedForm")) {
      this.submittedForm = JSON.parse(localStorage.getItem('submittedForm') || '{}');
    }
    else {
      //Should happen only if the user hardcodes the url
      this.router.navigate(['forms-overview']);
    }
  }


  //TODO: Fix those JSON parsing
  getCompleteCandidate() {
    this.candidateService.getCandidateByEmail(this.submittedForm.EmailId).subscribe(data => {
      this.candidateArr = JSON.parse(JSON.stringify(data)); //Convert the data to array
      this.candidate = this.candidateArr[0];
    });
  }

  getFormActions() {
    this.formService.getAllFormActions(this.submittedForm.IdForm, this.candidate.Id).subscribe(data => {
      this.formActions = JSON.parse(JSON.stringify(data));
    });
  }
}
