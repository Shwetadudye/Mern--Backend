import React from 'react';

export const Buttons = ({ name, style }) => {
  return (
    <button name={name} id={name} style={style}>
      {name}
    </button>
  );
};