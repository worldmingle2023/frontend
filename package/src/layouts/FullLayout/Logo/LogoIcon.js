import React from "react";
import logoicn from "../../../assets/images/logo-light-icon.png";
const LogoIcon = (props) => {
  const logoStyle = {
    width: '50px', // Set the width to the desired size
    height: 'auto' // Set the height to 'auto' to keep the aspect ratio
  };

  // Spread the existing props and add the logoStyle to the img element
  return <img alt="Logo" src={logoicn} {...props} style={{...props.style, ...logoStyle}} />;
};

export default LogoIcon;
