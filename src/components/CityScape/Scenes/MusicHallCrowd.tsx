import React, { FC } from 'react';

import { MusicHallSceneType, TrackData } from './MusicHallScene';
import makeItPhony, { PhoneDistance } from '../../../utils/makeItPhony';
import makeItHeady from '../../../utils/makeItHeady';

import SpotifyPlayer from '../SpotifyPlayer';
import styled from 'styled-components/macro';
import { ColorInfo, KEY_HUES } from '../../../constants/colors';

const renderFarPhones = (colorInfo: ColorInfo) => {
  return makeItPhony(25, PhoneDistance.Far, colorInfo);
};
const renderClosePhones = (colorInfo: ColorInfo) => {
  return makeItPhony(20, PhoneDistance.Close, colorInfo);
};
const renderClosestPhones = (colorInfo: ColorInfo) => {
  return makeItPhony(15, PhoneDistance.Closest, colorInfo);
};

const renderFarHeads = (colorInfo: ColorInfo) => {
  return makeItHeady(10, PhoneDistance.Far, colorInfo);
};
const renderCloseHeads = (colorInfo: ColorInfo) => {
  return makeItHeady(10, PhoneDistance.Close, colorInfo);
};
const renderClosestHeads = (colorInfo: ColorInfo) => {
  return makeItHeady(8, PhoneDistance.Closest, colorInfo);
};

const MusicHallCrowd: FC<{
  setScene: React.Dispatch<React.SetStateAction<MusicHallSceneType>>;
  trackData: TrackData;
  trackFeatures: SpotifyApi.AudioFeaturesResponse | undefined;
}> = ({ setScene, trackData, trackFeatures }) => {
  if (trackFeatures) {
    const colorInfo = KEY_HUES[trackFeatures.key];
    console.log(' track features ', trackFeatures);
    return (
      <>
        <button onClick={() => setScene(MusicHallSceneType.lobby)}>
          Lobby
        </button>
        <Wrapper>
          {renderFarPhones(colorInfo)}
          {renderClosePhones(colorInfo)}
          {renderClosestPhones(colorInfo)}
          {renderFarHeads(colorInfo)}
          {renderCloseHeads(colorInfo)}
          {renderClosestHeads(colorInfo)}
          <SpotifyPlayer track={trackData.uri} />
        </Wrapper>
      </>
    );
  }

  return null;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 700px;
  width: 100%;
  max-width: 900px;
  background: #28242b;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  animation: fade 1.5s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default MusicHallCrowd;
