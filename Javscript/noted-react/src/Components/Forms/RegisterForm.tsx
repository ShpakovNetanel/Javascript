import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../HTML _tags/Input.tsx";
import { Button } from "../HTML _tags/Button.tsx";
import { HyperText } from "../HTML _tags/HyperText.tsx";
import { Title } from "../HTML _tags/Title.tsx";
import "./LoginForm.css";

export default function RegisterForm() {
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
              required="true"
            />
            <Input
              title="Password"
              placeholder="Create Password(Min. 8 characters)"
              type="password"
              required="true"
            />
          </div>

          <div className="button-section">
            <Button value="Log In" />
            <HyperText text="Forgot My Password" href="/" className="reset" />
            <Link to="/signup" relative="path">
              <Button value="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
