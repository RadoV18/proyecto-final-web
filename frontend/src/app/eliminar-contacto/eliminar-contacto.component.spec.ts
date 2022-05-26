import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContactoComponent } from './eliminar-contacto.component';

describe('EliminarContactoComponent', () => {
  let component: EliminarContactoComponent;
  let fixture: ComponentFixture<EliminarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
