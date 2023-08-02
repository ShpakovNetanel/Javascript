 import React from 'react';
 import './App.css';
 import LoginForm from './Components/Forms/LoginForm.tsx';
 import RegisterForm from './Components/Forms/RegisterForm.tsx'
 import { Sidebar } from './Components/Sidebar/Sidebar.tsx';
 import Dashboard from './Components/Pages/Dashboard.tsx'
 import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import { useAuth } from './Context/AuthContext.tsx';

 export default function App() {
    const {isAuthed, setIsAuthed} = useAuth()

   const router = createBrowserRouter([{
       path: '/login',
       element: <LoginForm />
     },
     {
       path: '/register',
       element: <RegisterForm />
     },
     {
       path: '/dashboard',
       element: <Dashboard />
     }
   ])

   return ( 
   <div className = "App" >
         <RouterProvider router = {
       router
     }
     /> 
     <Sidebar />
    { isAuthed  ? (
        <Dashboard /> 
    ) : (
      <LoginForm />
    )}
     </div>
   );
 }