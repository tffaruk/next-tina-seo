import React from 'react';
import generateMetaTags from './utils/generateMetaTags';

function MetaGenerator(props) {
  const { title, description, image } = props;
  const metaTags = generateMetaTags(title, description, image);
  
  return <>{metaTags}</>;
}

export default MetaGenerator;