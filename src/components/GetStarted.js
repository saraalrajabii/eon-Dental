import React, { Component } from "react";
import  {useState} from 'react';
import logo from "./funnel3/logo.PNG";
import spacing from "./funnel3/funnel3/spacing.png";
import crowded from "./funnel3/funnel3/crowded.png";
import bite_issue from "./funnel3/funnel3/bite_issue.png";
import crossbite from "./funnel3/funnel3/crossbite.png";
// for styling this connect with index.css
  function GetStarted () {
    const [state, setState] = useState(""); 

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
        <div className="grid-item"><p className="note">I have another issue</p></div>
        </div>
       
      {/* // here will appere when i click on some things */}
        <div className="question2-container">
          <div className="circle"><p className="circle-element">2</p></div>
          <div className="title-question"><p className="element2">Choose the image that best describes your spaced teeth:</p></div>
        </div>
        <div className="grid-session2">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        </div>




      </div>
       <div></div>
       </div>
    );

}
export default GetStarted ;