import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorshipListComponent } from './tutorship-list.component';

describe('TutorshipListComponent', () => {
  let component: TutorshipListComponent;
  let fixture: ComponentFixture<TutorshipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorshipListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
