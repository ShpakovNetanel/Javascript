import React from "react";
import { Route } from "react-router-dom";
import Input from "../HTML _tags/Input.tsx";
import Button from "../HTML _tags/Button.tsx";
import HyperText from "../HTML _tags/HyperText.tsx";
import Title from "../HTML _tags/Title.tsx";
import "./LoginForm.css";

export default function RegisterForm() {
  return (
    <div className="LoginForm">
      <div className="container">
        <div className="log-in">
          <Title title="Sign Up" />

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
            <Button value="Sign Up" />
            <HyperText text="Forgot My Password" href="/" className="reset" />
            <Button value="Log in" link="/login" />
          </div>
        </div>
      </div>
    </div>
  );
}
