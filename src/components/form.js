import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Card, CardContent, makeStyles } from "@material-ui/core";
import Select from "react-select";
import * as Yup from "yup";
import { TextField } from "./TextField";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useLocation } from "react-router-dom";
import sa from "./countryImages/sa.png";
import jo from "./countryImages/jo.png";
import kw from "./countryImages/kw.png";
import qa from "./countryImages/qa.png";
import ae from "./countryImages/uae.png";
import axios from "axios";
const styles = {
  root: {
    background: "rgba(92,98,102,.09)!important",
    width: "100%",
    fontSize: "1em",
    borderRadius: ".5em!important",
    border: "none!important",
    padding: "7px",
    textAlign: "start",
    height: "100%",
  },
  button: {
    justifySelf: "start",
    backgroundColor: "#3dcdba",
    textAlign: "center",
    border: "none",
    borderRadius: ".5em",
    color: "#fff",
    fontSize: " 1em",
    padding: ".5em",
    width: "100%",
    margin: "25px 0!important",
    cursor: "pointer",
  },
  select: {
    marginTop: "23px",
  },
};
const useStyles = makeStyles(styles);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function InnerForm(props) {
  console.log(props); // props = lang = en
  console.log(props.state.caseType);
  console.log(props.state.malocclusionType);
  console.log(props.state.caseSeverity);
  let query = useQuery();
  const { t } = useTranslation();
  const classes = useStyles();
  const [input, setInput] = useState("");

  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState({});
  const [selectedOption3, setSelectedOption3] = useState({});

  useEffect(() => {
    if (props.lang === "en") {
      i18next.changeLanguage(props.lang);
      document.body.style.direction = "ltr";
    }
    if (props.lang === "ar") {
      i18next.changeLanguage(props.lang);
      document.body.style.direction = "rtl";
    }
  }, []);

  const queryString = require("query-string");
  let url = window.location.search
    ? `${window.location.search}&email=${input}`
    : `?email=${input}`;

  const includes = require("lodash/includes");
  const standardizedCountryCode = (incoming) => {
    if (
      includes(
        ["uae", "ae", "united arabic emirates", "arab emirtaes"],
        incoming.toLowerCase()
      )
    ) {
      return "ae";
    }

    if (includes(["sa", "saudi", "saudi arabia"], incoming.toLowerCase())) {
      return "sa";
    }

    if (includes(["jo", "jordan"], incoming.toLowerCase())) {
      return "jo";
    }

    if (includes(["lb", "lebanon"], incoming.toLowerCase())) {
      return "lb";
    }

    if (includes(["iq", "iraq"], incoming.toLowerCase())) {
      return "iq";
    }

    if (includes(["qa", "qatar"], incoming.toLowerCase())) {
      return "qa";
    }

    if (includes(["kw", "kuwait"], incoming.toLowerCase())) {
      return "kw";
    }

    return "n/a";
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required(`${t("val_Firstname.1")}`),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required(`${t("val_lastname.1")}`),
    country: Yup.string().required(`${t("val_Country.1")}`),
    city_of_residence: Yup.string().required(`${t("val_City.1")}`),
    email: Yup.string()
      .email("Email is invalid")
      .required(`${t("val_Email.1")}`),
    countryCode: Yup.string().required(`${t("val_code.1")}`),
    Phone: Yup.string()
      .max(10, "Must be 10 characters")
      .min(10, "Must be 10 characters")
      .required(`${t("val_phone.1")}`),
  });

  const options1 = [
    { value: "jo", label: `${t("jordan.1")}` },
    { value: "sa", label: `${t("Saudi Arabia.1")}` },
    { value: "kw", label: `${t("Kuwait.1")}` },
    { value: "qa", label: `${t("Qatar.1")}` },
    { value: "other", label: `${t("other.1")}` },
  ];
  const options2 = [
    { value: "amman", label: `${t("Amman.1")}`, link: "jo" },
    { value: "doha", label: `${t("Doha.1")}`, link: "qa" },
    { value: "kuwait", label: `${t("Kuwait.1")}`, link: "kw" },
    { value: "riyadh", label: `${t("Riyadh.1")}`, link: "sa" },
    { value: "jeddah", label: `${t("Jeddah.1")}`, link: "sa" },
    { value: "khobar", label: `${t("Khobar.1")}`, link: "sa" },
    { value: "dhahran", label: `${t("Dhahran.1")}`, link: "sa" },
    { value: "dammam", label: `${t("Dammam.1")}`, link: "sa" },
  ];
  const options3 = [
    {
      value: "+962",
      label: (
        <div>
          <img src={jo} height="20px" width="30px" /> +962{" "}
        </div>
      ),
      code: "jo",
    },
    {
      value: "+966",
      label: (
        <div>
          <img src={sa} height="20px" width="30px" /> +966{" "}
        </div>
      ),
      code: "sa",
    },
    {
      value: "+971",
      label: (
        <div>
          <img src={ae} height="20px" width="30px" /> +971{" "}
        </div>
      ),
      code: "ae",
    },
    {
      value: "+965",
      label: (
        <div>
          <img src={kw} height="20px" width="30px" /> +965{" "}
        </div>
      ),
      code: "kw",
    },
    {
      value: "+974",
      label: (
        <div>
          <img src={qa} height="20px" width="30px" /> +974
        </div>
      ),
      code: "qa",
    },
  ];

  const filteredOptions = options2.filter((o) =>
    o.link.includes(selectedOption.value)
  );
  const filteredOptions3 = options3.filter(
    (o) => o.code === selectedOption.value
  );
  let sara = selectedOption3.value ? selectedOption3 : filteredOptions3;

  const handleChange1 = (selectedOption, setFieldValue, filteredOptions) => {
    setFieldValue("country", selectedOption.label);

    console.log(filteredOptions);
    setSelectedOption(selectedOption);
  };

  const handleChange2 = (selectedOption, setFieldValue) => {
    setFieldValue("city_of_residence", selectedOption.label);
    setSelectedOption2({ selectedOption2: selectedOption });
  };
  const handleChange3 = (selectedOption, setFieldValue) => {
    setFieldValue("countryCode", selectedOption.value);
    setSelectedOption3(selectedOption);
  };

  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            country: "",
            city_of_residence: "",
            email: "",
            countryCode: "",
            Phone: "",
          }}
          validationSchema={validate}
          onSubmit={(values, e) => {
            console.log("filteredOptions", filteredOptions[0].value);

            console.log("countryCode", selectedOption2);

            let info = {
              firstName: values.firstName,
              email: values.email,
              lastName: values.lastName,
              preferredLanguage: props.lang,
              Country: values.country,
              City: values.city_of_residence,
              phoneNumber: values.Phone,
              caseType: props.state.caseType,
              malocclusionType: props.state.malocclusionType,
              caseSeverity: props.state.caseSeverity,
            };

            console.log("info", info);
         
            axios
              .post(
                "https://assessment.12staging.com/capture/funnel3/userinfo",
                info
              )
              .then((response) => {
                console.log(response.config.data);
                if (response.status === 200) {
                  window.location.href = `/${props.lang}/appointment-request${url}`;
                }
              })
              .catch((error) => {
                console.log(error.response);
                window.location.href = `/${props.lang}/appointment-request${url}`;
              });
          }}
        >
          {({ values, errors, handleSubmit, isValid, setFieldValue }) => (
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <TextField
                    name="firstName"
                    type="text "
                    placeholder={t("form_Firstname.1")}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    name="lastName"
                    type="text"
                    placeholder={t("form_lastname.1")}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Select
                    className={classes.root}
                    name="country"
                    isSearchable
                    placeholder={t("form_Country.1")}
                    value={selectedOption}
                    onChange={(e) =>
                      handleChange1(e, setFieldValue, filteredOptions)
                    }
                    options={options1}
                  />
                  <ErrorMessage
                    component="div"
                    name={"country"}
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Select
                    className={classes.root}
                    name="city_of_residence"
                    isSearchable
                    placeholder={t("form_City.1")}
                    value={selectedOption2.value}
                    onChange={(e) => handleChange2(e, setFieldValue)}
                    options={filteredOptions}
                  />
                  <ErrorMessage
                    component="div"
                    name={"city_of_residence"}
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    name="email"
                    type="email"
                    placeholder={t("form_Email.1")}
                    value={input}
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                      setInput(e.target.value);
                    }}
                  />
                </Grid>
                {console.log(input)}
                <Grid item lg={2} xs={5}>
                  <Select
                    name="countryCode"
                    placeholder="+1"
                    value={sara}
                    className={classes.select}
                    onChange={(e) => handleChange3(e, setFieldValue)}
                    options={options3}
                  />
                  <ErrorMessage
                    component="div"
                    name={"countryCode"}
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item lg={4} xs={7}>
                  <TextField name="Phone" placeholder="111 111" />
                </Grid>
            
                <Grid item lg={6} xs={12}>
                  <button type="submit"  className={classes.button}>submit</button>
                  <p> {t("form_note.1")} </p>
                </Grid>
              </Grid>

              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
export default InnerForm;














