import React from "react";
import styled, { keyframes } from "styled-components";

import cover from "../../img/supercombo.png";
import { ReactComponent as Spotify } from "../../img/SpotWhite.svg";

const cardSize = 300; //px

const paddingToCard = 0.0784313725490196;

const headerBoxSizeToContent = 0.2340425531914894;
const lyricsBoxSizeToContent = 0.5957446808510638;
const logoBoxSizeToContent = 0.0851063829787234;

const Wrapper = styled.div`
margin: 0;
padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.primaryColor};
`;

const Card = styled.div`
  width: ${cardSize - 2 * (cardSize * paddingToCard) + "px"};
  height: ${cardSize - 2 * (cardSize * paddingToCard) + "px"};
  background: ${(props) => props.primaryColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${cardSize * paddingToCard + "px"};

  box-shadow: 0px 0px 15px 0px #000000;
`;

const CardHeader = styled.div`
  width: 100%;
  height: ${headerBoxSizeToContent * (cardSize - 2 * paddingToCard) + "px"};

  display: flex;
  flex-direction: row;
`;

const CardLyrics = styled.div`
  width: 100%;
  height: ${lyricsBoxSizeToContent * (cardSize - 2 * paddingToCard) + "px"};
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const CardLogo = styled.div`
  width: 100%;
  height: ${logoBoxSizeToContent * (cardSize - 2 * paddingToCard) + "px"};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderImage = styled.img`
  height: 100%;
`;

const HeaderText = styled.div`
  width: ${(100 / 3) * 2 + "%"};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: 3em;
  font-smoothing: 3em;
  color: white;
  font-weight: 500;
  font-size: 0.9em;
  padding-left: 15px;
`;

const HeaderSubtitle = styled.h5`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-weight: 200;
  font-size: 0.7em;
  padding-left: 15px;
`;

const Lyrics = styled.h2`
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: 5em;
  font-smoothing: 5em;

  color: white;
  font-weight: 500;
  font-size: 1.1em;
`;

const LogoText = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-weight: 550;
  font-size: 0.75em;
`;

const LyricsCard = ({
  songname,
  artist,
  firstline,
  secondline,
  thirdline,
  fourthline,
  color,
}) => {
  return (
    <Wrapper primaryColor={color}>
      <Card primaryColor={color}>
        <CardHeader>
          <HeaderImage src={cover}></HeaderImage>
          <HeaderText>
            <HeaderTitle>{songname}</HeaderTitle>
            <HeaderSubtitle>{artist}</HeaderSubtitle>
          </HeaderText>
        </CardHeader>
        <CardLyrics>
          <Lyrics>{firstline}</Lyrics>
          <Lyrics>{secondline}</Lyrics>
          <Lyrics>{thirdline}</Lyrics>
          <Lyrics>{fourthline}</Lyrics>
        </CardLyrics>
        <CardLogo>
          <Spotify 
          height="70%" 
          width="10%" 
          color="#FFF"/>
          <LogoText>Spotify</LogoText>
        </CardLogo>
      </Card>
    </Wrapper>
  );
};

export default LyricsCard;
