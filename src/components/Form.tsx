import React, { ChangeEvent, FormEvent, useState } from "react";
import { Errors, User } from "../Interfaces";
import { validate } from "../validate";


export default function Form() {
  let userData: User = { username: "", email: "", password: "" };
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User>(userData);
  const [formErrors, setFormErrors] = useState<Errors>({} as Errors); //type assertion

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validateData: Errors = validate(user.email, user.password);
    setFormErrors(validateData);
    setSuccess(true);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="form-container">
      {success &&
      formErrors.emailError.length === 0 &&
      formErrors.passwordError.length === 0 ? (
        <div className="success-message">
          Success ! Thank you for Registration{" "}
        </div>
      ) : null}
      <form className="register-form" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          placeholder="UserName..."
          required
          className="form-field"
          onChange={onChangeHandler}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          required
          className="form-field"
          onChange={onChangeHandler}
        />
        {formErrors.emailError?.length === 0 ? null : (
          <span>{formErrors.emailError}</span>
        )}

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          required
          className="form-field"
          onChange={onChangeHandler}
        />
        {formErrors.passwordError?.length === 0 ? null : (
          <span>{formErrors.passwordError}</span>
        )}

        <button className="form-field" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
