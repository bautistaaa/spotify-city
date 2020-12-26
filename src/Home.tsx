import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';
import config from './config';
import useLocalStorage from './hooks/useLocalStorage';
import request from './services/request';
import DayMountains from './DayMountains';
import NightMountains from './NightMountains';
import NightBuildings from './NightBuildings';
import TwilightMountains from './TwilightMountains';
import TwilightBuildings from './TwilightBuildings';
import Playground from './Playground';
import './Home.scss';
import { ObjectType } from './enums';

export type AudioFeature = Omit<
  SpotifyApi.AudioFeaturesObject,
  | 'acousticness'
  | 'analysis_url'
  | 'duration_ms'
  | 'track_href'
  | 'type'
  | 'uri'
  | 'id'
  | 'time_signature'
  | 'mode'
  | 'speechiness'
  | 'time_signature'
> & { type: number };

const exclude = [
  'acousticness',
  'analysis_url',
  'duration_ms',
  'track_href',
  'type',
  'uri',
  'id',
  'mode',
  'speechiness',
  'time_signature',
];

const Home = () => {
  const [token] = useLocalStorage('token', '');
  const [audioFeatures, setAudioFeatures] = useState<AudioFeature>();

  useEffect(() => {
    if (token) {
      const fetch = async () => {
        const query = {
          time_range: 'short_term',
        };
        const topTracks: SpotifyApi.UsersTopTracksResponse = await request(
          `${config.apiUrl}/me/top/tracks?${qs.stringify(query)}`
        );
        const ids = topTracks.items.map((tt) => tt.id);
        const trackFeatures: SpotifyApi.MultipleAudioFeaturesResponse = await request(
          `${config.apiUrl}/audio-features?${qs.stringify(
            { ids },
            { arrayFormat: 'comma' }
          )}`
        );
        const averages = trackFeatures.audio_features.reduce<AudioFeature>(
          (acc, feature, _, { length }) => {
            const audioFeature = {} as AudioFeature;
            for (const [key, value] of Object.entries(feature)) {
              if (!exclude.includes(key)) {
                const accValue = acc[key as keyof AudioFeature] ?? 0;
                audioFeature[key as keyof AudioFeature] =
                  accValue + value / length;
              }
            }

            return audioFeature;
          },
          {} as AudioFeature
        );
        setAudioFeatures(averages);
      };

      fetch();
    }
  }, [token]);

  if (!token) {
    return <Redirect to="/login" />;
  }
  if (!audioFeatures) {
    return null;
  }

  return (
    <div>
      <pre>{JSON.stringify(audioFeatures, null, 2)}</pre>
      <Playground
        audioFeatures={{ ...audioFeatures, type: ObjectType.mountains }}
      />
      <TwilightBuildings />
      <NightBuildings />
      <NightMountains />
      <TwilightMountains />
      <DayMountains />
    </div>
  );
};

export default Home;
