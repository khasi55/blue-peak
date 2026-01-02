import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

const Footer = () => (
    <footer style={{ background: 'var(--bg-darker)', padding: '80px 0 30px', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        <div className="container-custom" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>&copy; 2025 Jaspro Solutions. All rights reserved.</p>
        </div>
    </footer>
);

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
