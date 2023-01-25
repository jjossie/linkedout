import React from 'react';
import bgImage from "../images/bg.jpeg";

import 'react-icons';

const BackgroundImage = () => {
  return (<div className="background-image">
      <img src={bgImage} alt="Background Banner"/>
    </div>);
};

export default BackgroundImage;