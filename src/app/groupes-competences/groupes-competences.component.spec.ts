import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesCompetencesComponent } from './groupes-competences.component';

describe('GroupesCompetencesComponent', () => {
  let component: GroupesCompetencesComponent;
  let fixture: ComponentFixture<GroupesCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupesCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
