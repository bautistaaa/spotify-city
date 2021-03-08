import { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import request from '../../../../services/request';
import config from '../../../../config';
import Arrow from '../../Arrow';
import truncateStringByLimit from '../../../../utils/truncateStringByLimit';
import { useCitySettingContext } from '../../../../CitySettingsContext';
import { SceneType } from '../../../../enums';
import useLocalStorage from '../../../../hooks/useLocalStorage';

const RecentlyPlayedTrack: FC<{
  imageSrc: string;
  name: string;
  previewUrl: string | null;
  title: string;
  uri: string;
  id: string;
}> = ({ imageSrc, name, previewUrl: trackPreviewUrl, title, uri, id }) => {
  const { setCurrentTrack } = useCitySettingContext();

  return (
    <Track>
      <img width="32" height="32" src={imageSrc} alt="" />
      <TrackInfo>
        <Artist>{name}</Artist>
        <Title>{title}</Title>
      </TrackInfo>
      <SlidingShelf>
        <ButtonsContainer>
          <PreviewButton
            onClick={() => setCurrentTrack({ uri, id })}
            disabled={!trackPreviewUrl}
            title={
              !trackPreviewUrl
                ? 'No Preview Available'
                : 'Click to Preview Song'
            }
          >
            <img height="25" src="preview.svg" alt="Open In Spotify" />
          </PreviewButton>
          <SpotifyButton href={uri} title="Open In Spotify">
            <img height="25" src="spotify.svg" alt="Open In Spotify" />
          </SpotifyButton>
        </ButtonsContainer>
      </SlidingShelf>
    </Track>
  );
};
const DonutShopInterior: FC = () => {
  const { setCitySceneType } = useCitySettingContext();
  const [recentlyPlayed, setRecentlyPlayed] = useState<
    SpotifyApi.UsersRecentlyPlayedTracksResponse | undefined
  >();
  const [, setToken] = useLocalStorage('token', '');

  useEffect(() => {
    const fetchRecentlyPlayedTracks = async () => {
      try {
        const recentlyPlayedResponse: SpotifyApi.UsersRecentlyPlayedTracksResponse = await request(
          `${config.apiUrl}/me/player/recently-played`
        );
        setRecentlyPlayed(recentlyPlayedResponse);
      } catch (e) {
        window.location.reload();
        setToken('');
      }
    };

    fetchRecentlyPlayedTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Wall>
        <Sign>DONUT SHOP</Sign>
        <TopTracks>
          <TopTracksTitle>Recently Played</TopTracksTitle>
          {recentlyPlayed?.items?.map((rp, i) => {
            const {
              track: {
                name,
                album: { images },
                artists,
                preview_url,
                uri,
                id,
              },
            } = rp;
            return (
              <RecentlyPlayedTrack
                key={i}
                name={artists?.[0]?.name}
                title={truncateStringByLimit(name, 15)}
                imageSrc={images?.[2]?.url}
                previewUrl={preview_url}
                uri={uri}
                id={id}
              />
            );
          })}
        </TopTracks>
        <Menu>
          <LeftMenu>
            <BigText>COFFEE</BigText>
            <MenuItem>
              <Name>Americano</Name>
              <Price>3.99</Price>
            </MenuItem>
            <MenuItem>
              <Name>Black Coffee</Name>
              <Price>1.99</Price>
            </MenuItem>
            <MenuItem>
              <Name>Espresso</Name>
              <Price>2.99</Price>
            </MenuItem>
            <MenuItem>
              <Name>Latte</Name>
              <Price>2.50</Price>
            </MenuItem>
          </LeftMenu>
          <RightMenu>
            <BigText>DONUTS</BigText>
            <MenuItem>
              <Name>Vanilla</Name>
              <Price>4.99</Price>
            </MenuItem>
            <MenuItem>
              <Name>Chocolate</Name>
              <Price>4.99</Price>
            </MenuItem>
            <MenuItem>
              <Name>Birthday Cake</Name>
              <Price>5.99</Price>
            </MenuItem>
            <MenuItem>
              <Name>Boston Cream</Name>
              <Price>7.50</Price>
            </MenuItem>
          </RightMenu>
        </Menu>
      </Wall>
      <Shelf top={70}>
        <CoffeeRow>
          <CoffeeCup />
          <CoffeeCup />
          <CoffeeCup />
        </CoffeeRow>
      </Shelf>
      <Shelf top={120}>
        <CoffeeRow>
          <CoffeeCup />
          <CoffeeCup />
          <CoffeeCup />
        </CoffeeRow>
      </Shelf>
      <Shelf top={160}>
        <CoffeeRow bottom={-32}>
          <RotatedCoffeeCup />
          <RotatedCoffeeCup />
          <RotatedCoffeeCup />
        </CoffeeRow>
      </Shelf>
      <CounterRow>
        <GlassContainer>
          <GlassContainerShelf>
            <Plate>
              <Donut bottom={7} left={-3} icingColor="pink" />
              <Donut bottom={7} right={-3} icingColor="pink" />
              <Donut bottom={16} icingColor="pink" />
              <Donut bottom={16} right={-2} icingColor="pink" />
              <Donut bottom={25} right={8} icingColor="pink" />
            </Plate>
            <RedPlate>
              <Cake>
                <CakeLayer color="#eee32c" />
                <CakeLayer color="#e6a9a9" />
                <CakeLayer color="#eee32c" />
                <CakeLayer color="#e6a9a9" />
                <CakeLayer color="#eee32c" />
              </Cake>
            </RedPlate>
            <Plate marginLeft={30}>
              <Cake>
                <CakeLayer color="#8fbe9b" />
                <CakeLayer color="#e6a9a9" />
                <CakeLayer color="#8fbe9b" />
              </Cake>
            </Plate>
          </GlassContainerShelf>
          <GlassContainerShelf>
            <Plate>
              <Donut bottom={7} left={-3} icingColor="#ffb252" />
              <Donut bottom={7} right={-3} icingColor="#ffb252" />
              <Donut bottom={16} icingColor="#ffb252" />
              <Donut bottom={16} right={-2} icingColor="#ffb252" />
              <Donut bottom={25} right={8} icingColor="#ffb252" />
            </Plate>
            <Plate marginLeft={25}>
              <Donut bottom={7} left={-3} icingColor="#fb6c6c" />
              <Donut bottom={7} right={-3} icingColor="#fb6c6c" />
              <Donut bottom={16} icingColor="#fb6c6c" />
              <Donut bottom={16} right={-2} icingColor="#fb6c6c" />
              <Donut bottom={25} right={8} icingColor="#fb6c6c" />
            </Plate>
            <RedPlate>
              <Donut bottom={7} left={-3} icingColor="#e05ed0" />
              <Donut bottom={7} right={-3} icingColor="#fb6c6c" />
              <Donut bottom={16} icingColor="#f5e88f" />
              <Donut bottom={16} right={-2} icingColor="white" />
              <Donut bottom={25} right={8} icingColor="#8fe2f5" />
            </RedPlate>
          </GlassContainerShelf>
        </GlassContainer>
        <CounterRightSide>
          <Monitor />
          <ReceiptPrinter />
          <CounterTop />
          <CounterTopShadow />
          <BackCounter />
          <FrontCounter></FrontCounter>
        </CounterRightSide>
      </CounterRow>
      <ChairRow>
        <Chair>
          <Cushion />
          <CushionBase />
          <Leg />
          <ChairBase />
        </Chair>
        <Chair>
          <Cushion />
          <CushionBase />
          <Leg />
          <ChairBase />
        </Chair>
        <Chair>
          <Cushion />
          <CushionBase />
          <Leg />
          <ChairBase />
        </Chair>
      </ChairRow>
      <Floor />
      <ArrowContainer
        onClick={() => {
          setCitySceneType(SceneType.city);
        }}
      >
        <Arrow environmentColor="#67462d" />
      </ArrowContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 100%;
  max-width: 900px;
  background: white;
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
const BasePlate = styled.div`
  border-top: 10px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  width: 55px;
`;
const Plate = styled(BasePlate)<{ marginLeft?: number }>`
  position: relative;
  bottom: 7px;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : '10px')};
`;
const Donut = styled.div<{
  color?: string;
  left?: number;
  right?: number;
  bottom?: number;
  icingColor: string;
}>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '')};
  right: ${({ right }) => (right ? `${right}px` : '')};
  left: ${({ left }) => (left ? `${left}px` : '')};
  background: ${({ color }) => color ?? '#dcb134'};
  height: 10px;
  width: 25px;
  border-radius: 4px;
  border: 1px solid rgb(165 42 42 / 26%);
  overflow: hidden;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    background: ${({ icingColor }) => icingColor};
  }
`;
const Cake = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 4px;
  position: relative;
  top: -40px;
  z-index: -1;
  overflow: hidden;
`;
const CakeLayer = styled.div<{ color: string }>`
  flex: 1;
  width: 100%;
  background: ${({ color }) => color};
`;
const RedPlate = styled.div`
  border-top: 7px solid #c17474;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  width: 50px;
  margin-left: 20px;
  position: relative;
  bottom: 3px;
`;
const GlassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #b9d8de;
  height: 230px;
  width: 300px;
  z-index: 10;
  border: 10px solid #b98766;
  border-bottom: 35px solid #b98766;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgb(255 255 255 / 33%);
  }
  &::before {
    clip-path: polygon(47% 0, 68% 0, 30% 100%, 6% 100%);
  }
  &::after {
    clip-path: polygon(72% 0, 76% 0, 40% 100%, 35% 100%);
  }
