 import React from 'react';
import './App.css';
import LoginForm from './Components/Forms/LoginForm.tsx';
import RegisterForm from './Components/Forms/RegisterForm.tsx'
import { Sidebar } from './Components/Sidebar/Sidebar.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
    path: '/login',
    element: <LoginForm />
   },
   {
    path: '/register',
    element: <RegisterForm />
   } 
  ])
  return (
    <div className="App">
      <Sidebar/>
      <RouterProvider router={router} />
    </div>
  );
}