import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { HotelSceneType } from '.';
import { useAppContext } from '../../../../AppContext';
import Arrow from '../../Arrow';

const HotelBreakRoom: FC<{
  sceneType: HotelSceneType;
  setSceneType: React.Dispatch<React.SetStateAction<HotelSceneType>>;
}> = ({ sceneType, setSceneType }) => {
  const { newReleases, featuredPlaylists } = useAppContext();
  const [
    currentSelectedAlbum,
    setCurrentSelectedAlbum,
  ] = useState<SpotifyApi.AlbumObjectSimplified | null>(null);
  const collection =
    sceneType === HotelSceneType.newReleases ? newReleases : featuredPlaylists;
  console.log(collection);

  /**
   * This is ugly and idgaf
   */
  const renderShelfItems = (
    collection:
      | SpotifyApi.ListOfNewReleasesResponse
      | SpotifyApi.ListOfFeaturedPlaylistsResponse
      | undefined,
    start: number,
    end: number
  ) => {
    if (isPlaylist(collection)) {
      return (
        <>
          {collection?.playlists?.items.slice(start, end).map((item) => {
            return (
              <a href={item.uri}>
                <img
                  src={item?.images?.[0]?.url}
                  alt=""
                  onMouseOut={() => {
                    setCurrentSelectedAlbum(null);
                  }}
                  onMouseOver={() => {
                    setCurrentSelectedAlbum(item);
                  }}
                />
              </a>
            );
          })}
        </>
      );
    }

    if (isNewRelease(collection)) {
      return (
        <>
          {collection?.albums?.items.slice(start, end).map((item) => {
            return (
              <a href={item.uri}>
                <img
                  src={item?.images?.[0]?.url}
                  alt=""
                  onMouseOut={() => {
                    setCurrentSelectedAlbum(null);
                  }}
                  onMouseOver={() => {
                    setCurrentSelectedAlbum(item);
                  }}
                />
              </a>
            );
          })}
        </>
      );
    }

    return null;
  };
  return (
    <Wrapper>
      {currentSelectedAlbum && (
        <Metadata>
          {currentSelectedAlbum.album_type && (
            <Type>{`(${currentSelectedAlbum.album_type})`}</Type>
          )}
          <Artist>{currentSelectedAlbum.artists?.[0]?.name}</Artist>
          <Title>{currentSelectedAlbum.name}</Title>
        </Metadata>
      )}
      <Row>
        <DoorWay>
          <VendingMachine>
            <VendingMachineInnerWrapper>
              <VendingMachineLeftWrapper>
                <Window>
                  <TopRow>
                    <ShelfItems>
                      {renderShelfItems(collection, 0, 4)}
                    </ShelfItems>
                    <TopShelf />
                  </TopRow>
                  <TopRow>
                    <ShelfItems>
                      {renderShelfItems(collection, 5, 9)}
                    </ShelfItems>
                    <TopShelf />
                  </TopRow>
                  <TopRow>
                    <ShelfItems>
                      {renderShelfItems(collection, 10, 14)}
                    </ShelfItems>
                    <TopShelf />
                  </TopRow>
                </Window>
                <ItemHolder />
              </VendingMachineLeftWrapper>
              <Panel></Panel>
            </VendingMachineInnerWrapper>
          </VendingMachine>
          <CouchOuterWrapper>
            <CouchInnerWrapper>
              <LeftArmRest />
              <CushionsWrapper>
                <CushionsTopRow>
                  <CushionsTopRowLeft>
                    <div></div>
                    <div></div>
                  </CushionsTopRowLeft>
                  <CushionsTopRowRight>
                    <div></div>
                    <div></div>
                  </CushionsTopRowRight>
                </CushionsTopRow>
              </CushionsWrapper>
              <RightArmRest />
            </CouchInnerWrapper>
            <CouchLegs></CouchLegs>
          </CouchOuterWrapper>
        </DoorWay>
      </Row>
      <Floor />
      <ArrowContainer
        onClick={() => {
          setSceneType(HotelSceneType.lobby);
        }}
      >
        <Arrow environmentColor="#1a0303" />
      </ArrowContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 460px;
  width: 100%;
  max-width: 900px;
  background: #d29da0;
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
const Floor = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  background: #1a0303;
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const DoorWay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 90%;
  width: 750px;
  background: #b9d9e8;
  border: 10px solid white;
  border-bottom: none;
`;
const CouchOuterWrapper = styled.div`
  position: relative;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CouchInnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 400px;
  height: 120px;
`;
const RightArmRest = styled.div`
  height: 60%;
  width: 55px;
  background: #bd464c;
  border-top-right-radius: 5px;
`;
const LeftArmRest = styled.div`
  height: 60%;
  width: 55px;
  background: #bd464c;
  border-top-left-radius: 5px;
`;
const VendingMachine = styled.div`
  position: relative;
  padding: 10px;
  height: 300px;
  width: 210px;
  background: #f8fbff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const VendingMachineInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const VendingMachineLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;
const Window = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-evenly;
  background: #aec5e0;
  height: 75%;
  width: 85%;
  border-radius: 7px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgb(255 255 255 / 33%);
    pointer-events: none;
  }
  &::before {
    clip-path: polygon(66% 0, 83% 0, 10% 100%, -7% 100%);
  }
  &::after {
    clip-path: polygon(90% 0, 96% 0, 23% 100%, 16% 100%);
  }
`;

const Panel = styled.div`
  position: absolute;
  right: 6px;
  height: 41px;
  width: 27px;
  background: #a5c6d6;
  top: 60px;
  border-radius: 4px;
  &::before {
    content: '';
    position: absolute;
    bottom: -15px;
    width: 27px;
    height: 10px;
    background: #a5c6d6;
    border-radius: 4px;
  }
`;
const BaseShelf = styled.div`
  height: 3px;
  width: 100%;
  background: #6b7d8e;
`;
const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ShelfItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    height: 28px;
    width: 28px;
    > img {
      height: 100%;
      width: 100%;
    }
  }
`;
const TopShelf = styled(BaseShelf)`
  height: 3px;
  width: 100%;
  background: #6b7d8e;
`;
const ItemHolder = styled.div`
  border-radius: 7px;
  background: #1a2833;
  height: 35px;
  width: 85%;
`;
const CushionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const CushionsTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const CushionsTopRowLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > div:nth-child(1) {
    position: relative;
    bottom: -5px;
    border-right: 2px solid #b0565a;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #cf6469;
    width: 100%;
    flex-grow: 1;
  }
  > div:nth-child(2) {
    width: 100%;
    height: 40px;
    background: #e47f83;
    border-right: 2px solid #b0565a;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 10;
  }
`;
const CushionsTopRowRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > div:nth-child(1) {
    position: relative;
    bottom: -5px;
    //border-left: 1px solid #5269ac;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #cf6469;
    width: 100%;
    flex-grow: 1;
  }
  > div:nth-child(2) {
    width: 100%;
    height: 40px;
    background: #e47f83;
    //border: 1px solid #5269ac;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 10;
  }
`;
const CouchLegs = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background: #7f3030;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    background: #7f3030;
    height: 20px;
    width: 18px;
  }
  &::before {
    left: 50px;
  }
  &::after {
    right: 50px;
  }
`;
const Metadata = styled.div`
  background: #ffffffcf;
  position: absolute;
  top: 110px;
  width: 410px;
  right: 110px;
  margin-top: 10px;
  padding: 20px;
  color: black;
  z-index: 210;
  border-radius: 3px;
`;
const Type = styled.div`
  font-weight: 500;
`;
const Artist = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
const Title = styled.div`
  font-weight: 300;
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  left: 0;
  transform: scale(-0.3);
`;

export default HotelBreakRoom;

function isNewRelease(
  collection: any
): collection is SpotifyApi.AlbumObjectSimplified {
  return collection.albums !== undefined;
}
function isPlaylist(
  collection: any
): collection is SpotifyApi.ListOfFeaturedPlaylistsResponse {
  return collection.playlists !== undefined;
}