`;
const GlassContainerShelf = styled.div`
  display: flex;
  position: relative;
  height: 7px;
  width: 100%;
  background: #97d0be;
`;
const Wall = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      163deg,
      transparent 0px,
      transparent 1px,
      #e9e5d9 1px,
      #e9e5d9 14px,
      transparent 14px
    ),
    linear-gradient(
      161deg,
      transparent 0px,
      #d3d3d3 1px,
      #e9e5d9 2px,
      #e9e5d9 15px,
      transparent 15px
    ),
    linear-gradient(
      343deg,
      transparent 0px,
      transparent 1px,
      #e9e5d9 1px,
      #e9e5d9 14px,
      transparent 14px
    ),
    linear-gradient(
      343deg,
      transparent 0px,
      transparent 1px,
      #e9e5d9 1px,
      #e9e5d9 14px,
      transparent 14px
    );
  background-color: #d3d3d3;
  background-position: 2px 1px, 23px 16px, 48px 15px, 21px 30px;
  background-size: 48px 30px;
`;
const Menu = styled.div`
  display: flex;
  position: absolute;
  top: 100px;
  left: 30%;
  background: #323234;
  border: 5px solid #d09f7f;
  width: 410px;
  height: 150px;
`;
const Shelf = styled.div<{ top: number }>`
  position: absolute;
  right: 30px;
  top: ${({ top }) => `${top}px`};
  background: #825f3f;
  height: 10px;
  width: 140px;
  border-radius: 2px;
`;
const CoffeeRow = styled.div<{ bottom?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '10px')};
  width: 100%;
  padding: 0 9px;
