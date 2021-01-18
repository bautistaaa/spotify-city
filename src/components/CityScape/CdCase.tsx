import { ForwardRefRenderFunction, MutableRefObject, forwardRef } from 'react';
import styled from 'styled-components/macro';

const CdCase: ForwardRefRenderFunction<
  MutableRefObject<HTMLDivElement>,
  { track: SpotifyApi.TrackObjectFull }
> = ({ track }, ref) => {
  const imageSrc = track.album.images?.[0]?.url;
  return (
    <Container ref={ref}>
      <Wrapper href={track.uri}>
        <Cover>
          <AlbumImage src={imageSrc} />
          <TopHolder />
          <BottomHolder />
        </Cover>
      </Wrapper>
      <Metadata>
        <Artist>{track.artists?.[0]?.name}</Artist>
        <Title>{track.name}</Title>
      </Metadata>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.a`
  position: relative;
  display: block;
  width: 400px;
  height: 300px;
  padding-left: 40px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 201;
  &::before {
    position: absolute;
    content: '';
    top: -1px;
    left: 0;
    width: 40px;
    height: calc(100% + 2px);
    background: repeating-linear-gradient(
      to right,
      #666,
      #666 1px,
      #444 1px,
      #444 3px
    );
    border-radius: 3px 0 0 3px;
    z-index: 9;
  }
`;
const Cover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.1),
    inset -2px -2px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const Holder = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  height: 15px;
  z-index: 10;
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 25px;
    height: 25px;
    background-color: rgba(245, 245, 245, 0.9);
    z-index: 9;
    border-radius: 50%;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
  &::before {
    left: 20%;
  }
  &::after {
    right: 20%;
  }
`;
const TopHolder = styled(Holder)`
  transform: translateY(-80%);
  top: 0;
`;
const BottomHolder = styled(Holder)`
  transform: translateY(20%);
  bottom: 0;
`;
const AlbumImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Metadata = styled.div`
  background: #ffffffcf;
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  color: black;
  z-index: 210;
  border-radius: 3px;
`;
const Artist = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
const Title = styled.div`
  font-weight: 300;

`;

export default forwardRef(CdCase);
