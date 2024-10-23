import React from 'react'
import { useProductContext } from '../../context/ProductContext';
import Layout from '../../components/Layout';

function UpdateProduct() {
  const { products, setProducts, updateProduct } = useProductContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
  };
  return (
    <>
      <Layout>
        <div className="container my-3 py-3">
          <h1 className="text-center">Update Product</h1>
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
                    id="tilte"
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
                  <label htmlFor="price">Product imageUrl</label>
                  <input
                    type="text"
                    onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                    value={products.imageUrl}
                    className="form-control"
                    id="image"
                    placeholder="Add image"
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
                  <label htmlFor="image">Product Description</label>
                  <textarea class="form-control" aria-label="With textarea"
                    id="description"
                    onChange={(e) => setProducts({ ...products, description: e.target.value })}
                    value={products.description}
                    placeholder="Enter description"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default UpdateProduct