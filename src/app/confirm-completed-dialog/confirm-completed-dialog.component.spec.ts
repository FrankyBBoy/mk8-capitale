import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCompletedDialogComponent } from './confirm-completed-dialog.component';

describe('ConfirmCompletedDialogComponent', () => {
  let component: ConfirmCompletedDialogComponent;
  let fixture: ComponentFixture<ConfirmCompletedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCompletedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCompletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
