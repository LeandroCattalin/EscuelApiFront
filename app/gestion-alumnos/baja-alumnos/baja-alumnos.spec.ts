import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaAlumnos } from './baja-alumnos';

describe('BajaAlumnos', () => {
  let component: BajaAlumnos;
  let fixture: ComponentFixture<BajaAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
