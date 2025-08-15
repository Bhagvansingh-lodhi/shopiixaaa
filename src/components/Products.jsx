import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success(`${product.title.substring(0, 20)}... added to cart!`);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        const womenClothing = await response.json();
        
        const menResponse = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        const menClothing = await menResponse.json();
        
        const allFashion = [...womenClothing, ...menClothing];
        setData(allFashion);
        setFilter(allFashion);
      } catch (error) {
        toast.error("Failed to load products");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category.includes(cat));
      setFilter(updatedList);
    }
  };

  const Loading = () => {
    return (
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100">
              <Skeleton height={300} />
              <div className="card-body">
                <Skeleton count={3} />
              </div>
              <div className="card-footer bg-white">
                <Skeleton height={40} width={100} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex flex-wrap justify-content-center gap-2 py-4">
          {["all", "women", "men"].map((category) => (
            <button
              key={category}
              className={`btn btn-sm ${selectedCategory === category ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => filterProduct(category)}
            >
              {category === "all" ? "All" : `${category.charAt(0).toUpperCase() + category.slice(1)}'s Fashion`}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filter.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="badge bg-dark text-white position-absolute top-0 end-0 m-2">
                  {product.category.includes("women") ? "Women" : "Men"}
                </div>
                <Link to={`/product/${product.id}`} className="text-decoration-none">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <Link to={`/product/${product.id}`} className="text-dark text-decoration-none">
                      {product.title.substring(0, 30)}
                    </Link>
                  </h5>
                  <p className="card-text text-muted small flex-grow-1">
                    {product.description.substring(0, 70)}...
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="mb-0 text-dark">${product.price}</h6>
                    <div>
                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => addProduct(product)}
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-sm btn-dark ms-2"
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Fashion Collection</h2>
        <p className="text-muted">Discover our latest trends</p>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;