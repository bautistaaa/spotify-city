import React, { useEffect, useState } from 'react';
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
  const [scene, setScene] = useState(MusicHallSceneType.lobby);
  const [trackData, setTrackData] = useState<TrackData>({
    id: '',
    uri: '',
  });
  const [
    trackFeatures,
    setTrackFeatures,
  ] = useState<SpotifyApi.AudioFeaturesResponse>();

  useEffect(() => {
    if (trackData.id) {
      const fetchTrackFeatures = async () => {
        const trackFeatures: SpotifyApi.AudioFeaturesResponse = await request(
          `${config.apiUrl}/audio-features/${trackData.id}`
        );
        setTrackFeatures(trackFeatures);
      };

      fetchTrackFeatures();
    }

    return () => {
      setTrackFeatures(undefined);
    };
  }, [trackData.id]);

  useEffect(() => {
    if (scene === MusicHallSceneType.lobby) {
      setTrackFeatures(undefined);
    }
  }, [scene]);

  if (scene === MusicHallSceneType.lobby) {
    return <MusicHallLobby setScene={setScene} setTrackData={setTrackData} />;
  }

  if (scene === MusicHallSceneType.crowd) {
    return (
      <MusicHallCrowd
        setScene={setScene}
        trackData={trackData}
        trackFeatures={trackFeatures}
      />
    );
  }

  return null;
};

export default MusicHallScene;
