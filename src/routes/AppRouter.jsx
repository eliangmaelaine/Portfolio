import Homepage from '../pages/homepage';
import ProjectPage from '../pages/project';
import ContactPage from '../pages/contact';
import AboutPage from '../pages/about';
import ProjectDetailsPage from '../pages/project-detail';
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project-details/:id" element={<ProjectDetailsPage />} />
    </Routes>
  );
}
export default AppRouter;