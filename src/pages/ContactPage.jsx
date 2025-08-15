import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* Hero Section */}
        <div className="bg-primary bg-gradient py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-4 fw-bold text-white mb-3">Let's Connect</h1>
                <p className="lead text-white-50 mb-4">
                  We're here to help and answer any questions you might have.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                  <a href="#contact-form" className="btn btn-light btn-lg rounded-pill px-4">
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </a>
                  <a href="tel:+15551234567" className="btn btn-outline-light btn-lg rounded-pill px-4">
                    <i className="fas fa-phone me-2"></i> Call Now
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Customer support" 
                  className="img-fluid rounded-4 shadow"
                  style={{ transform: "rotate(3deg)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container my-5 py-4">
          {/* Contact Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-scale">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <h3 className="h4 fw-bold">Our Location</h3>
                  <p className="text-muted mb-0">123 Shopixa Street</p>
                  <p className="text-muted">Mumbai, India</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-link text-primary text-decoration-none"
                  >
                    View on Map <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-scale">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4">
                    <i className="fas fa-phone-alt fa-2x"></i>
                  </div>
                  <h3 className="h4 fw-bold">Call Us</h3>
                  <p className="text-muted mb-0">+1 (555) 123-4567</p>
                  <p className="text-muted">Mon-Fri, 9am-6pm IST</p>
                  <a 
                    href="tel:+15551234567" 
                    className="btn btn-link text-primary text-decoration-none"
                  >
                    Call Now <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-scale">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <h3 className="h4 fw-bold">Email Us</h3>
                  <p className="text-muted mb-0">support@shopixa.com</p>
                  <p className="text-muted">Response within 24 hours</p>
                  <a 
                    href="mailto:support@shopixa.com" 
                    className="btn btn-link text-primary text-decoration-none"
                  >
                    Email Now <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="row g-4" id="contact-form">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 p-lg-5">
                  <h2 className="fw-bold mb-4">Get In Touch</h2>
                  <p className="text-muted mb-4">
                    Have questions about our products or services? Fill out the form and 
                    our team will get back to you as soon as possible.
                  </p>
                  
                  {submitSuccess && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      Your message has been sent successfully! We'll contact you soon.
                      <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setSubmitSuccess(false)}
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="fas fa-user text-primary"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="fas fa-envelope text-primary"></i>
                        </span>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="fas fa-tag text-primary"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0 align-items-start pt-2">
                          <i className="fas fa-comment text-primary"></i>
                        </span>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          rows="5"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg w-100 py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <div className="card-body p-0">
                  <div className="map-container" style={{ height: "100%", minHeight: "400px" }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715873056054!2d72.8242143153771!3d19.04372225800052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df05cf75b9%3A0x2f1a5e5e5e5e5e5e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy"
                      title="Google Maps Location"
                    ></iframe>
                  </div>
                </div>
                <div className="card-footer bg-light border-0 py-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0 fw-bold">Shopixa Headquarters</h6>
                      <small className="text-muted">123 Shopixa Street, Mumbai</small>
                    </div>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-light py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
              <p className="text-muted">Find quick answers to common questions</p>
            </div>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-question-circle text-primary me-2"></i>
                      How can I track my order?
                    </h5>
                    <p className="text-muted">
                      Once your order ships, you'll receive a tracking number via email. 
                      You can track your package directly on our website or the carrier's site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-question-circle text-primary me-2"></i>
                      What's your return policy?
                    </h5>
                    <p className="text-muted">
                      We offer a 30-day return policy for most items. Items must be 
                      unused and in original packaging. Some exclusions apply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-question-circle text-primary me-2"></i>
                      Do you offer international shipping?
                    </h5>
                    <p className="text-muted">
                      Yes! We ship to over 50 countries worldwide. Shipping costs and 
                      delivery times vary by destination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-question-circle text-primary me-2"></i>
                      How can I contact customer support?
                    </h5>
                    <p className="text-muted">
                      You can reach us via phone, email, or live chat during business hours. 
                      Response times are typically under 2 hours for live chat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .contact-page {
          padding-top: 80px;
        }
        .icon-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-scale:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .divider {
          height: 4px;
          width: 80px;
          background: linear-gradient(90deg, #0d6efd, #6c63ff);
          margin: 1rem auto;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
};

export default ContactPage;