import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAlumnos } from './mod-alumnos';

describe('ModAlumnos', () => {
  let component: ModAlumnos;
  let fixture: ComponentFixture<ModAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
