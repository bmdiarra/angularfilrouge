import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupeComptencesComponent } from './add-groupe-comptences.component';

describe('AddGroupeComptencesComponent', () => {
  let component: AddGroupeComptencesComponent;
  let fixture: ComponentFixture<AddGroupeComptencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupeComptencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupeComptencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
