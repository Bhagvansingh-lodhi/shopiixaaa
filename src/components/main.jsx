import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="hero border-0">
      <div className="card bg-dark text-white border-0 rounded-0">
        <img
          className="card-img img-fluid"
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Abstract fashion background"
          style={{ 
            height: "80vh", 
            objectFit: "cover",
            filter: "brightness(0.7)"
          }}
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1 
              className="card-title display-3 fw-bold mb-4 text-uppercase" 
              style={{ 
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                letterSpacing: "2px",
                animation: "fadeIn 1.5s ease-in"
              }}
            >
              Elevate Your Wardrobe
            </h1>
            <p 
              className="card-text lead fs-3 mb-5" 
              style={{ 
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                animation: "fadeIn 2s ease-in"
              }}
            >
              Curated collections for the modern aesthetic
            </p>
            <button 
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-0"
              style={{
                borderWidth: "2px",
                transition: "all 0.3s ease",
                animation: "fadeInUp 1s ease-in"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
              onClick={() => navigate("/product")} // Add navigation to products page
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;