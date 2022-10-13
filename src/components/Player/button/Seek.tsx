import { FC } from 'react';

const Seek: FC<{ forward?: boolean; className?: string }> = ({
  forward,
  className,
}) => {
  if (forward) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        strokeWidth="1.5"
        stroke="black"
        fill="none"
        height="32"
        width="32"
        className={className}
      >
        <path
          d="M23.93 41.41V23a.09.09 0 00-.16-.07s-2.58 3.69-4.17 4.78"
          strokeLinecap="round"
        ></path>
        <rect x="29.19" y="22.52" width="11.41" height="18.89" rx="5.7"></rect>
        <path
          strokeLinecap="round"
          d="M54.43 15.41l-2.6 8.64-8.64-2.61M51.86 23.94a21.91 21.91 0 10.91 13.25"
        ></path>
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      strokeWidth="1.5"
      stroke="black"
      fill="none"
      height="32"
      width="32"
      className={className}
    >
      <path
        strokeLinecap="round"
        d="M9.57 15.41l2.6 8.64 8.64-2.61M26.93 41.41V23a.09.09 0 00-.16-.07s-2.58 3.69-4.17 4.78"
      ></path>
      <rect x="32.19" y="22.52" width="11.41" height="18.89" rx="5.7"></rect>
      <path
        d="M12.14 23.94a21.91 21.91 0 11-.91 13.25"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default Seek;
