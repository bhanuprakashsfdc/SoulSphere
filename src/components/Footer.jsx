import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="mission-statement">
                        Dedicated to exploring and sharing the rich tapestry of Indian Mythology.
                    </p>
                    <div className="social-media-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                    </div>
                    <div className="contact-info">
                        <p>Email: info@indianmythology.com</p>
                        <p>Phone: +91 123 456 7890</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Indian Mythology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
