import React from 'react';

const MenuItem = (Component, args) => ({ ...props }) => (
  <div className={ args }>
    <Component { ...props } />
  </div>
);

export default MenuItem;
