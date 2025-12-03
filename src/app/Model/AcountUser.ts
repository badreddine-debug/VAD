import { minLength, required, schema } from '@angular/forms/signals';

export interface AcountUser {
  email: string;
  password: string;
}

export const AcountUserSchema = schema<AcountUser>((context) => {
  required(context.email);
  required(context.password);
  minLength(context.password, 8);
});
