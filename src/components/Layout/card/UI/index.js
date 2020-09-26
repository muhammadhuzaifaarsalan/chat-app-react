import React from 'react';
import './style.css'

/**
* @author
* @function card
**/

const card = (props) => {
  return(
    <div className="card">
        {props.children}
    </div>
   )

 }

export default card