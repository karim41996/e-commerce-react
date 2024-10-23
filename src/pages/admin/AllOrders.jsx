import React from 'react'
import { useProductContext } from '../../context/ProductContext'

function AllOrders() {
    const { order } = useProductContext();
    return (
        <>
            {order?.map((item, index) => (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Payment Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Category</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Pincode</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>

                    {item?.state?.map((product, id) => (
                        <tbody>
                            <tr key={id}>
                                <th scope="row">{item.paymentId}</th>
                                <td><img className='img-fluid' style={{ width: "80px", height: "50px" }} src={product.image} alt='img' /></td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{product.qty}</td>
                                <td>{product.category}</td>
                                <td>{item.addressInfo.name}</td>
                                <td>{item.addressInfo.address}</td>
                                <td>{item.addressInfo.pincode}</td>
                                <td>{item.addressInfo.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            ))}
        </>
    )
}

export default AllOrders