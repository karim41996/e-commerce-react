import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Access translation and language change
  const state = useSelector((state) => state.handleCart);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Change language dynamically
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          {t("navbar.name")}
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                {t("navbar.products")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                {t("navbar.contact")}
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> {t("navbar.login")}
            </NavLink>
            {/* <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> {t("navbar.register")}
            </NavLink> */}
            <NavLink to="/basket" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> {t("navbar.cart")} (
              {state.length})
            </NavLink>
            <div className="btn">
              <select
                className="form-select nav-item-style"
                onChange={handleLanguageChange}
                defaultValue={i18n.language}
                style={{
                  width: "100px",
                  borderWidth: "1px",
                  borderColor: "#000",
                }}
              >
                <option value="mn">MN</option>
                <option value="en">EN</option>
                <option value="kr">KR</option>
                {/* Add more languages as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
