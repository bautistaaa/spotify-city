import { css, keyframes } from 'styled-components/macro';

const hover = keyframes`
  0% {transform: translateY(0)}
  50% {transform: translateY(10px)}
  100% {transform: translateY(0)}
`;

const animation = css`
  animation-name: ${hover};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export default animation;
