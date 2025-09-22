import Homepage from '../pages/homepage';
import ProjectPage from '../pages/project'; 
import ContactPage from '../pages/contact';  
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  );
}
export default AppRouter;