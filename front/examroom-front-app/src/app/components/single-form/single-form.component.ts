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
  totalWaitingTime: any;
  totalWaitingTimeString: string;

  isDataLoaded: boolean = false;

  constructor(private router: Router, private formService: FormService, private candidateService: CandidateService) { }

  //TODO: Sync functions 
  ngOnInit(): void {
    this.extractSubmittedForm();
    this.getCompleteCandidate();

    setTimeout(() => {
      this.getFormActions();
    }, 400);

    setTimeout(() => {
      this.calculateWaitingTime();
      this.calculateTotalWaitingTime();
      this.isDataLoaded = true;
    }, 500);
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


  //TODO: Fix this parsing
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

  calculateWaitingTime() {

    for (let i = 1; i < this.formActions.length; i++) {

      let date1 = new Date(this.formActions[i - 1].ActionOn);
      let date2 = new Date(this.formActions[i].ActionOn);

      let diffInMilliSeconds = Math.abs(<any>date1 - <any>date2) / 1000;

      // calculate days
      const days = Math.floor(diffInMilliSeconds / 86400);
      diffInMilliSeconds -= days * 86400;

      // calculate hours
      const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
      diffInMilliSeconds -= hours * 3600;

      // calculate minutes
      const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
      diffInMilliSeconds -= minutes * 60;

      let difference = '';
      if (days > 0) {
        difference += (days === 1) ? `${days} day, ` : `${days} days, `;
      }

      if (hours != 0) {
        difference += hours === 1 ? `${hours} hour, ` : `${hours} hours, `;
      }

      if (minutes != 0) {
        difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;
      }

      this.formActions[i].WaitingTime = difference;
    }
  }

  calculateTotalWaitingTime() {
    if (this.formActions.length == 1) {
      this.totalWaitingTimeString = " / ";
    }
    else {
      this.formService.calculateTotalWaitingTime(this.submittedForm.IdForm, this.candidate.Id).subscribe(data => {

        this.totalWaitingTime = JSON.parse(JSON.stringify(data));
        let time = this.totalWaitingTime[0]['hh:mm:ss'].split(':');

        this.totalWaitingTimeString = "";
        if (time[0] != '0') {
          this.totalWaitingTimeString += time[0] == '1' ? "1 hour " : time[0] + " hours ";
        }
        if (time[1] != '0') {
          this.totalWaitingTimeString += time[1] == '1' ? "1 minute " : time[1] + " minutes ";
        }
      });
    }
  }
}
