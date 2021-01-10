import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ClockContainer = styled.div`
  border-radius: 100%;
  display: block;
  height: 40px;
  width: 40px;
  background: #dddfdf;
  position: absolute;
  left: 15px;
  top: 10px;
`;
const HourHand = styled.div<{ rotate: number }>`
  background: black;
  height: 0;
  left: 45%;
  position: absolute;
  top: 55%;
  width: 0;
  transform-origin: 50% 100%;
  margin: -12px -1px 0;
  padding: 12px 1px 0;
  transform: rotate(${(props) => props.rotate}deg);
`;
const MinuteHand = styled.div<{ rotate: number }>`
  background: black;
  height: 0;
  left: 45%;
  position: absolute;
  top: 55%;
  width: 0;
  transform-origin: 50% 100%;
  margin: -15px -1px 0;
  padding: 15px 1px 0;
  transform: rotate(${(props) => props.rotate}deg);
`;

interface State {
  rotateMinute: number;
  rotateHour: number;
}
class Clock extends Component {
  state: State = {
    rotateMinute: 0,
    rotateHour: 0,
  };

  componentWillMount() {
    this.refreshClock();
  }

  refreshClock() {
    this.clock();
    //setTimeout(() => {
      //this.refreshClock();
    //}, 1000);
  }

  clock() {
    const t = moment();
    const rotateMinute = t.minutes() * 6;
    const rotateHour = ((t.hours() % 12) / 12) * 360 + rotateMinute / 12;

    if (
      this.state.rotateHour !== rotateHour ||
      this.state.rotateMinute !== rotateMinute
    ) {
      this.setState({ rotateMinute, rotateHour });
    }
  }

  render() {
    return (
      <ClockContainer>
        <HourHand rotate={this.state.rotateHour} />
        <MinuteHand rotate={this.state.rotateMinute} />
      </ClockContainer>
    );
  }
}

export default Clock;
