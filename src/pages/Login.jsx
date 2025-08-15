import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Left Side - Decorative Image */}
          <div className="col-lg-6 d-none d-lg-block">
            <div 
              className="vh-100 bg-cover" 
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
                backgroundPosition: "center"
              }}
            >
              <div className="d-flex flex-column h-100 justify-content-center p-5 text-white" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
                <h1 className="display-3 fw-bold mb-4">Welcome Back!</h1>
                <p className="lead">Discover amazing products and exclusive deals for our members.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="p-5 w-100">
              <div className="text-center mb-5">
                <h2 className="fw-bold text-gradient d-inline">Sign In</h2>
                <p className="text-muted">Access your SHOPIXA account</p>
              </div>

              <form className="needs-validation" noValidate>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-envelope text-muted"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control py-3"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-bold">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-lock text-muted"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control py-3"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text-end mt-2">
                    <Link to="/forgot-password" className="text-decoration-none small text-muted">Forgot password?</Link>
                  </div>
                </div>

                <div className="d-grid mb-4">
                  <button
                    className="btn btn-primary btn-lg py-3 fw-bold"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>

                <div className="text-center mb-4">
                  <div className="position-relative">
                    <hr className="text-muted" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">or</span>
                  </div>
                </div>

                <div className="d-grid gap-3">
                  <button className="btn btn-outline-dark py-3" type="button">
                    <i className="fab fa-google me-2"></i> Continue with Google
                  </button>
                  <button className="btn btn-outline-primary py-3" type="button">
                    <i className="fab fa-facebook-f me-2"></i> Continue with Facebook
                  </button>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted">New to SHOPIXA? <Link to="/register" className="text-primary fw-bold text-decoration-none">Create an account</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;