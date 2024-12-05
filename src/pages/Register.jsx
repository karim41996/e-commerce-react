import React from "react";
import { Navbar } from "../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">{t("register.register")}</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">{t("register.fullName")}</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">{t("register.emailAddress")}</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">{t("register.password")}</label>
                <input
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  {t("register.hasAccount")}{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    {t("register.login")}
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  {t("register.register")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
