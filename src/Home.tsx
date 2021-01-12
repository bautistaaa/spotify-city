import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';
import config from './config';
import useLocalStorage from './hooks/useLocalStorage';
import request from './services/request';
import Cityscape from './components/CityScape';

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
    <Wrapper>
      <Row>
        <Cityscape />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default Home;
