import Homepage from '../pages/homepage';
import ProjectPage from '../pages/project'; 
import ContactPage from '../pages/contact';
import AboutPage from '../pages/about';
import PortfolioPage from '../pages/portfolio';
import EcoBohol from '../pages/ecobohol';
import Rental from '../pages/rental';
import Tracker from '../pages/tracker';
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/ecobohol" element={<EcoBohol />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
  );
}
export default AppRouter;