paypal-angular
==============

Paypal Angular is a module to provide easy and fast integration with [PayPal Checkout Button](https://developer.paypal.com/docs/checkout/how-to/customize-button). Paypal-Angular wraps Paypal Button flow operations checkout for client integration.

## Installing

```sh
npm i paypal-angular
```
or

```sh
yarn add paypal-angular
```

## Init
Make paypal-angular available throughout your app

```typescript
import { NgModule } from "@angular/core";
import { PaypalAngularModule, PaypalAppConfigModel } from "paypal-angular"

const paypalConfig: PaypalAppConfigModel = {
  sandbox: '...YOUR-PAYPAL-CLIENT-ID-SANDBOX...',
  production: '...YOUR-PAYPAL-CLIENT-ID-PRODUCTION...'
};

@NgModule({
  imports: [ PaypalAngularModule.forRoot(paypalConfig) ]
}) export class AppModule {}
```

## More informatión about checkout process
There are 2 ways of bringing paypal into your web app. 
Client side express checkout using REST – [Click here.](https://developer.paypal.com/demo/checkout/#/pattern/client)
Server side express checkout using REST – [Click here.](https://developer.paypal.com/demo/checkout/#/pattern/server)
I would highly recommend you to read these two links first before you proceed further.
check [Flow Playpal checkout](https://developer.paypal.com/docs/checkout/integrate/#2-set-up-a-payment)
Signup for a paypal developer account using this link – https://developer.paypal.com/
Now create an app (in sandbox mode). You’ll be given a key.


## Use in template
Add tag in your template component (e.g. product.component.html)

```html
<lib-paypal-angular-button
  [locale]="locale"
  [env]="env"
  [commit]="commit"
  [payment]="payment"
  [onAuthorize]="onAuthorize"
  [style]="style"
  [funding]="funding"
></lib-paypal-angular-button>
```
## Use in component
Config your checkout in component (e.g. product.component.ts)
Customize the PayPal Checkout Button [check here](https://developer.paypal.com/docs/checkout/how-to/customize-button/#customization-example)

```typescript
import { Component, OnInit } from '@angular/core';
import { PaypalAppStyleModel, PaypalAppFundingModel, PaypalAngularService } from 'paypal-angular';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  payment: Function;
  onAuthorize: Function;
  locale = 'es_ES';
  env = 'sandbox';
  commit = true;
  style: PaypalAppStyleModel;
  funding: PaypalAppFundingModel;

  constructor (
    private paypalAngularService: PaypalAngularService
  ) {
    const paypal = this.paypalAngularService.getPaypalRef();
    this.style = {
      color: 'gold',
      layout: 'vertical'
    }
    this.payment = (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: 10,
                currency: 'USD'
              }
            }
          ]
        }
      });
    };
    this.onAuthorize = (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Do something when payment is successful.
      });
    };
  }

  ngOnInit() {}

}

```
