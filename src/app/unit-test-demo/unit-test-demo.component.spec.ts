import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestDemoComponent } from './unit-test-demo.component';

describe('UnitTestDemoComponent', () => {
  let component: UnitTestDemoComponent;
  let fixture: ComponentFixture<UnitTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
