import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNewChallengeDialogComponent } from './confirm-new-challenge-dialog.component';

describe('ConfirmNewChallengeDialogComponent', () => {
  let component: ConfirmNewChallengeDialogComponent;
  let fixture: ComponentFixture<ConfirmNewChallengeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNewChallengeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNewChallengeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
