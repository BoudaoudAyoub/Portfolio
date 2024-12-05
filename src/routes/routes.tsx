import Home from '../pages/Home/home';
import { Route, Routes } from 'react-router-dom';
import Services from '../pages/Services/services';

export default function MainRouting() {  
  return (
    <Routes> 
      <Route
        path=''
        element={<Home />}/> 
      <Route
        path='/services'
        element={<Services />}/> 
      <Route
        path='/resume'
        element={'resume'}/> 
      <Route
        path='/work'
        element={'work'}/> 
      <Route
        path='/contact'
        element={'contact'}/> 
    </Routes>
  );
};