`;
const CoffeeCup = styled.div`
  position: relative;
  background: #394e57;
  height: 30px;
  width: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    background: #394e57;
    width: 6px;
    height: 4px;
    left: -6px;
    top: 6px;
  }
  &::after {
    width: 5px;
    height: 6px;
    left: -6px;
    top: 8px;
    border-left: 4px solid #394e57;
    border-top: 2px solid transparent;
    border-bottom: 4px solid #394e57;
    border-bottom-left-radius: 60%;
  }
`;
const RotatedCoffeeCup = styled(CoffeeCup)`
  transform: rotate(45deg);
`;
const BaseSubMenu = styled.div`
  flex: 1;
  padding: 10px;
`;
const RightMenu = styled(BaseSubMenu)``;
const LeftMenu = styled(BaseSubMenu)``;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #ccccce;
`;
const Name = styled.span``;
const Price = styled.span``;
const BigText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 25px;
  color: #ccccce;
`;
const Sign = styled.div`
  position: absolute;
  top: 30px;
  left: 37%;
  background: #825e3f;
  height: 56px;
  width: 280px;
  border: 7px solid #bc8868;
  text-transform: uppercase;
  color: #ecdfd6;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const TopTracks = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  background: #323234;
  border: 5px solid #d09f7f;
  width: 230px;
  height: 300px;
  padding: 10px;
  color: #ccccce;
  overflow-y: scroll;
