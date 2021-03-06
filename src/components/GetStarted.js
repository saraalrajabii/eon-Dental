import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./GetStarted.css";
import { useState, useEffect } from "react";
import logo from "./funnel3/logo.PNG";
import spacing from "./funnel3/funnel3/spacing.png";
import crowded from "./funnel3/funnel3/crowded.png";
import bite_issue from "./funnel3/funnel3/bite_issue.png";
import crossbite from "./funnel3/funnel3/crossbite.png";
import mild from "./funnel3/funnel3/crowding/mild.jpg";
import moderate from "./funnel3/funnel3/crowding/moderate.jpg";
import severe from "./funnel3/funnel3/crowding/severe.jpg";
import Mild from "./funnel3/funnel3/crossbite/mild.jpg";
import Moderate from "./funnel3/funnel3/crossbite/moderate.jpg";
import Severe from "./funnel3/funnel3/crossbite/severe.jpg";
import MILD from "./funnel3/funnel3/spacing/mild.jpg";
import MODERATE from "./funnel3/funnel3/spacing/moderate.jpg";
import SEVERE from "./funnel3/funnel3/spacing/severe.jpg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import InnerForm from "./form";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// for styling this connect with index.css
function GetStarted({ match }) {
  let query = useQuery();
  const { t } = useTranslation();
  const [state, setState] = useState({
    caseType: "",
    malocclusionType: "",
    caseSeverity: "",
  });
  //console.log(window )
  console.log(window.location);
  console.log(match);

  useEffect(() => {
    if (match.params.lang === "en") {
      i18next.changeLanguage(match.params.lang);
      document.body.style.direction = "ltr";
    }
    if (match.params.lang === "ar") {
      i18next.changeLanguage(match.params.lang);
      document.body.style.direction = "rtl";
    }
  }, []);

  // state changed so it will print the new value
  console.log(state);
  return (
    <div className="container">
      <div> </div>
      <div className="header-container">
        <div className="navBar-header-container">
          <div className="navBar-header-container-element1">
            {" "}
            <img src={logo} className="element1-logo" />
          </div>
          <div className="navBar-header-container-element2">
            <p className="element">x</p>
          </div>
        </div>
        <h2 className="title-header">{t("Title.1")}</h2>
        <div className="question1-container">
          <div className="circle">
            <p className="circle-element">1</p>
          </div>
          <div className="title-question">
            <p className="element2">{t("Question.1")}</p>
          </div>
        </div>
        <div className="grid-session">
          <a href="#section2">
            {" "}
            <div
              className="grid-item"
              onClick={() => {
                setState({ ...state, malocclusionType: "crowding" });
              }}
            >
              {" "}
              <img src={crowded} className="teeth" /> <p>{t("case1.1")}</p>
            </div>{" "}
          </a>
          <a href="#section2">
            {" "}
            <div
              className="grid-item"
              onClick={() =>
                setState({ ...state, malocclusionType: "spacing" })
              }
            >
              {" "}
              <img src={spacing} className="teeth" />
              <p>{t("case2.1")}</p>
            </div>{" "}
          </a>
          <a href="#section2">
            {" "}
            <div
              className="grid-item"
              onClick={() =>
                setState({ ...state, malocclusionType: "crossbite" })
              }
            >
              {" "}
              <img src={crossbite} className="teeth" />
              <p>{t("case3.1")}</p>
            </div>{" "}
          </a>
          <a href="#section2">
            <div
              className="grid-item"
              onClick={() =>
                setState({
                  ...state,
                  malocclusionType: "bite_issue",
                  caseType: "plus",
                  caseSeverity: "severe",
                })
              }
            >
              {" "}
              <img src={bite_issue} className="teeth" />
              <p>{t("case4.1")}</p>
            </div>{" "}
          </a>
          <div
            className="grid-item"
            onClick={() =>
              setState({
                ...state,
                malocclusionType: "another_Issue",
                caseType: "plus",
                caseSeverity: "severe",
              })
            }
          >
            {" "}
            <a href="#section2">
              <p className="note">{t("case5.1")}</p>
            </a>
          </div>
        </div>

        {/* // here will appere when i click on some things /// when i want to put a condition i will put it in object */}
        <div id="section2">
          {state.malocclusionType === "crowding" ? (
            <div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">2</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question21.1")}</p>
                </div>
              </div>
              <div className="grid-session2">
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "standard",
                      caseSeverity: "mild",
                    })
                  }
                >
                  <img src={mild} className="teeth2" />
                  <p>{t("case11.1")}</p>
                </div>
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "standard",
                      caseSeverity: "medium",
                    })
                  }
                >
                  <img src={moderate} className="teeth2" />
                  <p>{t("case22.1")}</p>
                </div>
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "plus",
                      caseSeverity: "severe",
                    })
                  }
                >
                  <img src={severe} className="teeth2" />
                  <p>{t("case33.1")}</p>
                </div>
              </div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">3</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question2.1")}</p>
                  <InnerForm lang={match.params.lang} state={state} />
                </div>
              </div>
            </div>
          ) : null}
          {state.malocclusionType === "spacing" ? (
            <div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">2</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question23.1")}</p>
                </div>
              </div>
              <div className="grid-session2">
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "standard",
                      caseSeverity: "mild",
                    })
                  }
                >
                  <img src={MILD} className="teeth2" />
                  <p>{t("case11.1")}</p>
                </div>
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "standard",
                      caseSeverity: "medium",
                    })
                  }
                >
                  <img src={MODERATE} className="teeth2" />
                  <p>{t("case22.1")}</p>
                </div>
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "plus",
                      caseSeverity: "severe",
                    })
                  }
                >
                  <img src={SEVERE} className="teeth2" />
                  <p>{t("case33.1")}</p>
                </div>
              </div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">3</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question2.1")}</p>
                  <InnerForm lang={match.params.lang} state={state} />
                </div>
              </div>
            </div>
          ) : null}
          {state.malocclusionType === "crossbite" ? (
            <div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">2</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question22.1")}</p>
                </div>
              </div>{" "}
              <div className="grid-session2">
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "standard",
                      caseSeverity: "mild",
                    })
                  }
                >
                  <img src={Mild} className="teeth2" />
                  <p>{t("case11.1")}</p>
                </div>
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "standard",
                      caseSeverity: "medium",
                    })
                  }
                >
                  <img src={Moderate} className="teeth2" />
                  <p>{t("case22.1")}</p>
                </div>
                <div
                  className="grid-item"
                  onClick={() =>
                    setState({
                      ...state,
                      caseType: "plus",
                      caseSeverity: "severe",
                    })
                  }
                >
                  <img src={Severe} className="teeth2" />
                  <p>{t("case33.1")}</p>
                </div>
              </div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">3</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question2.1")}</p>
                  <InnerForm lang={match.params.lang} state={state} />
                </div>
              </div>
            </div>
          ) : null}
          {state.malocclusionType === "bite_issue" ? (
            <div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">2</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question2.1")} </p>
                  <InnerForm lang={match.params.lang} state={state} />
                </div>
              </div>
            </div>
          ) : null}
          {state.malocclusionType === "another_Issue" ? (
            <div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">2</p>
                </div>
                <div className="feedBack">
                  <textarea placeholder={t("textarea.1")}></textarea>
                </div>
              </div>
              <div className="question2-container">
                <div className="circle">
                  <p className="circle-element">3</p>
                </div>
                <div className="title-question">
                  <p className="element2">{t("Question2.1")}</p>
                  <InnerForm lang={match.params.lang} state={state} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default GetStarted;

