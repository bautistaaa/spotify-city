export interface Config {
  apiUrl: string;
  authorizeUrl: string;
  clientId?: string;
  clientSecret?: string;
  scopes: string;
  tokenUrl: string;
}

const config: Config = {
  apiUrl: 'https://api.spotify.com/v1',
  authorizeUrl: 'https://accounts.spotify.com/authorize',
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
  scopes:
    'user-read-recently-played user-top-read streaming user-library-modify',
  tokenUrl: 'https://accounts.spotify.com/api/token',
};

export default config;
