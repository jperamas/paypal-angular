import { NgModule, ModuleWithProviders } from '@angular/core';
import { PaypalAngularComponent } from './paypal-angular.component';
import { PaypalAngularService } from './paypal-angular.service';
import { PaypalOptionsTokenService } from './paypal-angular-token.service';
import { PaypalAppConfigModel } from './paypal-angular.model';

@NgModule({
  imports: [
  ],
  declarations: [PaypalAngularComponent],
  exports: [PaypalAngularComponent]
})
export class PaypalAngularModule {
  static forRoot(config: PaypalAppConfigModel): ModuleWithProviders {
    return {
        ngModule: PaypalAngularModule,
        providers: [
          PaypalAngularService,
          {
            provide: PaypalOptionsTokenService,
            useValue: config
          }
        ]
    };
  }
}
