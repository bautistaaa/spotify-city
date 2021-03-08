import { ChangeEvent, FC } from 'react';
import styled from 'styled-components/macro';
import Volume from './button/Volume';

const VolumeSlider: FC<{
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ volume, setVolume, isMuted, setIsMuted }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = +e.target.value;
    if (v === 0) {
      setVolume(0.00001);
      setIsMuted(true);
    } else {
      setVolume(+e.target.value);
      setIsMuted(false);
    }
  };
  const handleMuteButtonClick = () => {
    setIsMuted((val) => !val);
  };

  return (
    <Wrapper>
      <MuteButton onClick={handleMuteButtonClick}>
        <Volume isMuted={isMuted} />
      </MuteButton>
      <Input
        onChange={handleChange}
        type="range"
        min="0"
        max="1"
        value={isMuted ? 0 : volume}
        step="0.1"
        volume={isMuted ? 0 : volume}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const MuteButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
`;
const Input = styled.input<{ volume: number }>`
  background: ${({ volume }) => `
    linear-gradient(
      to right,
      red 0%,
      red ${volume * 100}%,
      #fff ${volume * 100}%,
      #fff 100%
    )
  `};
  border: solid 1px black;
  border-radius: 8px;
  height: 7px;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 16px;
    background: black;
    cursor: pointer;
  }
`;

export default VolumeSlider;
