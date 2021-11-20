import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOverviewComponent } from './forms-overview.component';

describe('FormsOverviewComponent', () => {
  let component: FormsOverviewComponent;
  let fixture: ComponentFixture<FormsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
