import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './firebase/AuthContext';
import { OrganizationProvider } from './context/OrganizationContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Journey from './pages/Journey';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import DataMigration from './pages/DataMigration';
import PageMigration from './pages/PageMigration';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrganizationProvider>
          <Router>
            <AnalyticsProvider>
              <ScrollToTop />
              <div className="app">
                <Navigation />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/journey" element={<Journey />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/volunteer" element={<Volunteer />} />
                    <Route path="/migrate" element={<DataMigration />} />
                    <Route path="/migrate-pages" element={<PageMigration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </AnalyticsProvider>
          </Router>
        </OrganizationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
