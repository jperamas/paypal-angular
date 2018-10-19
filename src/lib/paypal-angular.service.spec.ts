import { TestBed, inject } from '@angular/core/testing';

import { PaypalAngularService } from './paypal-angular.service';

describe('PaypalAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaypalAngularService]
    });
  });

  it('should be created', inject([PaypalAngularService], (service: PaypalAngularService) => {
    expect(service).toBeTruthy();
  }));
});
