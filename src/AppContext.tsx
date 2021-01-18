import React, { FC, useContext, useState } from 'react';

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

interface AppContextValues {
  trackRecommendations: SpotifyApi.RecommendationsFromSeedsResponse | undefined;
  topArtists: SpotifyApi.UsersTopArtistsResponse | undefined;
  topTracks: SpotifyApi.UsersTopTracksResponse | undefined;
  audioFeatures: AudioFeature | undefined;
  setAudioFeatures: React.Dispatch<
    React.SetStateAction<AudioFeature | undefined>
  >;
  setTopTracks: React.Dispatch<
    React.SetStateAction<SpotifyApi.UsersTopTracksResponse | undefined>
  >;
  setTopArtists: React.Dispatch<
    React.SetStateAction<SpotifyApi.UsersTopArtistsResponse | undefined>
  >;
  setTrackRecommendations: React.Dispatch<
    React.SetStateAction<SpotifyApi.RecommendationsFromSeedsResponse | undefined>
  >;
}

const AppContext = React.createContext<AppContextValues>({
  trackRecommendations: undefined,
  topArtists: undefined,
  topTracks: undefined,
  audioFeatures: undefined,
  setAudioFeatures: () => {},
  setTopTracks: () => {},
  setTopArtists: () => {},
  setTrackRecommendations: () => {},
});

const useAppContext = () => useContext(AppContext);

const AppProvider: FC = ({ children }) => {
  const [
    trackRecommendations,
    setTrackRecommendations,
  ] = useState<SpotifyApi.RecommendationsFromSeedsResponse>();
  const [
    topTracks,
    setTopTracks,
  ] = useState<SpotifyApi.UsersTopTracksResponse>();
  const [
    topArtists,
    setTopArtists,
  ] = useState<SpotifyApi.UsersTopArtistsResponse>();
  const [audioFeatures, setAudioFeatures] = useState<AudioFeature>();
  const value = {
    topTracks,
    setTopTracks,
    audioFeatures,
    setAudioFeatures,
    topArtists,
    setTopArtists,
    trackRecommendations,
    setTrackRecommendations,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, useAppContext };
