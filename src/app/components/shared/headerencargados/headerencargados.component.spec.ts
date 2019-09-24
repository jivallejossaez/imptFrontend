import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderencargadosComponent } from './headerencargados.component';

describe('HeaderencargadosComponent', () => {
  let component: HeaderencargadosComponent;
  let fixture: ComponentFixture<HeaderencargadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderencargadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderencargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
