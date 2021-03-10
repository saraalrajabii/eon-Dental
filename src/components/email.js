import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Email = (props )=> {
 
console.log(props.match.params.id)
  return (
<div>
    Hello {props.match.params.id}
</div>
  )};

export default Email;
