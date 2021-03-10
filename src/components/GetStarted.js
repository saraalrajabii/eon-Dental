import { Link } from 'react-router-dom';
import React, { Component } from "react";
import  { useState, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Basic from './form';

// for styling this connect with index.css
  function GetStarted () {
    const { t } = useTranslation();
    const [state, setState] = useState({caseType:'' , malocclusionType:'',
  caseSeverity:''}); 
 


  
    function handleClick1(lang ) {
      i18next.changeLanguage(lang);
      document.body.style.direction="ltr";
      window.location="/"
    }
    function handleClick2(lang ) {
      i18next.changeLanguage(lang);
      document.body.style.direction="rtl";

    }
   // state changed so it will print the new value 
    console.log(state);
    return (
     
      <div  className="container">
      <div> </div>
      <div  className="header-container">
        <div className="navBar-header-container">
          <div className="navBar-header-container-element1"> <img src={logo} className="element1-logo"/></div>
          <div className="navBar-header-container-element2"><p className="element">x</p></div>
        </div>
        <h2 className="title-header">{t('Title.1')}</h2>
        <div className="question1-container">
          <div className="circle"><p className="circle-element">1</p></div>
          <div className="title-question"><p className="element2">{t('Question.1')}</p></div>
        </div>
        <div className="grid-session">
        <div className="grid-item" onClick={() => setState({ ...state , malocclusionType:"crowding" })}> <img src={crowded} className="teeth"/><p>{t('case1.1')}</p></div>
        <div className="grid-item" onClick={() => setState({ ...state , malocclusionType:"spacing"})}> <img src={spacing} className="teeth"/><p>{t('case2.1')}</p></div>
        <div className="grid-item" onClick={() => setState({ ...state , malocclusionType:"crossbite"})}> <img src={crossbite} className="teeth"/><p>{t('case3.1')}</p></div>
        <div className="grid-item" onClick={() => setState({ ...state , malocclusionType:"bite_issue",caseType :"plus",caseSeverity:"severe"})}> <img src={bite_issue} className="teeth"/><p>{t('case4.1')}</p></div>
        <div className="grid-item" onClick={() => setState({ ...state , malocclusionType:"another_Issue",caseType :"plus",caseSeverity:"severe"})}><p className="note">{t('case5.1')}</p></div>
        </div>
      {/* // here will appere when i click on some things /// when i want to put a condition i will put it in object */}
      {(state.malocclusionType === "crowding" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">{t('Question21.1')}</p></div>
        </div>
         <div className="grid-session2">
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"standard",caseSeverity:"mild" })}><img src={mild} className="teeth2"/><p>{t('case11.1')}</p></div>
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"standard",caseSeverity:"medium" })}><img src={moderate} className="teeth2"/><p>{t('case22.1')}</p></div>
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"plus",caseSeverity:"severe" })}><img src={severe} className="teeth2"/><p>{t('case33.1')}</p></div>
         </div></div>
        :null)}
         {(state.malocclusionType === "spacing" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">{t('Question23.1')}</p></div>
        </div>
         <div className="grid-session2">
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"standard",caseSeverity:"mild" })}><img src={MILD} className="teeth2"/><p>{t('case11.1')}</p></div>
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"standard",caseSeverity:"medium" })}><img src={MODERATE} className="teeth2"/><p>{t('case22.1')}</p></div>
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"plus",caseSeverity:"severe" })}><img src={SEVERE} className="teeth2"/><p>{t('case33.1')}</p></div>
         </div></div>
        :null)}
         {(state.malocclusionType === "crossbite" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">{t('Question22.1')}</p></div>
        </div> <div className="grid-session2">
        <div className="grid-item" onClick={() => setState({ ...state ,caseType :"standard",caseSeverity:"mild" })}><img src={Mild} className="teeth2"/><p>{t('case11.1')}</p></div>
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"standard",caseSeverity:"medium" })}><img src={Moderate} className="teeth2"/><p>{t('case22.1')}</p></div>
         <div className="grid-item" onClick={() => setState({ ...state ,caseType :"plus",caseSeverity:"severe" })}><img src={Severe} className="teeth2"/><p>{t('case33.1')}</p></div>
         </div>
         </div>
        :null)}
          {(state.malocclusionType === "bite_issue" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">Enter your contact details :</p>
          <Basic/>
          </div>
          
        </div>
        </div>
        :null)}
           {(state.malocclusionType === "another_Issue" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="feedBack"><textarea placeholder="In a few words, tell us about the issue"></textarea></div>
        </div>
        <div className="question2-container">
          <div className="circle"><p className="circle-element">3</p></div>
          <div className="title-question"><p className="element2">Enter your contact details :</p>
          <Basic/>
          </div>
          </div>
        </div>
        :null)}
      </div>
      <nav >
        <Link    to="/en"  className="english"  onClick={()=>handleClick1('en')}>English</Link>
        
        
          <Link  to="/ar"    className="arabic"   onClick={()=>handleClick2('ar')}  > Arabic</Link>
      
          </nav>
       <div></div>
       </div>
    );
}
export default GetStarted ;
