import { FC } from 'react';

const Headphones: FC<{ fill: string }> = ({ fill }) => {
  return (
    <svg height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g fill={fill} data-name="Layer 2" id="Layer_2">
        <path d="M31,23H29V18A13,13,0,0,0,3,18v5H1V18a15,15,0,0,1,30,0Z" />
        <path d="M7.23,29H6a5,5,0,0,1-5-5V22a5,5,0,0,1,5-5H7.23A1.8,1.8,0,0,1,9,18.8V27.2A1.8,1.8,0,0,1,7.23,29ZM6,19a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H7V19Z" />
        <path d="M26,29H24.8A1.8,1.8,0,0,1,23,27.2V18.8A1.8,1.8,0,0,1,24.8,17H26a5,5,0,0,1,5,5v2A5,5,0,0,1,26,29Zm-1-2h1a3,3,0,0,0,3-3V22a3,3,0,0,0-3-3H25Z" />
        <path d="M6,18H7.23a.8.8,0,0,1,.8.8V27.2a.8.8,0,0,1-.8.8H6a4,4,0,0,1-4-4V22a4,4,0,0,1,4-4Z" />
        <path
          d="M28,18H29.2a.8.8,0,0,1,.8.8V27.2a.8.8,0,0,1-.8.8H28a4,4,0,0,1-4-4V22a4,4,0,0,1,4-4Z"
          transform="translate(54 46) rotate(-180)"
        />
      </g>
    </svg>
  );
};

export default Headphones;
