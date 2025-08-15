import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="about-hero bg-dark text-white position-relative overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center min-vh-60 py-5">
            <div className="col-lg-6 text-center text-lg-start py-5">
              <h1 className="display-3 fw-bold mb-4">
                <span className="text-gradient">Redefining Fashion</span> for the Modern Era
              </h1>
              <p className="lead mb-4 opacity-75">
                Where style meets substance in every stitch and silhouette
              </p>
              <button className="btn btn-outline-light btn-lg px-4 rounded-pill">
                Explore Our Collections
              </button>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="floating-images">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Fashion model" 
                  className="img-1 rounded-4 shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Fashion details" 
                  className="img-2 rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Fashion studio" 
                className="img-fluid rounded-4 shadow-lg mb-4"
              />
              <div className="position-absolute bottom-0 start-0 translate-middle bg-white p-3 rounded-3 shadow-sm">
                <h3 className="mb-0 fw-bold">Since 2015</h3>
                <p className="mb-0 text-muted small">Crafting exceptional fashion</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pe-lg-5">
              <h6 className="text-uppercase text-primary fw-bold mb-3">Our Heritage</h6>
              <h2 className="display-5 fw-bold mb-4">The Story Behind Our Designs</h2>
              <p className="lead text-muted mb-4">
                Born from a passion for authentic self-expression, we've grown from a small atelier to 
                an internationally recognized fashion house without losing our artisan roots.
              </p>
              <p className="text-muted mb-4">
                Each collection tells a story - of craftsmanship honed over generations, of sustainable 
                practices that respect our planet, and of designs that celebrate individuality while 
                creating community.
              </p>
              <div className="d-flex align-items-center">
                <button className="btn btn-primary px-4 rounded-pill me-3">
                  Meet Our Designers
                </button>
                <a href="#" className="text-decoration-none fw-bold">
                  View Timeline <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-uppercase text-primary fw-bold mb-3">Curated Collections</h6>
            <h2 className="display-5 fw-bold mb-4">Explore Our Signature Lines</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
              Each piece is designed to transcend seasons and trends, becoming a lasting part of your story
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 rounded-4 overflow-hidden shadow-lg hover-zoom">
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark-gradient">
                  <h3 className="text-white fw-bold mb-2">Women's Couture</h3>
                  <p className="text-white-50 mb-3">Elegance redefined for the modern woman</p>
                  <button className="btn btn-outline-light align-self-start">
                    Discover
                  </button>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Women's Couture" 
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 rounded-4 overflow-hidden shadow-lg hover-zoom">
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark-gradient">
                  <h3 className="text-white fw-bold mb-2">Men's Essentials</h3>
                  <p className="text-white-50 mb-3">Timeless pieces for the discerning gentleman</p>
                  <button className="btn btn-outline-light align-self-start">
                    Discover
                  </button>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Men's Essentials" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container my-5 py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <div className="card-body p-4">
                <div className="icon-xl bg-primary bg-opacity-10 text-primary rounded-3 mb-4">
                  <i className="bi bi-recycle"></i>
                </div>
                <h3 className="fw-bold mb-3">Sustainable Fashion</h3>
                <p className="text-muted mb-4">
                  We're committed to ethical sourcing and reducing our environmental impact at every stage of production.
                </p>
                <a href="#" className="text-decoration-none fw-bold">
                  Learn About Our Practices <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <div className="card-body p-4">
                <div className="icon-xl bg-primary bg-opacity-10 text-primary rounded-3 mb-4">
                  <i className="bi bi-hand-thumbs-up"></i>
                </div>
                <h3 className="fw-bold mb-3">Artisan Craftsmanship</h3>
                <p className="text-muted mb-4">
                  Each piece is crafted by skilled artisans using techniques perfected over generations.
                </p>
                <a href="#" className="text-decoration-none fw-bold">
                  Meet Our Makers <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <div className="card-body p-4">
                <div className="icon-xl bg-primary bg-opacity-10 text-primary rounded-3 mb-4">
                  <i className="bi bi-heart"></i>
                </div>
                <h3 className="fw-bold mb-3">Inclusive Design</h3>
                <p className="text-muted mb-4">
                  We celebrate diversity with styles designed for all body types, ages, and personal expressions.
                </p>
                <a href="#" className="text-decoration-none fw-bold">
                  Our Size Guide <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-uppercase text-primary fw-bold mb-3">The Visionaries</h6>
            <h2 className="display-5 fw-bold mb-4">Meet Our Creative Team</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 bg-white rounded-4 overflow-hidden shadow-sm h-100">
                <div className="team-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Sarah Chen" 
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h4 className="fw-bold mb-1">Sarah Chen</h4>
                  <p className="text-muted small mb-3">Creative Director</p>
                  <p className="text-muted">
                    With 15 years in high fashion, Sarah brings an unparalleled eye for detail to every collection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-white rounded-4 overflow-hidden shadow-sm h-100">
                <div className="team-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="James Rodriguez" 
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h4 className="fw-bold mb-1">James Rodriguez</h4>
                  <p className="text-muted small mb-3">Head of Design</p>
                  <p className="text-muted">
                    James' innovative approach to menswear has earned him international acclaim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-white rounded-4 overflow-hidden shadow-sm h-100">
                <div className="team-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Amina Diallo" 
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h4 className="fw-bold mb-1">Amina Diallo</h4>
                  <p className="text-muted small mb-3">Sustainability Lead</p>
                  <p className="text-muted">
                    Amina ensures our ethical commitments are woven into every aspect of production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .about-hero {
          position: relative;
          min-height: 80vh;
        }
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
          color: #f8f9fa;
        }
        .hero-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
        }
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #6c63ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .floating-images {
          position: relative;
          height: 100%;
        }
        .floating-images .img-1 {
          position: absolute;
          width: 60%;
          top: 0;
          left: 0;
          z-index: 1;
          transform: rotate(-5deg);
        }
        .floating-images .img-2 {
          position: absolute;
          width: 60%;
          bottom: 0;
          right: 0;
          transform: rotate(5deg);
        }
        .hover-zoom {
          transition: transform 0.3s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.03);
        }
        .bg-dark-gradient {
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
        }
        .icon-xl {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }
        .team-img-container {
          height: 300px;
          overflow: hidden;
        }
        .team-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .team-img-container:hover img {
          transform: scale(1.1);
        }
        .min-vh-60 {
          min-height: 60vh;
        }
      `}</style>
    </>
  );
};

export default AboutPage;