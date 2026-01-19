import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Layout from './layouts/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<LandingPage />} />
            <Route path="skills" element={<LandingPage />} />
            <Route path="projects" element={<LandingPage />} />
            <Route path="contact" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
