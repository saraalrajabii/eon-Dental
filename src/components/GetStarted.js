import React, { Component } from "react";
import  {useState} from 'react';
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

// for styling this connect with index.css
  function GetStarted () {
    const [state, setState] = useState([]); 

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
        <h2 className="title-header">Let's see if you qualify for clear aligners!</h2>
        <div className="question1-container">
          <div className="circle"><p className="circle-element">1</p></div>
          <div className="title-question"><p className="element2">What’s your biggest concern with your smile?</p></div>
        </div>
        <div className="grid-session">
        <div className="grid-item" onClick={() => setState("crowded")}> <img src={crowded} className="teeth"/><p>crowded</p></div>
        <div className="grid-item" onClick={() => setState("spacing")}> <img src={spacing} className="teeth"/><p>spacing</p></div>
        <div className="grid-item" onClick={() => setState("crossbite")}> <img src={crossbite} className="teeth"/><p>crossbite</p></div>
        <div className="grid-item" onClick={() => setState("bite_issue")}> <img src={bite_issue} className="teeth"/><p>bite_issue</p></div>
        <div className="grid-item" onClick={() => setState("another_Issue")}><p className="note">I have another issue</p></div>
        </div>
       
      {/* // here will appere when i click on some things /// when i want to put a condition i will put it in object */}

      {(state === "crowded" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">Choose the image that best describes your crowded teeth:</p></div>
        </div>
         <div className="grid-session2">
         <div className="grid-item" onClick={() => setState(state=>[state,"mild","standard"])}><img src={mild} className="teeth2"/><p>mild</p></div>
         <div className="grid-item" onClick={() => setState(state=>[state,"medium","standard"])}><img src={moderate} className="teeth2"/><p>moderate</p></div>
         <div className="grid-item" onClick={() => setState(state=>[state,"severe","plus"])}><img src={severe} className="teeth2"/><p>severe</p></div>
         </div></div>
        :null)}
         {(state === "crossbite" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">Choose the image that best describes your spacing teeth:</p></div>
        </div>
         <div className="grid-session2">
         <div className="grid-item"  onClick={() => setState(state=>[state,"mild","standard"])}><img src={Mild} className="teeth2"/><p>mild</p></div>
         <div className="grid-item"  onClick={() => setState(state=>[state,"medium","standard"])}><img src={Moderate} className="teeth2"/><p>moderate</p></div>
         <div className="grid-item"  onClick={() => setState(state=>[state,"severe","plus"])}><img src={Severe} className="teeth2"/><p>severe</p></div>
         </div></div>
        :null)}
       
         {(state === "spacing" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">Choose the image that best describes your crossbite teeth:</p></div>
        </div> <div className="grid-session2">
         <div className="grid-item" onClick={() => setState(state=>[state,"mild","standard"])}><img src={MILD} className="teeth2"/><p>mild</p></div>
         <div className="grid-item"  onClick={() => setState(state=>[state,"medium","standard"])}><img src={MODERATE} className="teeth2"/><p>moderate</p></div>
         <div className="grid-item"  onClick={() => setState(state=>[state,"severe","plus"])}><img src={SEVERE} className="teeth2"/><p>severe</p></div>
         </div>
         </div>
        :null)}
          {(state === "bite_issue" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">Enter your contact details :</p></div>
        </div>
        </div>
        :null)}
           {(state === "another_Issue" ?<div><div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="feedBack"><textarea placeholder="In a few words, tell us about the issue"></textarea></div>
        </div>
        </div>
        :null)}

      </div>
       <div></div>
    
       </div>
    );

}
export default GetStarted ;