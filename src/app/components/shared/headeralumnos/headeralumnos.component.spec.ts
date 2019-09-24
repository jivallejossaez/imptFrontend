import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderalumnosComponent } from './headeralumnos.component';

describe('HeaderalumnosComponent', () => {
  let component: HeaderalumnosComponent;
  let fixture: ComponentFixture<HeaderalumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderalumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
