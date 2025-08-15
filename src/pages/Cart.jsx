import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const EmptyCart = () => {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <div className="mb-4" style={{ fontSize: "6rem", color: "#e9ecef" }}>
              <i className="bi bi-cart"></i>
            </div>
            <h2 className="display-5 mb-3">Your Fashion Cart is Empty</h2>
            <p className="lead text-muted mb-4">
              Looks like you haven't added any stylish items yet
            </p>
            <Link
              to="/products"
              className="btn btn-dark btn-lg px-5 py-3 rounded-pill"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Discover Trending Styles
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
    toast.success(`Added ${product.title.substring(0, 20)}...`);
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
    toast.error(`Removed ${product.title.substring(0, 20)}...`);
  };

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "FASHION20") {
      setDiscount(20);
      toast.success("20% discount applied!");
    } else if (coupon.toUpperCase() === "FASHION10") {
      setDiscount(10);
      toast.success("10% discount applied!");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = state.length > 0 ? 9.99 : 0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal + shipping - discountAmount;

    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-dark text-white p-4">
                <h3 className="mb-0">
                  <i className="bi bi-cart3 me-2"></i>
                  Your Shopping Bag ({totalItems})
                </h3>
              </div>
              <div className="card-body p-0">
                {state.map((item) => (
                  <div key={item.id} className="p-4 border-bottom">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded-3"
                          style={{ width: "100px", height: "100px", objectFit: "contain" }}
                        />
                      </div>
                      <div className="col-md-5">
                        <h5 className="mb-1">{item.title}</h5>
                        <p className="text-muted small mb-2">
                          {item.category.includes("women") ? "Women's" : "Men's"} Fashion
                        </p>
                        <div className="d-flex align-items-center">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`bi bi-star${i < Math.floor(item.rating?.rate || 0) ? '-fill' : ''} text-warning small`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => removeItem(item)}
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span className="mx-3">{item.qty}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => addItem(item)}
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-2 text-end">
                        <h5 className="mb-0">${(item.price * item.qty).toFixed(2)}</h5>
                        <small className="text-muted">${item.price} each</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ position: 'sticky', top: '100px' }}>
              <div className="card-header bg-light p-4">
                <h3 className="mb-0">
                  <i className="bi bi-receipt me-2"></i>
                  Order Summary
                </h3>
              </div>
              <div className="card-body p-4">
                <div className="mb-4">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button
                      className="btn btn-dark"
                      type="button"
                      onClick={applyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </li>
                  {discount > 0 && (
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 text-success">
                      <span>Discount ({discount}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </li>
                  )}
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total</strong>
                    </div>
                    <span>
                      <strong>${total.toFixed(2)}</strong>
                    </span>
                  </li>
                </ul>

                <div className="d-grid gap-3">
                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-lg py-3 rounded-pill"
                  >
                    <i className="bi bi-lock-fill me-2"></i>
                    Secure Checkout
                  </Link>
                  <Link
                    to="/products"
                    className="btn btn-outline-dark btn-lg py-3 rounded-pill"
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-4 text-center">
                  <p className="small text-muted mb-2">
                    <i className="bi bi-shield-check me-2"></i>
                    Secure Payment
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <i className="bi bi-credit-card fs-4"></i>
                    <i className="bi bi-paypal fs-4"></i>
                    <i className="bi bi-google-pay fs-4"></i>
                    <i className="bi bi-apple fs-4"></i>
                  </div>
                </div>
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
              <i className="bi bi-cart3 text-primary me-3"></i>
              Your Shopping Cart
            </h1>
            {state.length > 0 ? <ShowCart /> : <EmptyCart />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;