`;
const TopTracksTitle = styled.p`
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 500;
`;
const CounterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 100px;
  width: 100%;
`;
const CounterTop = styled.div`
  background: #523824;
  height: 30px;
  width: 100%;
  z-index: 11;
  right: 0;
`;
const CounterTopShadow = styled.div`
  position: absolute;
  top: 26px;
  background: rgba(0, 0, 0, 0.2);
  height: 15px;
  width: 100%;
  z-index: 11;
`;
const CounterRightSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 230px;
  z-index: 10;
`;
const BackCounter = styled.div`
  background: #855e3f;
  height: 100%;
  width: 100%;
  z-index: 10;
`;
const Monitor = styled.div`
  width: 105px;
  height: 63px;
  position: absolute;
  right: 70px;
  top: -73px;
  border-radius: 10px;
  background: #575757;
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  &::before {
    bottom: -10px;
    background: #575757;
    width: 20px;
    height: 20px;
    left: 42px;
  }
  &::after {
    background: rgb(255 255 255 / 33%);
    clip-path: polygon(30% 0, 55% 0, 95% 100%, 72% 100%);
    width: 100%;
    height: 100%;
  }
`;
const ReceiptPrinter = styled.div`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 5px;
  right: 20px;
  top: -20px;
  background: #575757;
`;
const FrontCounter = styled.div`
  position: absolute;
  background: #b98766;
  width: 93%;
  height: 230px;
  z-index: 10;
  right: 20px;
  &::before {
    background: #371f16;
    content: '';
    position: absolute;
    bottom: -15px;
    left: 22%;
    width: 60%;
    height: 15px;
    z-index: 10;
  }
`;
const ChairRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 70px;
  width: 70%;
  right: 0;
  z-index: 10;
  padding: 0 50px;
`;
const Chair = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cushion = styled.div`
  height: 25px;
  width: 130px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #394c5a;
`;
const CushionBase = styled.div`
  position: relative;
  background: #2a253f;
  width: 130px;
  height: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  &::before {
    background: #2a253f;
    content: '';
    position: absolute;
    left: 44.3%;
    height: 15px;
    width: 18px;
    bottom: -15px;
  }
`;
const Leg = styled.div`
  background: #e7e5d9;
  height: 160px;
  width: 15px;
  position: relative;
  left: 45%;
  top: 15px;
  &::before {
    content: '';
    position: absolute;
    bottom: 50px;
    left: -23px;
    width: 60px;
    height: 7px;
    background: #e7e5d9;
  }
`;
const ChairBase = styled.div`
  background: #e7e5d9;
  width: 80px;
  height: 13px;
  position: relative;
  top: 10px;
  left: 27px;
  border-left: 40px solid #e7e5d9;
  border-right: 40px solid #e7e5d9;
  border-bottom: 7px solid transparent;
  border-top: 10px solid #e7e5d9;
  border-top-left-radius: 60%;
  border-top-right-radius: 60%;
`;
const Floor = styled.div`
  background: #67462d;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
`;
const SlidingShelf = styled.div`
  background: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 5px;
  transform: translateX(65px);
  transition: transform 0.6s;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
const Track = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #ccccce;
  margin-bottom: 5px;
  overflow: hidden;
  &:hover {
    ${SlidingShelf} {
      transform: translateX(0px);
    }
  }
`;
const TrackInfo = styled.div`
  margin-left: 20px;
  text-align: left;
`;
const Artist = styled.div`
  font-size: 13px;
  font-weight: 500;
`;
const Title = styled.div`
  font-size: 12px;
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  left: 0;
  transform: scale(-0.3);
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;
const PreviewButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  height: 25px;
  width: 25px;
`;
const SpotifyButton = styled.a`
  margin-left: 5px;
  height: 25px;
  width: 25px;
`;

export default DonutShopInterior;
