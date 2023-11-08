import React from "react";
import logotxt from "../../../assets/images/logotext.png";
const LogoText = (props) => {
  const logoStyle = {
    width: '160px', // Set the width to the desired size
    height: 'auto' // Set the height to 'auto' to keep the aspect ratio
  };

  
  return (
    
    <img alt="Logo" src={logotxt} {...props} style={{...props.style, ...logoStyle}} />
    )
  ;};

export default LogoText;
