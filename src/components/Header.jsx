import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="logo">Indian Mythology</Link>
                    <div className="nav-right">
                    <ul className="nav-list">
                        <li>
                            <button onClick={toggleDropdown} className="dropdown-btn">Epics</button>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/ramayana">Ramayana</Link></li>
                                    <li><Link to="/mahabharata">Mahabharata</Link></li>
                                    <li><Link to="/vedas">Vedas</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/blog">Articles/Blog</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/resources">Learning Resources</Link></li>
                    </ul>
                    </div>
                    <div className="nav-actions">
                        <Link to="/search"><span className="icon-search"></span></Link>
                        <Link to="/login"><span className="icon-user"></span></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
