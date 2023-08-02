 import React from 'react';
 import './App.css';
 import { Sidebar } from './Components/Sidebar/Sidebar.tsx';
import AppRouter from './Routers/AppRouter.tsx'

 export default function App() {
   return ( 
   <div className = "App" > 
   <AppRouter></AppRouter>
     <Sidebar />
     </div>
   );
 }