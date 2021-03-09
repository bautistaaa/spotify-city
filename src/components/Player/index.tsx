import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import VolumeSlider from './VolumeSlider';
import Play from './button/Play';
import PlayerButton from './button/PlayerButton';

import Seek from './button/Seek';
import { TrackData, useCitySettingContext } from '../../CitySettingsContext';
import loadSpotifyScript from '../../utils/loadSpotifyScript';

const Player: FC = () => {
  const { currentTrack } = useCitySettingContext();
  const player = useRef<Spotify.SpotifyPlayer | null>(null);
  const [deviceId, setDeviceId] = useState<string | undefined>();
  const [attemptedTrack, setAttemptedTrack] = useState<TrackData | undefined>();
  const [scriptReady, setScriptReady] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playerState, setPlayerState] = useState<
    Spotify.PlaybackState | undefined
  >();
  const handlePlayButtonClicked = () => {
    // @ts-ignore
    setPlayerState((state) => {
      return {
        ...state,
        paused: !state?.paused,
      };
    });
  };

  useEffect(() => {
    if (player.current) {
      if (playerState?.paused) {
        player.current?.pause();
      } else {
        player.current?.resume();
      }
    }
  }, [playerState?.paused]);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      setScriptReady(true);
    };

    loadSpotifyScript();
  }, []);

  useEffect(() => {
    if ((scriptReady && !player.current) || attemptedTrack) {
      const token = window.localStorage.getItem('token');
      if (token) {
        player.current = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: (cb) => {
            cb(token);
          },
        });
      }

      player.current?.addListener('ready', ({ device_id }) => {
        setDeviceId(device_id);
      });

      player.current?.connect();
    }
    if (player.current) {
      player.current?.addListener('player_state_changed', (state) => {
        // state -- undefined
        setPlayerState(state);
      });
    }
  }, [scriptReady, attemptedTrack]);

  useEffect(() => {
    if ((currentTrack.uri || attemptedTrack?.uri) && deviceId) {
      const play = async () => {
        const token = window.localStorage.getItem('token');
        const trackToPlay = currentTrack ?? attemptedTrack;
        try {
          const resp = await fetch(
            `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
            {
              method: 'PUT',
              body: JSON.stringify({ uris: [trackToPlay.uri] }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!resp.ok) {
            throw new Error('shit!');
          }
          setAttemptedTrack(undefined);
        } catch (e) {
          setAttemptedTrack(currentTrack);
          setDeviceId(undefined);
        }
        const state = await player.current?.getCurrentState();
        if (state) {
          setPlayerState(state);
        }
      };

      play();
    }
  }, [currentTrack, deviceId, attemptedTrack]);

  useEffect(() => {
    if (player.current) {
      if (isMuted) {
        player.current.setVolume(0.000001);
      } else {
        player.current.setVolume(volume);
      }
    }
  }, [volume, isMuted]);

  return (
    <Wrapper>
      {playerState && (
        <>
          <LeftColumn>
            <Metadata>
              <AlbumArt
                src={
                  playerState?.track_window?.current_track?.album?.images?.[1]
                    ?.url
                }
              />
              <SongInfo>
                <Title>{playerState?.track_window?.current_track?.name}</Title>
                <Artist>
                  {playerState?.track_window?.current_track?.artists?.[0]?.name}
                </Artist>
              </SongInfo>
            </Metadata>
          </LeftColumn>
          <Controls>
            <TopRow>
              <ButtonsWrapper>
                <RewindButton
                  onClick={() =>
                    player?.current?.seek(playerState.position - 10 * 1000)
                  }
                >
                  <Seek />
                </RewindButton>
                <PlayerButton onClick={handlePlayButtonClicked}>
                  <Play
                    isPlaying={
                      playerState?.paused !== undefined && !playerState?.paused
                    }
                  />
                </PlayerButton>
                <ForwardButton
                  onClick={() =>
                    player?.current?.seek(playerState.position + 10 * 1000)
                  }
                >
                  <Seek forward />
                </ForwardButton>
              </ButtonsWrapper>
            </TopRow>
          </Controls>
          <RightColumn>
            <VolumeSlider
              volume={volume}
              setVolume={setVolume}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
            />
          </RightColumn>
        </>
      )}
    </Wrapper>
  );
};

const RewindButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`;
const ForwardButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`;
const Metadata = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;
const Artist = styled.div`
  font-weight: bold;
`;
const AlbumArt = styled.img`
  height: 100%;
  margin-right: 5px;
`;
const Title = styled.div``;
const SongInfo = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const LeftColumn = styled.div`
  width: 30%;
  height: 100%;
`;
const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
`;
const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
`;
const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 400px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  border: 1px solid black;
`;

export default Player;
