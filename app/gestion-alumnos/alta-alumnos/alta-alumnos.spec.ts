import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAlumnos } from './alta-alumnos';

describe('AltaAlumnos', () => {
  let component: AltaAlumnos;
  let fixture: ComponentFixture<AltaAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
