import React from 'react'
import { useProductContext } from '../../context/ProductContext';

function AllUsers() {
    const { user } = useProductContext();

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">UID</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}.</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.uid}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AllUsers