import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';

const OurProduct = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cleanedCategory = category.replace(/}/g, '').trim();

        const encodedCategory = encodeURIComponent(cleanedCategory);
        console.log("Encoded Category:", encodedCategory);

        const url = `https://fakestoreapi.com/products/category/${encodedCategory}`;
        console.log("Fetching URL:", url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Products:", data);

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Product added successfully");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Layout>
        <div className="container my-3 py-3">
          <div className='row'>
            <div className="col-12">
              <h2 className="display-5 text-center">Products in Category: {category}</h2>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card text-center h-100">
                  <Link to={"/product/" + product.id}>
                    <img
                      className="card-img-top p-3"
                      src={product.image}
                      alt={product.title}
                      height={300}
                    /></Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text">
                      {product.description.substring(0, 90)}...
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">$ {product.price}</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                      Buy Now
                    </Link>
                    <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OurProduct;