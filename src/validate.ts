import { Errors } from "./Interfaces";

export function validate(email: string, password: string): Errors {
  let errors: Errors = { emailError: "", passwordError: "" };
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  if (!regex.test(email)) {
    errors.emailError = "This is not a valid email format!";
    // console.log(errors.emailError);
  }
  if (password.length < 4) {
    errors.passwordError = "Password length must be greater than 4";
    // console.log(password.length);
  } else if (password.length > 10) {
    errors.passwordError = "Password length can not be greater than 10";
  }
  //   console.log(errors);
  return errors;
}
