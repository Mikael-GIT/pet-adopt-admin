/* eslint-disable @typescript-eslint/no-inferrable-types */
export class PaymentRequest {
  transactionAmount: number;
  description: string;
  payer: {
    firstName: string;
    lastName: string;
    email: string;
    identification: {
      type: string;
      number: string;
    }
  };
}
