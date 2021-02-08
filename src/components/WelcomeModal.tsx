import { FC } from 'react';
import styled from 'styled-components/macro';
import { useAppContext } from '../AppContext';
import { getRandomBlurbByTimeOfDay } from '../constants/musicBlurbs';
import BaseNavigationButton from '../components/NavigationButton';
import { TimeOfDay } from '../enums';

interface InfoByValence {
  color: string;
  timeOfDayText: string;
  musicBlurb: string;
}
const getInfoByValence = (valence = 0): InfoByValence => {
  const convertedValence = Math.round(valence * 10);
  if (convertedValence < 4) {
    return {
      color: '#646f9e',
      timeOfDayText: 'Night',
      musicBlurb: getRandomBlurbByTimeOfDay(TimeOfDay.Night),
    };
  }
  if (convertedValence < 8) {
    return {
      color: '#ad3c50',
      timeOfDayText: 'Twilight',
      musicBlurb: getRandomBlurbByTimeOfDay(TimeOfDay.Twilight),
    };
  }
  return {
    color: 'lightblue',
    timeOfDayText: 'Day',
    musicBlurb: getRandomBlurbByTimeOfDay(TimeOfDay.Day),
  };
};

const WelcomeModal: FC<{
  setIsWelcomeModalOpen: any;
}> = ({ setIsWelcomeModalOpen }) => {
  const { audioFeatures } = useAppContext();
  const { color, timeOfDayText, musicBlurb } = getInfoByValence(
    audioFeatures?.valence
  );

  return (
    <>
      <Wrapper>
        <p>
          Your current scene is <Bold>{timeOfDayText}</Bold>.
        </p>
        <p>
          It seems you have been listening to{' '}
          <MoodText color={color}>{musicBlurb}</MoodText> music. Your top songs
          have been averaging a{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Valence_(psychology)"
            target="_blank"
          >
            valence
          </Link>{' '}
          score of <Bold>{audioFeatures?.valence.toFixed(2)}</Bold>
        </p>
        <p>Explore your data by clicking the buildings!</p>
        <p>
          <Bold>Caution</Bold>: You'll be able to preview music throughout the
          city. <Bold>Make sure your volume is not too loud!</Bold> You've been
          warned...
        </p>
        <NavigationButton
          onClick={() => setIsWelcomeModalOpen(false)}
          text="Got it!"
        />
      </Wrapper>
      <Overlay />
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 35%;
  width: 400px;
  background: #ffffff;
  padding: 20px;
  z-index: 201;
  font-weight: 400;
  p {
    margin-bottom: 20px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
  transition: opacity 0.3s;
  z-index: 200;
`;
const MoodText = styled.span<{ color: string }>`
  font-weight: 600;
  color: ${({ color }) => color};
`;
const Link = styled.a`
  color: black;
`;
const Bold = styled.span`
  font-weight: 600;
`;
const NavigationButton = styled(BaseNavigationButton)`
  margin: 0 auto;
`;

export default WelcomeModal;
