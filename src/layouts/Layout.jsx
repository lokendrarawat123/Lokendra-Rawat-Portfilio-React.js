import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

const Layout = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? '' : 'bg-white'} min-h-screen flex flex-col transition-colors`}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
