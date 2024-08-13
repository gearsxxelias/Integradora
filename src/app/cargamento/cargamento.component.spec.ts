import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargamentoComponent } from './cargamento.component';

describe('CargamentoComponent', () => {
  let component: CargamentoComponent;
  let fixture: ComponentFixture<CargamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
