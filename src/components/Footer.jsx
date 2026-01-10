import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">HCFBTR</h3>
                        <p className="footer-description">
                            Membimbing & membina generasi masa depan melalui pendidikan berkualiti dan nilai-nilai murni.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Navigasi</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/classes">Kelas</Link></li>
                            <li><Link to="/journey">Perjalanan Kami</Link></li>
                            <li><Link to="/blog">Stories</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Terlibat</h4>
                        <ul className="footer-links">
                            <li><Link to="/donate">Donate</Link></li>
                            <li><Link to="/volunteer">Volunteer</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Hubungi Kami</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📧</span>
                                <a href="mailto:info@hcfbtr.org">info@hcfbtr.org</a>
                            </li>
                            <li>
                                <span className="contact-icon">📱</span>
                                <span>+60 123 456 7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} HCFBTR. All rights reserved.</p>
                    <p className="footer-tagline">Built with ❤️ for our community</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
