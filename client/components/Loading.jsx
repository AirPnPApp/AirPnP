import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCog } from '@fortawesome/free-solid-svg-icons'



const Loading = (props) => {

  return(
    <div>
      <h2>Loading parks closest to {props.locationString}</h2>
      <FontAwesomeIcon icon={faCog} spin size="4x"/>
    </div>
    
  )
}


export default Loading;