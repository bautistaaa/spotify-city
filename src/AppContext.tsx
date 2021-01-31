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
>;

interface AppContextValues {
  audioFeatures: AudioFeature | undefined;
  featuredPlaylists: SpotifyApi.ListOfFeaturedPlaylistsResponse | undefined;
  newReleases: SpotifyApi.ListOfNewReleasesResponse | undefined;
  trackRecommendations: SpotifyApi.RecommendationsFromSeedsResponse | undefined;
  topArtists: SpotifyApi.UsersTopArtistsResponse | undefined;
  topTracks: SpotifyApi.UsersTopTracksResponse | undefined;
  setAudioFeatures: React.Dispatch<
    React.SetStateAction<AudioFeature | undefined>
  >;
  setFeaturedPlaylists: React.Dispatch<
    React.SetStateAction<SpotifyApi.ListOfFeaturedPlaylistsResponse | undefined>
  >;
  setNewReleases: React.Dispatch<
    React.SetStateAction<SpotifyApi.ListOfNewReleasesResponse | undefined>
  >;
  setTopTracks: React.Dispatch<
    React.SetStateAction<SpotifyApi.UsersTopTracksResponse | undefined>
  >;
  setTopArtists: React.Dispatch<
    React.SetStateAction<SpotifyApi.UsersTopArtistsResponse | undefined>
  >;
  setTrackRecommendations: React.Dispatch<
    React.SetStateAction<
      SpotifyApi.RecommendationsFromSeedsResponse | undefined
    >
  >;
}

const AppContext = React.createContext<AppContextValues>({
  audioFeatures: undefined,
  featuredPlaylists: undefined,
  newReleases: undefined,
  trackRecommendations: undefined,
  topArtists: undefined,
  topTracks: undefined,
  setAudioFeatures: () => {},
  setFeaturedPlaylists: () => {},
  setNewReleases: () => {},
  setTopTracks: () => {},
  setTopArtists: () => {},
  setTrackRecommendations: () => {},
});

const useAppContext = () => useContext(AppContext);

const AppProvider: FC = ({ children }) => {
  const [audioFeatures, setAudioFeatures] = useState<AudioFeature>();
  const [
    featuredPlaylists,
    setFeaturedPlaylists,
  ] = useState<SpotifyApi.ListOfFeaturedPlaylistsResponse>();
  const [
    newReleases,
    setNewReleases,
  ] = useState<SpotifyApi.ListOfNewReleasesResponse>();
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
  const value = {
    audioFeatures,
    setAudioFeatures,
    featuredPlaylists,
    setFeaturedPlaylists,
    newReleases,
    setNewReleases,
    topTracks,
    setTopTracks,
    topArtists,
    setTopArtists,
    trackRecommendations,
    setTrackRecommendations,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, useAppContext };
