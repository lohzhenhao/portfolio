import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/project/:projectId" element={<ProjectDetail />} />
        </Routes>
    );
}

export default App;