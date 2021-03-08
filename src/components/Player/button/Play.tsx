import { FC } from 'react';

const Play: FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  if (isPlaying) {
    return (
      <svg role="img" height="16" width="16" viewBox="0 0 16 16">
        <path fill="none" d="M0 0h16v16H0z"></path>
        <path d="M3 2h3v12H3zM10 2h3v12h-3z"></path>
      </svg>
    );
  }
  return (
    <svg role="img" height="16" width="16" viewBox="0 0 16 16">
      <path d="M4.018 14L14.41 8 4.018 2z"></path>
    </svg>
  );
};

export default Play;
