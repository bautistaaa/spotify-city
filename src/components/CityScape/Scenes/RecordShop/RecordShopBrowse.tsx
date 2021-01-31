import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import TopTracksWall from './TopTracksWall';
import RecordBin from './RecordBin';
import CdCase from '../../CdCase';
import useKeyPress from '../../../../hooks/useKeyPress';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { RecordStoreSceneType } from '.';

const RecordShopBrowse: FC<{
  setScene: React.Dispatch<React.SetStateAction<RecordStoreSceneType>>;
}> = ({ setScene }) => {
  const ref = useRef<MutableRefObject<HTMLDivElement>>(null);
  const escapeKeyPress = useKeyPress('Escape');
  const [currentSelectedTrack, setCurrentSelectedTrack] = useState<
    SpotifyApi.TrackObjectFull | undefined
  >();
  useOnClickOutside(ref, () => setCurrentSelectedTrack(undefined));

  useEffect(() => {
    setCurrentSelectedTrack(undefined);
  }, [escapeKeyPress]);

  return (
    <Wrapper>
      <TopTracksWall
        setCurrentSelectedTrack={setCurrentSelectedTrack}
        setScene={setScene}
      />
      {currentSelectedTrack && (
        <>
          <CdCase ref={ref} track={currentSelectedTrack} />
          <Overlay />
        </>
      )}
      <RecordBin setCurrentSelectedTrack={setCurrentSelectedTrack} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 715px;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
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

export default RecordShopBrowse;
