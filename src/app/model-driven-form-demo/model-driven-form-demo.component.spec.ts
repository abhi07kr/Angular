import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormDemoComponent } from './model-driven-form-demo.component';

describe('ModelDrivenFormDemoComponent', () => {
  let component: ModelDrivenFormDemoComponent;
  let fixture: ComponentFixture<ModelDrivenFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
