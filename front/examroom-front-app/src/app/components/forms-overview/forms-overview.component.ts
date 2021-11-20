import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form.model';

@Component({
  selector: 'app-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.css']
})


export class FormsOverviewComponent implements OnInit {

  allForms: Form[] = [];

  
  constructor() { 
    let f1 = new Form(1, 'Pera', false);
    let f2 = new Form(2, 'Janko', true);
    this.allForms.push(f1);
    this.allForms.push(f2);
  }

  ngOnInit(): void {
  }

}
