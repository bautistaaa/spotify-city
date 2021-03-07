import React, { useEffect, useState } from 'react';
import { useCitySettingContext } from '../../../../CitySettingsContext';
import MusicHallCrowd from './MusicHallCrowd';
import MusicHallLobby from './MusicHallLobby';
import request from '../../../../services/request';
import config from '../../../../config';

export enum MusicHallSceneType {
  'lobby',
  'crowd',
}
export interface TrackData {
  uri: string;
  id: string;
}
const MusicHallScene = () => {
  const { currentTrack, setCurrentTrack } = useCitySettingContext();
  const [scene, setScene] = useState(MusicHallSceneType.lobby);
  const [
    trackFeatures,
    setTrackFeatures,
  ] = useState<SpotifyApi.AudioFeaturesResponse>();

  useEffect(() => {
    if (currentTrack.id) {
      const fetchTrackFeatures = async () => {
        const trackFeatures: SpotifyApi.AudioFeaturesResponse = await request(
          `${config.apiUrl}/audio-features/${currentTrack.id}`
        );
        setTrackFeatures(trackFeatures);
      };

      fetchTrackFeatures();
    }

    return () => {
      setTrackFeatures(undefined);
    };
  }, [currentTrack.id]);

  useEffect(() => {
    if (scene === MusicHallSceneType.lobby) {
      setTrackFeatures(undefined);
    }
  }, [scene]);

  if (scene === MusicHallSceneType.lobby) {
    return (
      <MusicHallLobby setScene={setScene} setTrackData={setCurrentTrack} />
    );
  }

  if (scene === MusicHallSceneType.crowd) {
    return <MusicHallCrowd setScene={setScene} trackFeatures={trackFeatures} />;
  }

  return null;
};

export default MusicHallScene;
