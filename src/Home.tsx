import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';
import config from './config';
import useLocalStorage from './hooks/useLocalStorage';
import request from './services/request';
import Cityscape from './components/CityScape';
import Player from './components/Player';
import { AudioFeature, useAppContext } from './AppContext';
import { CitySettingsProvider } from './CitySettingsContext';

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
const getTopTrackIds = (topTracks: SpotifyApi.TrackObjectFull[]): string => {
  const spotifyIds = topTracks.slice(0, 4).map((tt) => tt.id);
  return spotifyIds.join(',');
};
const Home = () => {
  const {
    audioFeatures,
    setAudioFeatures,
    setFeaturedPlaylists,
    setNewReleases,
    setTopArtists,
    setTrackRecommendations,
    setTopTracks,
  } = useAppContext();
  const [token, setToken] = useLocalStorage('token', '');

  useEffect(() => {
    if (token) {
      const fetch = async () => {
        const query = {
          //time_range: 'short_term',
          time_range: 'medium_term',
          limit: 50,
        };
        try {
          const featuredPlaylistsRequest: Promise<SpotifyApi.ListOfFeaturedPlaylistsResponse> = request(
            `${config.apiUrl}/browse/featured-playlists`
          );
          const newReleasesRequest: Promise<SpotifyApi.ListOfNewReleasesResponse> = request(
            `${config.apiUrl}/browse/new-releases`
          );
          const topArtistsRequest: Promise<SpotifyApi.UsersTopArtistsResponse> = request(
            `${config.apiUrl}/me/top/artists?${qs.stringify(query)}`
          );
          const topTracksRequest: Promise<SpotifyApi.UsersTopTracksResponse> = request(
            `${config.apiUrl}/me/top/tracks?${qs.stringify(query)}`
          );

          const [
            featuredPlaylists,
            newReleases,
            topArtists,
            topTracks,
          ] = await Promise.all([
            featuredPlaylistsRequest,
            newReleasesRequest,
            topArtistsRequest,
            topTracksRequest,
          ]);
          const topTracksIds = getTopTrackIds(topTracks.items);
          const trackRecommendations: SpotifyApi.RecommendationsFromSeedsResponse = await request(
            `${config.apiUrl}/recommendations?seed_tracks=${encodeURIComponent(
              topTracksIds
            )}`
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
          setFeaturedPlaylists(featuredPlaylists);
          setNewReleases(newReleases);
          setTopTracks(topTracks);
          setTopArtists(topArtists);
          setTrackRecommendations(trackRecommendations);
        } catch (e) {
          setToken('');
        }
      };

      fetch();
    }
    // eslint-disable-next-line
  }, [token]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <CitySettingsProvider>
      <Wrapper>
        <Row>
          {audioFeatures && <Cityscape audioFeatures={audioFeatures} />}
        </Row>
      </Wrapper>
      <PlayerWrapper>
        <Player />
      </PlayerWrapper>
    </CitySettingsProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const PlayerWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default Home;
