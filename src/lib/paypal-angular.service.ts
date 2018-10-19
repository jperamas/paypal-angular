import { Injectable, Inject } from '@angular/core';
import { PaypalAppConfigModel, PaypalAppRefModel } from './paypal-angular.model';
import { PaypalOptionsTokenService } from './paypal-angular-token.service';

const defaultPaypalRef: PaypalAppRefModel = {
  CARD: {
    AMEX: 'amex',
    CBNATIONALE: 'cbnationale',
    CETELEM: 'cetelem',
    COFIDIS: 'cofidis',
    COFINOGA: 'cofinoga',
    CUP: 'cup',
    DISCOVER: 'discover',
    ELO: 'elo',
    HIPER: 'hiper',
    JCB: 'jcb',
    MAESTRO: 'maestro',
    MASTERCARD: 'mastercard',
    SWITCH: 'switch',
    VISA: 'visa'
  },
  ENV: {
    DEMO: 'demo',
    LOCAL: 'local',
    PRODUCTION: 'production',
    SANDBOX: 'sandbox',
    STAGE: 'stage',
    TEST: 'test'
  },
  SOURCE: {
    BUTTON_FACTORY: 'button_factory',
    MANUAL: 'manual'
  },
  USERS: {
    ALL: 'all',
    REMEMBERED: 'remembered'
  },
  default: {
    version: '4.0.228'
  },
  FUNDING : {
    BANCONTACT: 'bancontact',
    CARD: 'card',
    CREDIT: 'credit',
    ELV: 'elv',
    EPS: 'eps',
    GIROPAY: 'giropay',
    IDEAL: 'ideal',
    MYBANK: 'mybank',
    P24: 'p24',
    PAYPAL: 'paypal',
    SOFORT: 'sofort',
    VENMO: 'venmo',
    ZIMPLER: 'zimpler'
  }
};

@Injectable({
  providedIn: 'root'
})
export class PaypalAngularService {

  private _config: PaypalAppConfigModel;
  private _paypal: any;

  constructor(
    @Inject(PaypalOptionsTokenService) private config: PaypalAppConfigModel
  ) {
    this._config = config;
  }

  public getConfig(): PaypalAppConfigModel {
      return this._config;
  }

  public getPaypalRef(): PaypalAppRefModel {
    return this._paypal || defaultPaypalRef;
  }

  setPaypalRef(paypal) {
    this._paypal = paypal;
  }

}
