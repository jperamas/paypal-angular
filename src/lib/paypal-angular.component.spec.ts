import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalAngularComponent } from './paypal-angular.component';

describe('PaypalAngularComponent', () => {
  let component: PaypalAngularComponent;
  let fixture: ComponentFixture<PaypalAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
