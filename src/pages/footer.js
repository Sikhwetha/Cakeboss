import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Restaurant Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
