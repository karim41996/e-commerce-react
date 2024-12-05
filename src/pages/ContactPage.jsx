import React from "react";
import { Navbar } from "../components";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">{t("contact.contactUs")}</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">{t("contact.name")}</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">{t("contact.email")}</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">{t("contact.message")}</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </>
  );
};

export default ContactPage;
