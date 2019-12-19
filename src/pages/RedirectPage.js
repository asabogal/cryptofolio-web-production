import React from 'react';

const PageNotFound = (props) => {

  const redirect = () => {
    props.history.push('/')
  }

  return (
    <div>
      {redirect()}
    </div>
  );
};

export default PageNotFound;