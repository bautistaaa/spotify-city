import { FC } from 'react';
import styled from 'styled-components/macro';

const DonutShopScene: FC = () => {
  return (
    <Wrapper>
      <Wall>
        <Sign>DONUT SHOP</Sign>
        <TopTracks>
          <TopTracksTitle>Shop Playlist</TopTracksTitle>
          <TopTrackItem>
            <Artist>Death Cab For Cutie</Artist>
            <Track>Summer Skin</Track>
          </TopTrackItem>
          <TopTrackItem>
            <Artist>Death Cab For Cutie</Artist>
            <Track>Summer Skin</Track>
          </TopTrackItem>
          <TopTrackItem>
            <Artist>Death Cab For Cutie</Artist>
            <Track>Summer Skin</Track>
          </TopTrackItem>
          <TopTrackItem>
            <Artist>Death Cab For Cutie</Artist>
            <Track>Summer Skin</Track>
          </TopTrackItem>
          <TopTrackItem>
            <Artist>Death Cab For Cutie</Artist>
            <Track>Summer Skin</Track>
          </TopTrackItem>
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
      <Shelf>
        <CoffeeRow>
          <CoffeeCup />
          <CoffeeCup />
          <CoffeeCup />
        </CoffeeRow>
      </Shelf>
      <ShelfTwo>
        <CoffeeRow>
          <CoffeeCup />
          <CoffeeCup />
          <CoffeeCup />
        </CoffeeRow>
      </ShelfTwo>
      <CounterRow>
        <GlassContainer>
          <GlassContainerShelf>
            <Plate>
              <DonutOne />
              <DonutTwo />
              <DonutThree />
              <DonutFour />
              <DonutFive />
            </Plate>
          </GlassContainerShelf>
          <GlassContainerShelf />
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
const Plate = styled.div`
  position: relative;
  bottom: 7px;
  left: 10px;
  border-top: 10px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  width: 55px;
`;
const Donut = styled.div`
  position: absolute;
  bottom: 7px;
  height: 10px;
  width: 25px;
  border-radius: 4px;
  background: #dcb134;
  border: 1px solid rgb(165 42 42 / 26%);
  overflow: hidden;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    background: pink;
  }
`;
const DonutOne = styled(Donut)`
  left: -3px;
`;
const DonutTwo = styled(Donut)`
  right: -3px;
`;
const DonutThree = styled(Donut)`
  bottom: 16px;
`;
const DonutFour = styled(Donut)`
  bottom: 16px;
  right: -2px;
`;
const DonutFive = styled(Donut)`
  bottom: 25px;
  right: 8px;
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
`;
const GlassContainerShelf = styled.div`
  position: relative;
  height: 7px;
  width: 100%;
  background: #97d0be;
`;
const Wall = styled.div`
  position: relative;
  //background: #e9e5d9;
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
const Shelf = styled.div`
  position: absolute;
  right: 30px;
  top: 70px;
  background: #825f3f;
  height: 10px;
  width: 140px;
  border-radius: 2px;
`;
const ShelfTwo = styled(Shelf)`
  top: 130px;
`;
const CoffeeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
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
  left: 20px;
  background: #323234;
  border: 5px solid #d09f7f;
  width: 200px;
  height: 300px;
  padding: 10px;
  color: #ccccce;
  overflow-y: scroll;
`;
const TopTracksTitle = styled.p`
  margin: 0 0 10px;
  font-size: 19px;
`;
const TopTrackItem = styled.div`
  margin-bottom: 5px;
`;
const Artist = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
const Track = styled.p`
  font-size: 14px;
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
  top: 27px;
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
`;
const ChairBase = styled.div`
  background: #e7e5d9;
  width: 80px;
  height: 13px;
  position: relative;
  top: 10px;
  left: 24px;
}

`;
const Floor = styled.div`
  background: #67462d;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
`;
export default DonutShopScene;
