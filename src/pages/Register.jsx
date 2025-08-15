import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from "../components";

const Register = () => {
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
                                backgroundImage: "url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="d-flex flex-column h-100 justify-content-center p-5 text-white" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
                                <h1 className="display-3 fw-bold mb-4">Join Us!</h1>
                                <p className="lead">Become part of our community and enjoy exclusive benefits.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="p-5 w-100">
                            <div className="text-center mb-5">
                                <h2 className="fw-bold text-gradient d-inline">Create Account</h2>
                                <p className="text-muted">Start your SHOPIXA journey</p>
                            </div>

                            <form className="needs-validation" noValidate>
                                <div className="mb-4">
                                    <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <i className="fas fa-user text-muted"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control py-3"
                                            id="fullName"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                </div>

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
                                            placeholder="Create a password"
                                            required
                                        />
                                    </div>
                                    <div className="form-text">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <i className="fas fa-lock text-muted"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control py-3"
                                            id="confirmPassword"
                                            placeholder="Confirm your password"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" id="termsCheck" required />
                                    <label className="form-check-label small" htmlFor="termsCheck">
                                        I agree to the <Link to="/terms" className="text-decoration-none">Terms of Service</Link> and <Link to="/privacy" className="text-decoration-none">Privacy Policy</Link>
                                    </label>
                                </div>

                                <div className="d-grid mb-4">
                                    <button
                                        className="btn btn-primary btn-lg py-3 fw-bold"
                                        type="submit"
                                    >
                                        Create Account
                                    </button>
                                </div>

                                <div className="text-center">
                                    <p className="text-muted">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Sign in</Link></p>
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

export default Register;