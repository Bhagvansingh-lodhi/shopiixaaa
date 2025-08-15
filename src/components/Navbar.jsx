import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Announcement Bar */}
            <div className="announcement-bar bg-primary text-white text-center py-2 small">
                <div className="container">
                    Free shipping on all orders over $50 | Use code <strong>SHOPIXA10</strong> for 10% off
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`navbar navbar-expand-lg navbar-dark py-3 sticky-top ${scrolled ? 'scrolled shadow-lg' : ''}`}>
                <div className="container">
                    {/* Brand Logo with Animation */}
                    <NavLink 
                        className="navbar-brand d-flex align-items-center" 
                        to="/"
                        onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
                        onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
                    >
                        <div className="logo-icon">
                            <i className="bi bi-shop-window"></i>
                        </div>
                        <span className="brand-text ms-2">SHOPIXA</span>
                    </NavLink>

                    {/* Mobile Toggle Button */}
                    <button 
                        className={`navbar-toggler border-0 ${mobileMenuOpen ? 'open' : ''}`}
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                    </button>

                    {/* Main Navigation */}
                    <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {[
                                { path: "/", name: "Home", icon: "house-door" },
                                { path: "/product", name: "Products", icon: "grid" },
                                { path: "/about", name: "About", icon: "info-circle" },
                                { path: "/contact", name: "Contact", icon: "headset" }
                            ].map((item) => (
                                <li className="nav-item mx-1 mx-lg-2" key={item.path}>
                                    <NavLink 
                                        className="nav-link d-flex flex-column align-items-center px-3"
                                        to={item.path}
                                        activeclassname="active"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <i className={`bi bi-${item.icon} fs-5 mb-1`}></i>
                                        <span>{item.name}</span>
                                        <div className="nav-underline"></div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Right Side Icons */}
                        <div className="d-flex align-items-center gap-3">
                            {/* Search Bar - Desktop */}
                            <div className={`search-container d-none d-lg-flex ${searchOpen ? 'open' : ''}`}>
                                <input 
                                    type="text" 
                                    className="form-control search-input" 
                                    placeholder="Search products..." 
                                    aria-label="Search"
                                />
                                <button className="btn search-btn" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>

                            {/* Search Toggle - Mobile */}
                            <button 
                                className="btn btn-icon d-lg-none"
                                onClick={() => setSearchOpen(!searchOpen)}
                            >
                                <i className="bi bi-search"></i>
                            </button>

                            {/* Mobile Search - Shows when toggled */}
                            {searchOpen && (
                                <div className="mobile-search d-lg-none">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Search..." 
                                    />
                                    <button 
                                        className="btn btn-close-search"
                                        onClick={() => setSearchOpen(false)}
                                    >
                                        <i className="bi bi-x"></i>
                                    </button>
                                </div>
                            )}

                            {/* Account Dropdown */}
                            <div className="dropdown account-dropdown">
                                <button 
                                    className="btn btn-icon" 
                                    type="button" 
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><NavLink className="dropdown-item" to="/login"><i className="bi bi-box-arrow-in-right me-2"></i>Login</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/register"><i className="bi bi-person-plus me-2"></i>Register</NavLink></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><NavLink className="dropdown-item" to="/profile"><i className="bi bi-person-circle me-2"></i>Profile</NavLink></li>
                                </ul>
                            </div>
                            
                            {/* Cart with Floating Badge */}
                            <NavLink 
                                to="/cart" 
                                className="btn btn-icon position-relative"
                            >
                                <i className="bi bi-cart3"></i>
                                {state.length > 0 && (
                                    <span className="cart-badge">
                                        {state.length}
                                        <span className="visually-hidden">items in cart</span>
                                    </span>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Custom CSS */}
            <style jsx>{`
                .announcement-bar {
                    background: linear-gradient(90deg, #0d6efd, #6c63ff);
                }
                
                nav {
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }
                
                nav.scrolled {
                    background: rgba(0, 0, 0, 0.95);
                    padding-top: 0.25rem;
                    padding-bottom: 0.25rem;
                }
                
                .navbar-brand {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .logo-icon {
                    font-size: 1.75rem;
                    color: #6c63ff;
                    transition: all 0.3s ease;
                }
                
                .brand-text {
                    font-size: 1.75rem;
                    font-weight: 700;
                    background: linear-gradient(90deg, #6c63ff, #0d6efd);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: all 0.3s ease;
                }
                
                .navbar-brand.hovered .logo-icon {
                    transform: rotate(15deg) scale(1.1);
                }
                
                .navbar-brand.hovered .brand-text {
                    background: linear-gradient(90deg, #0d6efd, #6c63ff);
                }
                
                .nav-link {
                    color: rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                    position: relative;
                    padding: 0.5rem 1rem;
                }
                
                .nav-link:hover, .nav-link.active {
                    color: white;
                }
                
                .nav-underline {
                    height: 2px;
                    width: 0;
                    background: linear-gradient(90deg, #6c63ff, #0d6efd);
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover .nav-underline, 
                .nav-link.active .nav-underline {
                    width: 70%;
                }
                
                .navbar-toggler {
                    position: relative;
                    width: 30px;
                    height: 30px;
                    background: transparent;
                    padding: 0;
                }
                
                .navbar-toggler-line {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background: white;
                    margin: 6px 0;
                    transition: all 0.3s ease;
                }
                
                .navbar-toggler.open .navbar-toggler-line:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .navbar-toggler.open .navbar-toggler-line:nth-child(2) {
                    opacity: 0;
                }
                
                .navbar-toggler.open .navbar-toggler-line:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -5px);
                }
                
                .search-container {
                    position: relative;
                    width: 200px;
                    transition: all 0.3s ease;
                }
                
                .search-container.open {
                    width: 250px;
                }
                
                .search-input {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    padding-right: 40px;
                    border-radius: 50px;
                }
                
                .search-input:focus {
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: none;
                    color: white;
                }
                
                .search-btn {
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                }
                
                .mobile-search {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.95);
                    z-index: 1000;
                    display: flex;
                }
                
                .mobile-search input {
                    flex: 1;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    padding: 0.5rem 1rem;
                }
                
                .btn-close-search {
                    background: transparent;
                    border: none;
                    color: white;
                    margin-left: 0.5rem;
                }
                
                .btn-icon {
                    color: rgba(255, 255, 255, 0.8);
                    background: transparent;
                    border: none;
                    font-size: 1.25rem;
                    padding: 0.5rem;
                    transition: all 0.3s ease;
                }
                
                .btn-icon:hover {
                    color: white;
                    transform: translateY(-2px);
                }
                
                .cart-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    background: #6c63ff;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    font-weight: bold;
                }
                
                .dropdown-menu {
                    background: rgba(0, 0, 0, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .dropdown-item {
                    color: rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                }
                
                .dropdown-item:hover {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                }
                
                @media (max-width: 991.98px) {
                    .navbar-collapse {
                        padding: 1rem;
                        background: rgba(0, 0, 0, 0.95);
                        margin-top: 1rem;
                        border-radius: 0.5rem;
                    }
                    
                    .nav-item {
                        margin: 0.5rem 0;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;