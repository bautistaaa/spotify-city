import { FC } from 'react';
import styled from 'styled-components/macro';
import NavigationButton from './components/NavigationButton';
import login from './services/auth/login';

const Login: FC = () => {
  const handleClick = () => {
    login();
  };

  return (
    <Wrapper>
      <Hero>
        <h1>
          WELCOME TO <Bold>{`{AppName}`}</Bold>
          <Small>(I can't think of a name...)</Small>
        </h1>
        <h2>A more interesting way to browse your Spotify data.</h2>
        <h3>Used Scopes</h3>
        <p>
          Scopes enable the application to access Spotify API endpoints. The set
          of scopes used in this application are:
        </p>
        <ul>
          <li>user-read-recently-played</li>
          <li>user-top-read</li>
          <li>streaming</li>
        </ul>
        <NavigationButton text="Log In" onClick={handleClick} />
      </Hero>
      <TwitchBlurb
        href="https://www.twitch.com/trash_dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="twitch.svg" alt="" height="20" />
        trash_dev
      </TwitchBlurb>
    </Wrapper>
  );
};
const TwitchBlurb = styled.a`
  display: flex;
  align-items: center;
  justify-center: center;
  width: 800px;
  color: black;
  text-decoration: none;
  img {
    margin-right: 7px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  h1,
  h2 {
    margin: 0 0 20px 0;
  }
  h1 {
    font-weight: 300;
  }
  h2 {
    font-weight: 300;
  }
  h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: 500;
  }
`;
const Hero = styled.div`
  width: 800px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 40px;
  margin-bottom: 10px;
  ul {
    padding-left: 20px;
    > li {
      font-weight: 500;
    }
  }
`;
const Bold = styled.span`
  font-weight: 500;
`;
const Small = styled.span`
  font-size: 12px;
`;

export default Login;
