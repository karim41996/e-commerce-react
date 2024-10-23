import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext';

function AllProducts() {
    const { product, loading, deleteProduct, edithandle } = useProductContext();

    return (
        <>
            <div>
                <Link to={'/addproduct'}>
                    <button className="my-2 mx-auto btn btn-dark" type="submit">
                        Add Product
                    </button>
                </Link>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}.</th>
                            <td><img className='img-fluid' style={{ width: "80px", height: "50px" }} src={item.imageUrl} alt='img' /></td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.date}</td>
                            <td>
                                <div className='row gy-3 gx-3'>
                                    <div className='col-sm-5 d-flex justify-content-center align-items-center'>
                                        <Link to={'/updateproduct'} onClick={() => edithandle(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" strokeWidth={1.5} stroke="#000000">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className='col-sm-5 d-flex justify-content-center align-items-center' onClick={() => deleteProduct(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" strokeWidth={1.5} stroke="#000000">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AllProducts