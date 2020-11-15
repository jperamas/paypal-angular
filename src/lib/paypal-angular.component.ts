import { Component, Input, OnInit } from '@angular/core';
import { PaypalAngularService } from './paypal-angular.service';
import { PaypalAppStyleModel, PaypalAppFundingModel } from './paypal-angular.model';

declare let paypal: any;
declare let localStorage: any;

// PayPal Ref
// https://developer.paypal.com/docs/checkout/how-to/customize-flow/#
// https://developer.paypal.com/docs/checkout/how-to/customize-flow/#show-a-confirmation-page
// https://developer.paypal.com/docs/classic/api/locale_codes/#
// https://developer.paypal.com/docs/checkout/how-to/customize-button/#multiple-button-layout
// https://developer.paypal.com/docs/checkout/best-practices/#
// https://developer.paypal.com/docs/checkout/integrate/#2-set-up-a-payment

@Component({
  selector: 'lib-paypal-angular-button',
  templateUrl: './paypal-angular.component.html',
  styles: []
})
export class PaypalAngularComponent implements OnInit {
  @Input() locale: string;
  @Input() env: string;
  @Input() commit: boolean;
  @Input() payment: Function;
  @Input() onAuthorize: Function;
  @Input() onCancel: Function;
  @Input() onError: Function;
  @Input() style: PaypalAppStyleModel;
  @Input() funding: PaypalAppFundingModel;
  private PAYPAL_SCRIPT = 'PAYPAL_SCRIPT_TAG';
  private PAYPAL_URL = 'https://www.paypalobjects.com/api/checkout.js';
  paypalConfig: any = {};
  default = {
    locale: 'en_US',
    commit: true,
    env: 'sandbox'
  };
  idElement = `#paypal-container-element-${Date.now()}`;

  constructor(
    private paypalAngularService: PaypalAngularService
  ) {

  }

  ngOnInit() {
     const client = this.paypalAngularService.getConfig();
     this.paypalConfig = {
      locale: this.locale || this.default.locale,
      commit: this.commit || this.default.commit,
      env: this.env || this.default.env,
      client: {
        sandbox: client.sandbox,
        production: client.production
      },
      payment: () => null,
      onAuthorize: () => null
    };

    
    if (this.payment) {
      this.paypalConfig.payment = this.payment;
    }
    if (this.onAuthorize) {
      this.paypalConfig.onAuthorize = this.onAuthorize;
    }
    if (this.onCancel) {
      this.paypalConfig.onCancel = this.onCancel;
    }
    if (this.onError) {
      this.paypalConfig.onError = this.onError;
    }
    if (this.style) {
      this.paypalConfig.style = this.style;
    }
    if (this.funding) {
      this.paypalConfig.funding = this.funding;
    }
    if (!document.getElementById(this.PAYPAL_SCRIPT)) {
      this.addPaypalScript().then(() => {
        this.paypalAngularService.setPaypalRef(paypal);
          paypal.Button.render(this.paypalConfig, this.idElement);
      });
    } else if (paypal) {
      setTimeout(() => {
        paypal.Button.render(this.paypalConfig, this.idElement);
      }, 200);
    }
  }

  addPaypalScript() {
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.id = this.PAYPAL_SCRIPT;
      scripttagElement.src = this.PAYPAL_URL;
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

}
