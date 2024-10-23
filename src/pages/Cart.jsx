import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { fireDB } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Modal from "./Modal";

const Cart = () => {

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
    toast.success("Product added successfully")
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
    toast.error("Product removed successfully")
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    console.log(subtotal + shipping)
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state));
    }, [state])

    const [name, setName] = useState("")
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const checkout = async () => {
      if (name == "" || address == "" || pincode == "" || phoneNumber == "") {
        return toast.error("All fields are required", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }

      const addressInfo = {
        name,
        address,
        pincode,
        phoneNumber,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }

      var options = {
        key: "",// Enter the Key ID generated from the Dashboard
        key_secret: "",
        amount: (subtotal + shipping) * 100,
        currency: "INR",
        order_receipt: 'order_rcptid_' + name,
        name: "React E-Commerce",
        description: "for testing purpose",
        handler: function (response) {
          console.log("Response: ", response)
          toast.success('Payment Successful')

          const paymentId = response.razorpay_payment_id;

          const orderInfo = {
            state,
            addressInfo,
            date: new Date().toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            ),
            email: JSON.parse(localStorage.getItem("user")).user.email,
            userid: JSON.parse(localStorage.getItem("user")).user.uid,
            paymentId
          }
          try {
            const orderRef = collection(fireDB, 'order');
            addDoc(orderRef, orderInfo)
            console.log("OrderInfo: ", orderInfo)

          } catch (error) {
            console.log(error);

          }
        },

        theme: {
          color: "#3399cc"
        }
      };

      var pay = new window.Razorpay(options);
      pay.open();
      console.log("Pay: ", pay)

    }

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  // className="w-100"
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Modal
                      name={name}
                      address={address}
                      pincode={pincode}
                      phoneNumber={phoneNumber}
                      setName={setName}
                      setAddress={setAddress}
                      setPincode={setPincode}
                      setPhoneNumber={setPhoneNumber}
                      checkout={checkout}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Layout>
        <div className="container my-3 py-3">
          <h1 className="text-center">Cart</h1>
          <hr />
          {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
      </Layout>
    </>
  );
};

export default Cart;
