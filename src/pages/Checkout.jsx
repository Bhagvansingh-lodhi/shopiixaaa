import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "credit",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const EmptyCart = () => {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <div className="mb-4" style={{ fontSize: "6rem", color: "#e9ecef" }}>
              <i className="bi bi-cart-x"></i>
            </div>
            <h2 className="display-5 mb-3">Your Cart is Empty</h2>
            <p className="lead text-muted mb-4">
              Looks like you haven't added any items yet
            </p>
            <Link
              to="/products"
              className="btn btn-dark btn-lg px-5 py-3 rounded-pill"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const calculateTotals = () => {
    let subtotal = 0;
    const shipping = 9.99;
    state.forEach(item => {
      subtotal += item.price * item.qty;
    });
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const ShowCheckout = () => {
    const { subtotal, shipping, tax, total } = calculateTotals();
    const totalItems = state.reduce((sum, item) => sum + item.qty, 0);

    return (
      <div className="container py-5">
        <div className="row g-5">
          {/* Checkout Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
              <div className="card-header bg-dark text-white p-4">
                <h3 className="mb-0">
                  <i className="bi bi-geo-alt me-2"></i>
                  Shipping Information
                </h3>
              </div>
              <div className="card-body p-4">
                <form className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="1234 Main St"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select
                        className="form-select"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose...</option>
                        <option>United States</option>
                        <option>India</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <select
                        className="form-select"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose...</option>
                        <option>California</option>
                        <option>Punjab</option>
                        <option>London</option>
                      </select>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">
                        ZIP
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">
                    <i className="bi bi-credit-card me-2"></i>
                    Payment
                  </h4>

                  <div className="row gy-3">
                    <div className="col-md-12 mb-3">
                      <div className="btn-group w-100" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="paymentMethod"
                          id="credit"
                          value="credit"
                          checked={formData.paymentMethod === "credit"}
                          onChange={handleChange}
                        />
                        <label className="btn btn-outline-dark" htmlFor="credit">
                          Credit Card
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="paymentMethod"
                          id="paypal"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleChange}
                        />
                        <label className="btn btn-outline-dark" htmlFor="paypal">
                          PayPal
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="paymentMethod"
                          id="cod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleChange}
                        />
                        <label className="btn btn-outline-dark" htmlFor="cod">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === "credit" && (
                      <>
                        <div className="col-md-6">
                          <label htmlFor="cardName" className="form-label">
                            Name on card
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                          />
                          <small className="text-muted">
                            Full name as displayed on card
                          </small>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="cardNumber" className="form-label">
                            Credit card number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="cardExpiry" className="form-label">
                            Expiration
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                          />
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="cardCvv" className="form-label">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardCvv"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </>
                    )}

                    {formData.paymentMethod === "paypal" && (
                      <div className="col-12">
                        <div className="alert alert-info">
                          You will be redirected to PayPal to complete your payment
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === "cod" && (
                      <div className="col-12">
                        <div className="alert alert-warning">
                          Pay with cash when your order is delivered
                        </div>
                      </div>
                    )}
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-dark btn-lg py-3 rounded-pill"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.success("Order placed successfully!");
                    }}
                  >
                    <i className="bi bi-lock-fill me-2"></i>
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden" style={{ position: 'sticky', top: '100px' }}>
              <div className="card-header bg-light p-4">
                <h3 className="mb-0">
                  <i className="bi bi-receipt me-2"></i>
                  Order Summary
                </h3>
              </div>
              <div className="card-body p-4">
                <div className="mb-4">
                  <h5 className="mb-3">Your Items ({totalItems})</h5>
                  {state.map(item => (
                    <div key={item.id} className="d-flex justify-content-between mb-2">
                      <div>
                        <span className="fw-bold">{item.title.substring(0, 20)}</span>
                        <span className="text-muted"> x {item.qty}</span>
                      </div>
                      <div>${(item.price * item.qty).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total</strong>
                    </div>
                    <span>
                      <strong>${total.toFixed(2)}</strong>
                    </span>
                  </li>
                </ul>

                <Link
                  to="/products"
                  className="btn btn-outline-dark btn-lg w-100 py-3 rounded-pill mb-3"
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <main className="bg-light min-vh-100" style={{ paddingTop: '80px' }}>
        <div className="py-5">
          <div className="container">
            <h1 className="display-6 fw-bold text-center mb-5">
              <i className="bi bi-cart-check text-primary me-3"></i>
              Secure Checkout
            </h1>
            {state.length > 0 ? <ShowCheckout /> : <EmptyCart />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;