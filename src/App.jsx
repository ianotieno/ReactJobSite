import React from 'react';
import{ 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,}  
 from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAll from './components/ViewAll';



const router= createBrowserRouter(createRoutesFromElements(<Route index element={<h1>My App</h1>}/>));
const App=()=>{



  return <RouterProvider router= {router}/>
  
};
export default App;