import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlaboratoriosComponent } from './gestionlaboratorios.component';

describe('GestionlaboratoriosComponent', () => {
  let component: GestionlaboratoriosComponent;
  let fixture: ComponentFixture<GestionlaboratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionlaboratoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionlaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
