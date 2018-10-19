export interface PaypalAppConfigModel {
    sandbox?: string;
    production?: string;
}

export interface PaypalAppStyleModel {
  size?: string;
  color?: string;
  shape?: string;
  label?: string;
  tagline?: string;
  layout?: string;
  fundingicons?: string
}

export interface PaypalAppFundingModel {
  allowed?: Array<any>;
  disallowed?: Array<any>;
}

export interface PaypalAppRefModel {
  CARD?: {
    AMEX?: string;
    CBNATIONALE?: string;
    CETELEM?: string;
    COFIDIS?: string;
    COFINOGA?: string;
    CUP?: string;
    DISCOVER?: string;
    ELO?: string;
    HIPER?: string;
    JCB?: string;
    MAESTRO?: string;
    MASTERCARD?: string;
    SWITCH?: string;
    VISA?: string
  };
  ENV?: {
    DEMO?: string;
    LOCAL?: string;
    PRODUCTION?: string;
    SANDBOX?: string;
    STAGE?: string;
    TEST?: string
  };
  SOURCE?: {
    BUTTON_FACTORY?: string;
    MANUAL?: string
  };
  USERS?: {
    ALL?: string;
    REMEMBERED?: string
  };
  default?: {
    version?: string
  };
  FUNDING?: {
    BANCONTACT?: string;
    CARD?: string;
    CREDIT?: string;
    ELV?: string;
    EPS?: string;
    GIROPAY?: string;
    IDEAL?: string;
    MYBANK?: string;
    P24?: string;
    PAYPAL?: string;
    SOFORT?: string;
    VENMO?: string;
    ZIMPLER?: string
  }
}
