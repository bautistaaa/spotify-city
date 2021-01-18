import { FC, useEffect } from 'react';
import getToken from '../../utils/getToken';

const SpotifyPlayer: FC<{ track: string }> = ({ track }) => {
  useEffect(() => {
    const id = window.localStorage.getItem('deviceId');
    window.player.setVolume(0.5).then(() => {
      console.log('Volume updated!');
    });

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [track] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return () => {
      window.player.pause().then(() => {
        console.log('Paused playback!');
      });
    };
  }, [track]);

  return <div />;
};

export default SpotifyPlayer;
