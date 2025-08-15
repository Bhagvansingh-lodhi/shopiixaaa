import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically call an API to subscribe the user
      console.log("Subscribed:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-secondary">
      <div className="container">
        <div className="row g-4">
          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 d-flex align-items-center">
              <i className="bi bi-shop me-2 fs-4"></i>
              <span className="text-gradient">Shopixa</span>
            </h5>
            <p className="text-white-50 mb-3">
              Your one-stop destination for quality products at affordable prices.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink 
                  to="/about" 
                  className="text-white-50 hover-white text-decoration-none d-flex align-items-center transition"
                >
                  <i className="bi bi-chevron-right me-2 small"></i>
                  About Us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/contact" 
                  className="text-white-50 hover-white text-decoration-none d-flex align-items-center transition"
                >
                  <i className="bi bi-chevron-right me-2 small"></i>
                  Contact
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/privacy" 
                  className="text-white-50 hover-white text-decoration-none d-flex align-items-center transition"
                >
                  <i className="bi bi-chevron-right me-2 small"></i>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/terms" 
                  className="text-white-50 hover-white text-decoration-none d-flex align-items-center transition"
                >
                  <i className="bi bi-chevron-right me-2 small"></i>
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center transition hover-white">
                <i className="bi bi-telephone me-3 fs-5"></i>
                <div>
                  <small className="text-white-50 d-block">Phone</small>
                  +1 (555) 123-4567
                </div>
              </li>
              <li className="mb-3 d-flex align-items-center transition hover-white">
                <i className="bi bi-envelope me-3 fs-5"></i>
                <div>
                  <small className="text-white-50 d-block">Email</small>
                  support@shopixa.com
                </div>
              </li>
              <li className="d-flex align-items-center transition hover-white">
                <i className="bi bi-geo-alt me-3 fs-5"></i>
                <div>
                  <small className="text-white-50 d-block">Address</small>
                  123 Main St, DELHI
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <p className="text-white-50 mb-3">
              Subscribe for updates, promotions and special offers
            </p>
            {subscribed ? (
              <div className="alert alert-success animate__animated animate__fadeIn">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="input-group mb-3">
                <input
                  type="email"
                  className="form-control bg-secondary border-0 text-white"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  className="btn btn-primary" 
                  type="submit"
                  aria-label="Subscribe"
                >
                  <i className="bi bi-send"></i>
                </button>
              </form>
            )}
            <small className="text-white-50">
              We'll never share your email with anyone else.
            </small>
          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <div className="d-flex gap-3 mb-4">
              {[
                { icon: "facebook", url: "https://facebook.com" },
                { icon: "twitter", url: "https://twitter.com" },
                { icon: "instagram", url: "https://instagram.com" },
                { icon: "youtube", url: "https://youtube.com" },
                { icon: "linkedin", url: "https://linkedin.com" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white fs-5 transition hover-scale"
                  aria-label={social.icon}
                >
                  <i className={`bi bi-${social.icon}`}></i>
                </a>
              ))}
            </div>
            <div className="text-white-50">
              <div className="mb-2 d-flex align-items-center">
                <i className="bi bi-credit-card me-2"></i>
                <div>
                  <small>Secure Payment</small>
                  <div className="d-flex mt-1">
                    {["visa", "mastercard", "paypal", "apple-pay"].map((method) => (
                      <i key={method} className={`bi bi-${method} me-2 fs-5`}></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-top border-secondary">
                <p className="mb-1">
                  Made with <i className="bi bi-heart-fill text-danger mx-1"></i> by{" "}
                  <NavLink to="/" className="text-white text-decoration-underline">
                    Bhagvan
                  </NavLink>
                </p>
                <small>© {new Date().getFullYear()} Shopixa. All rights reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;