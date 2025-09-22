import Homepage from '../pages/homepage';
import ProjectPage from '../pages/project';   
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
  );
}
export default AppRouter;