import React from "react";
import { Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const { t } = useTranslation();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">{t("checkOut.emptyBasket")}</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i>{t("checkOut.continue")} {t("checkOut.continue")}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">{t("checkOut.orderSummary")}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    {t("checkOut.products")} ({totalItems})<span>{Math.round(subtotal)} ₮</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    {t("checkOut.shipping")}
                      <span>{shipping} ₮</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>{t("checkOut.totalAmount")}</strong>
                      </div>
                      <span>
                        <strong>{Math.round(subtotal + shipping)} ₮</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">{t("checkOut.billingAddress")}</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                        {t("checkOut.firstName")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validFirstName")}

                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                       {t("checkOut.lastName")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validLastName")}
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                        {t("checkOut.email")}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validEmail")}
                          
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                        {t("checkOut.address")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.enterShipping")}
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                        {t("checkOut.address2")}{" "}  
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                        {t("checkOut.country")}
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value=""> {t("checkOut.choose")}</option>
                          <option>Mongolia</option>
                        </select>
                        <div className="invalid-feedback">
                        {t("checkOut.validCountry")}
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                        {t("checkOut.state")}
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value=""> {t("checkOut.choose")}</option>
                          <option>Ulaanbaatar</option>
                        </select>
                        <div className="invalid-feedback">
                        {t("checkOut.validState")}
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                        {t("checkOut.zip")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validZip")}
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3"> {t("checkOut.payment")}</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                        {t("checkOut.nameOnCard")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                        {t("checkOut.fullNamePlaceHolder")}
                        </small>
                        <div className="invalid-feedback">
                        {t("checkOut.validCardName")}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                        {t("checkOut.creditCardNumber")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validCreditCardNumber")}
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                        {t("checkOut.expiration")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validExpiration")}
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                        {t("checkOut.cvv")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                        {t("checkOut.validCvv")}
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary "
                      type="submit" disabled
                    >
                      {t("checkOut.continueCheckout")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">{t("checkOut.checkOut")}</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;
