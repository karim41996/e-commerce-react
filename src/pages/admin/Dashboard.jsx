import React from 'react'
import AllProducts from './AllProducts';
import AllUsers from './AllUsers';
import AllOrders from './AllOrders';
import Layout from '../../components/Layout';

function Dashboard() {

  return (
    <>
      <Layout>
        <div className='mx-5 my-5'>
          <nav>
            <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-products-tab" data-bs-toggle="tab" data-bs-target="#nav-products" type="button" role="tab" aria-controls="nav-products" aria-selected="true">Products</button>
              <button className="nav-link" id="nav-orders-tab" data-bs-toggle="tab" data-bs-target="#nav-orders" type="button" role="tab" aria-controls="nav-orders" aria-selected="false">Orders</button>
              <button className="nav-link" id="nav-users-tab" data-bs-toggle="tab" data-bs-target="#nav-users" type="button" role="tab" aria-controls="nav-users" aria-selected="false">Users</button>
            </div>
          </nav>

          <div className="tab-content " id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab">
              <AllProducts />
            </div>

            <div className="tab-pane fade" id="nav-orders" role="tabpanel" aria-labelledby="nav-orders-tab">
              <AllOrders/>
            </div>

            <div className="tab-pane fade" id="nav-users" role="tabpanel" aria-labelledby="nav-users-tab">
              <AllUsers />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Dashboard