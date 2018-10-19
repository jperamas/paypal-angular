import { InjectionToken } from '@angular/core';
import { PaypalAppConfigModel } from './paypal-angular.model';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const PaypalOptionsTokenService = new InjectionToken<PaypalAppConfigModel>('PaypalAppConfigModel');
