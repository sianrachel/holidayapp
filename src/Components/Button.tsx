import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};
