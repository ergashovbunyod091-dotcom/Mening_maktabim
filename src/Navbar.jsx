import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
          <BrowserRouter>
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link>1</li>
                <li><Link to="/about">About</Link>2</li>
                <li><Link to="/contact">Contact</Link>3</li>
                <li><Link to="/services">Services</Link>4</li>
                <li><Link to="/blog">Blog</Link>5</li>
                <li><Link to="/ABC">ABC</Link>6</li>
                <li><Link to="/faq">FAQ</Link>7</li>
            </ul>
        </nav>
            <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/services" element={<Servicespage />} />
            <Route path="/blog" element={<Blogpage />} />
            <Route path="/ABC" element={<ABCpage />} />
            <Route path="/faq" element={<FAQpage />} />
        </Routes>
    </BrowserRouter>
    );
    function Homepage() {
        return (
            <h3>Dushanba</h3>
        );
    }
       function Aboutpage() {
        return (
            <h3>Seshanba</h3>
        );
    }
       function Contactpage() {
        return (
            <h3>Chorshanba</h3>
        );
    }
       function Servicespage() {
        return (
            <h3>Payshanba</h3>
        );
    }
       function Blogpage() {
        return (
            <h3>Juma</h3>
        );
    }
       function ABCpage() {
        return (
            <h3>Shanba</h3>
        );
    }
       function FAQpage() {
        return (
            <h3>Yakshanba</h3>
        );
    }
};

export default Navbar;