import { Component, OnInit } from '@angular/core';
import { FormAction } from 'src/app/models/form-action.model';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent implements OnInit {

  formActions: FormAction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
