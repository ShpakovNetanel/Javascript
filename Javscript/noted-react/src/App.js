import React from 'react';
import './App.css';
import LoginForm from './Components/Forms/LoginForm.tsx';
import { Sidebar } from './Components/Sidebar/Sidebar.tsx';

export default function App() {
  return (
    <div className="App">
      <Sidebar/>
      <LoginForm/>
    </div>
  );
}