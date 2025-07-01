import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SkillDetail from './pages/SkillDetail';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill/:slug" element={<SkillDetail />} />
      </Routes>
      <Toaster position="bottom-right" richColors closeButton />
      <Footer />
    </div>
  );
}

export default App;
