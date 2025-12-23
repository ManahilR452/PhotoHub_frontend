import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Camera, Info, Mail, Users, LogIn } from 'lucide-react';
import './Navigation.css';

function Navigation() {
  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/countries', label: 'Gallery', icon: <Camera size={20} /> },
    { to: '/community', label: 'Community', icon: <Users size={20} /> },
    { to: '/about', label: 'About', icon: <Info size={20} /> },
    { to: '/contact', label: 'Contact', icon: <Mail size={20} /> },
    { to: '/login', label: 'Login', icon: <LogIn size={20} /> }
  ];

  return (
    <nav className="navigation">
      <div className="brand">GlobeSnaps</div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;