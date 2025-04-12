import { Route, Routes } from 'react-router-dom';
import pages from './pages';
export default function MainRouting() {  
  return (
    <Routes> 
      <Route path='' element={<pages.Home />}/>
      <Route path='Portfolio/services' element={<pages.Services />}/> 
      <Route path='Portfolio/resume' element={<pages.Resume />}/>
      <Route path='Portfolio/work' element={<pages.InProgress />}/> 
      <Route path='Portfolio/contact' element={<pages.Contact />}/> 
    </Routes>
  );
};