import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../Components/Pages/Dashboard.tsx";
import { useAuth } from "../Context/AuthContext.tsx";
import LoginForm from "../Components/Forms/LoginForm.tsx";
import RegisterForm from "../Components/Forms/RegisterForm.tsx";
import Home from "../Components/Pages/Home.tsx";

const AppRouter: React.FC = () => {
  const { isAuthed } = useAuth();

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/dashboard"
          render={() => (isAuthed ? <Dashboard /> : <Redirect to="/home" />)}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
