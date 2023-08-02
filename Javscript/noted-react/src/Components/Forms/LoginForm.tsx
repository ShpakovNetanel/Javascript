import React from "react";
import "./LoginForm.css";
import Input from "../HTML _tags/Input.tsx";
import Button from "../HTML _tags/Button.tsx";
import HyperText from "../HTML _tags/HyperText.tsx";
import Title from "../HTML _tags/Title.tsx";
export default function LoginForm() {
  return (
    <div className="LoginForm">
      <div className="container">
        <div className="log-in">
          <Title title="Sign In" />

          <div className="input-section">
            <Input
              title="Email Address"
              placeholder="email@address.com"
              type="email"
              required={true}
            />
            <Input
              title="Password"
              placeholder="Create Password(Min. 8 characters)"
              type="password"
              required={true}
            />
          </div>

          <div className="button-section">
            <Button value="Log In" link="/login"/>
            <HyperText text="Forgot My Password" href="/" className="reset" />
            <Button value="Sign Up" link="/register" />
          </div>
        </div>
      </div>
    </div>
  );
}
