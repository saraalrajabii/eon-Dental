import React from 'react';
import queryString from "query-string";

function Email ({match, location }) {
 
 console.log( match)
 const lang = match.params.lang 

 let queryParams = queryString.parse(location.search);
 console.log( queryParams )



  return (
<div>
   {lang ===  "ar" ? "مرحبا ":"Hello" } 
</div>
  )};

export default Email;
