import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/classes', label: 'Kelas' },
        { path: '/journey', label: 'Perjalanan Kami' },
        { path: '/blog', label: 'Stories' },
    ];

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="nav-logo">
                        <span className="logo-text">HCFBTR</span>
                    </Link>

                    <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="nav-cta-group">
                            <Link to="/donate" className="btn btn-primary btn-sm">
                                Donate
                            </Link>
                            <Link to="/volunteer" className="btn btn-outline btn-sm">
                                Volunteer
                            </Link>
                        </div>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
