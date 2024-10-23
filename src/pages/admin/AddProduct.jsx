import React from 'react';
import { useProductContext } from '../../context/ProductContext';
import Layout from '../../components/Layout';

function AddProduct() {
  const { products, setProducts, addProduct } = useProductContext();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addProduct();
  };

  return (
    <Layout>
      <div className="container my-3 py-3">
        <h1 className="text-center">Add Product</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="title">Product Title</label>
                <input
                  type="text"
                  onChange={(e) => setProducts({ ...products, title: e.target.value })}
                  value={products.title}
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  onChange={(e) => setProducts({ ...products, price: e.target.value })}
                  value={products.price}
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="imageUrl">Product Image URL</label>
                <input
                  type="text"
                  onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                  value={products.imageUrl}
                  className="form-control"
                  id="imageUrl"
                  placeholder="Add image URL"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="category">Product Category</label>
                <input
                  type="text"
                  onChange={(e) => setProducts({ ...products, category: e.target.value })}
                  value={products.category}
                  className="form-control"
                  id="category"
                  placeholder="Enter category"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="description">Product Description</label>
                <textarea 
                  className="form-control" 
                  id="description"
                  onChange={(e) => setProducts({ ...products, description: e.target.value })}
                  value={products.description}
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;