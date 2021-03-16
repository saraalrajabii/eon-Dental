import queryString from "query-string";
import logo from "./funnel3/logo.PNG";
import "./WrongEmail/WrongEmail.css";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";

const valedationsSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function WrongEmail({ match, location }) {
  const lang = match.params.lang;
  console.log(lang);
  let queryParams = queryString.parse(location.search);

  console.log(queryParams); // this is the email which is exist in url

  const [exists, setExists] = useState(false);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://assessment.12staging.com/capture/funnel3/validateEmail",
        queryParams
      )
      .then((response) => {
        setExists(true);
        console.log(response.config.data, exists);
        // setEmail(response.config.data.email)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="container-Email">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={valedationsSchema}
        onSubmit={(values) => {
          console.log(values);
          console.log(exists);
        }}
      >
        {({ values, handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="navBar-header-container-Email">
              <div className="navBar-header-container-element1-Email">
                {" "}
                <img src={logo} className="element1-logo-Email" />
              </div>
              <div className="navBar-header-container-element2-Email">
                {" "}
                <a href="/:lang">
                  {" "}
                  <p className="element-Email">x</p>{" "}
                </a>
              </div>{" "}
            </div>

            <div className="email-data">
              <div className="email-data-element1">
                <h2 className="">
                  Enter your email to request an <br />
                  appointment
                </h2>

                <Field
                  className="input-email "
                  placeholder="Email"
                  name="email"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}

                <div>
                  {" "}
                  <button className="Button-email" type="submit">
                    confairm{" "}
                  </button>
                </div>
              </div>
              <div className="email-data-element2">
                <img
                  src="http://d2hfemkvihnw98.cloudfront.net/covers/is-it-for-me-heading.png"
                  className="email-image"
                />
              </div>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default WrongEmail;

