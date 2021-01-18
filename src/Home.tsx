import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';
import config from './config';
import useLocalStorage from './hooks/useLocalStorage';
import request from './services/request';
import Cityscape from './components/CityScape';
import { RecommendationsFromSeedsResponse, useAppContext } from './AppContext';

//const exclude = [
//'acousticness',
//'analysis_url',
//'duration_ms',
//'track_href',
//'type',
//'uri',
//'id',
//'mode',
//'speechiness',
//'time_signature',
//];
const getArtistSpotifyIds = (
  topArtists: SpotifyApi.ArtistObjectFull[]
): string => {
  const spotifyIds = topArtists.slice(0, 4).map((ta) => ta.id);
  return spotifyIds.join(',');
};
const Home = () => {
  const {
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
          const topArtistsRequest: Promise<SpotifyApi.UsersTopArtistsResponse> = request(
            `${config.apiUrl}/me/top/artists?${qs.stringify(query)}`
          );
          const topTracksRequest: Promise<SpotifyApi.UsersTopTracksResponse> = request(
            `${config.apiUrl}/me/top/tracks?${qs.stringify(query)}`
          );
          const [topArtists, topTracks] = await Promise.all([
            topArtistsRequest,
            topTracksRequest,
          ]);
          const artistIds = getArtistSpotifyIds(topArtists.items);
          const trackRecommendations: RecommendationsFromSeedsResponse = await request(
            `${config.apiUrl}/recommendations?seed_artists=${encodeURIComponent(
              artistIds
            )}`
          );

          setTopTracks(topTracks);
          setTopArtists(topArtists);
          setTrackRecommendations(trackRecommendations);
        } catch (e) {
          setToken('');
        }
      };

      fetch();
    }
  }, [token]);

  if (!token) {
    return <Redirect to="/login" />;
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
