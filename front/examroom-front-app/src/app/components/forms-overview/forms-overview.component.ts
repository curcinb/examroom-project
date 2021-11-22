import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/models/candidate.model';
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
  mainBtnStyle = "hidden";
  btnStyle: string[] = [];

  constructor(private router: Router, private formService: FormService,
    private candidateService: CandidateService) {
  }


  ngOnInit(): void {
    this.getAllSubmittedForms();
  }

  getAllSubmittedForms() {
    this.formService.getAllSubmittedFormsList().subscribe(data => {
      this.allSubmittedForms = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < this.allSubmittedForms.length; i++) {
        this.allSubmittedForms[i]['Selected'] = false;
        this.btnStyle[i] = "visible";
      }
    });
  };

  redirectToForm(submittedForm: SubmittedForm) {
    localStorage.setItem("submittedForm", JSON.stringify(submittedForm));
  }

  deleteForm(submittedForm: SubmittedForm) {
    this.formService.deleteSubmittedForm(submittedForm.IdForm).subscribe(data => {
      this.getAllSubmittedForms();
    });

    //TODO: Fix this parsing
    let candidate: Candidate;
    let candidateArr: Candidate[] = [];
    this.candidateService.getCandidateByEmail(submittedForm.EmailId).subscribe(data => {
      candidateArr = JSON.parse(JSON.stringify(data)); //Convert the data to array
      candidate = candidateArr[0];
      this.formService.deleteSubmittedFormActions(submittedForm.IdForm, candidate.Id).subscribe(data => { });
    });
  }

  selectForm(index: number) {
    this.allSubmittedForms[index].Selected = !this.allSubmittedForms[index].Selected;
    this.mainBtnStyle = "visible";
    this.btnStyle[index] = this.allSubmittedForms[index].Selected ? "hidden" : "visible";
    this.checkIfLastSelected();
  }

  checkIfLastSelected() {
    for (let i = 0; i < this.allSubmittedForms.length; i++) {
      if (this.allSubmittedForms[i].Selected) {
        return;
      }
    }
    this.mainBtnStyle = "hidden";
  }

  deleteSelectedForms() {
    for(let i = 0; i < this.allSubmittedForms.length; i++) {
      if(this.allSubmittedForms[i].Selected) {
        this.deleteForm(this.allSubmittedForms[i]);
      }
    }
  }
}
