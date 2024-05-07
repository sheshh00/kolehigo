import React from 'react';
import './App.css';

// DEFAULT PROFILE TAB
import Dashboard from './Components/Dashboard/Dashboard';

// UNDER PROFILE TAB
import LogInCredentials from './Components/Dashboard/ProfileTab/LogInCredentials/LogInCredentials';
// import MyColleges from './Components/Dashboard/ProfileTab/MyColleges/MyColleges';

// UNDER DASHBOARD
import Colleges from './Components/Dashboard/Colleges/Colleges';

// AUTHENTICATION PAGES
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

// CONTEXT PROVIDER
import { CollegeProvider } from './Components/Dashboard/Colleges/CollegeContext.jsx'

// ROUTING
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Defining router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/Dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/Colleges',
    element: <div><Colleges/></div>
  },
  {
    path: '/LogInCredentials',
    element: <div><LogInCredentials/></div>
  },
  // {
  //   path: '/MyColleges',
  //   element: <div><MyColleges/></div>
  // },
]);

function App() {
  return (
    // Providing the College context to all components within the RouterProvider
    <CollegeProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
    </CollegeProvider>
  );
}

export default App;
