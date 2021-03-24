import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorshipCreateComponent } from './tutorship-create.component';

describe('TutorshipCreateComponent', () => {
  let component: TutorshipCreateComponent;
  let fixture: ComponentFixture<TutorshipCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorshipCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorshipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
