import { Route, Routes } from 'react-router-dom';
import pages from './pages';
export default function MainRouting() {  
  return (
    <Routes> 
      <Route path='' element={<pages.Home />}/> 
      <Route path='/services' element={<pages.Services />}/> 
      <Route path='/resume' element={<pages.Resume />}/>
      <Route path='/work' element={'work'}/> 
      <Route path='/contact' element={'contact'}/> 
    </Routes>
  );
};