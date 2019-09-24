import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginresponsableComponent } from './loginresponsable.component';

describe('LoginresponsableComponent', () => {
  let component: LoginresponsableComponent;
  let fixture: ComponentFixture<LoginresponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginresponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
