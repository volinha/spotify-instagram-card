import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as Spotify } from "../../img/spotify-seeklogo.com.svg";

import Amianto from "../../img/supercombo-amianto.jpg";
import CafeAmargo from "../../img/supercombo-cafeamargo.png";
import TodoCarinho from "../../img/dudabeat-todocarinho.jpg";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const Card = styled.div`
  width: ${cardSize - 2 * (cardSize * paddingToCard) + "px"};
  min-width: ${cardSize};
  height: ${cardSize - 2 * (cardSize * paddingToCard) + "px"};
  background: ${(props) => props.color};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${cardSize * paddingToCard + "px"};

  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: 0.4s ease all;

  &:active {
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: ${headerBoxSizeToContent * (cardSize - 2 * paddingToCard) + "px"};

  display: flex;
  flex-direction: row;
`;

const CardLyrics = styled.div`
  width: 100%;
  min-width: 100%;
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
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: 0.9em;
  padding-left: 15px;
`;

const HeaderSubtitle = styled.h5`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.color};
  font-weight: 200;
  font-size: 0.7em;
  padding-left: 15px;
`;

const Lyrics = styled.h2`
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: 5em;
  font-smooth: 5em;

  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 1.1em;
`;

const UpDownButtons = styled("button")`
  cursor: pointer;
  display: inline-block;

  position: relative;

  width: fit-content;
  height: 3.5%;
  padding: 0px 4px;

  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color};

  color: ${(props) => props.color};

  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  transition: ease all 0.3s;

  &:hover {
    border-color: ${(props) => props.hover};
    color: ${(props) => props.hover};
  }
`;

const LyricsCard = ({ data }) => {
  var [selected, setSelected] = useState(0);
  var [lyric, setLyric] = useState(0);
  var [song, setSong] = useState(0);

  const songname = data[song].title;
  const artist = data[song].artist;
  const firstline = data[song].lyrics[lyric];
  const secondline = data[song].lyrics[lyric + 1];
  const thirdline = data[song].lyrics[lyric + 2];
  const fourthline = data[song].lyrics[lyric + 3];
  const theme = data[song].theme;
  const fullLyrics = data[song].lyrics;
  const cover = data[song].src;

  const handleTheme = (theme) => {
    let dimThemes = theme.length;
    if (selected === dimThemes - 1) return setSelected(0);
    return setSelected(selected + 1);
  };

  const handleChangeLyric = (e) => {
    let dimLyrics = fullLyrics.length;

    if (e === "fwd") {
      if (lyric > dimLyrics - 4) return setLyric(0);
      return setLyric(lyric + 1);
    } else {
      if (lyric === 0) return setLyric(dimLyrics - 4);
      return setLyric(lyric - 1);
    }
  };

  const handleChangeSong = () => {
    let dimSongs = data.length;
    setLyric(0);
    if (song === dimSongs - 1) return setSong(0);
    return setSong(song + 1);
  };

  return (
    <>
      <Wrapper color={theme[selected].primaryColor}>
        <Card
          color={theme[selected].primaryColor}
          onClick={() => handleTheme(theme)}
        >
          <CardHeader>
            <HeaderImage
              style={{ height: "100%" }}
              src={
                songname === "Amianto"
                  ? Amianto
                  : songname === "Todo Carinho"
                  ? TodoCarinho
                  : CafeAmargo
              }
            ></HeaderImage>
            <HeaderText>
              <HeaderTitle color={theme[selected].secondaryColor}>
                {songname}
              </HeaderTitle>
              <HeaderSubtitle color={theme[selected].secondaryColor}>
                {artist}
              </HeaderSubtitle>
            </HeaderText>
          </CardHeader>
          <CardLyrics>
            <Lyrics color={theme[selected].secondaryColor}>{firstline}</Lyrics>
            <Lyrics color={theme[selected].secondaryColor}>{secondline}</Lyrics>
            <Lyrics color={theme[selected].secondaryColor}>{thirdline}</Lyrics>
            <Lyrics color={theme[selected].secondaryColor}>{fourthline}</Lyrics>
          </CardLyrics>
          <CardLogo>
            <Spotify
              height="100%"
              width="25%"
              fill={theme[selected].secondaryColor}
            />
          </CardLogo>
        </Card>
        <ButtonWrapper>
          <UpDownButtons
            onClick={() => handleChangeLyric("bwd")}
            color={theme[selected].secondaryColor}
            hover={theme[selected].secondaryColor + "88"}
          >
            Voltar letra
          </UpDownButtons>
          <UpDownButtons
            onClick={() => handleChangeSong()}
            color={theme[selected].secondaryColor}
            hover={theme[selected].secondaryColor + "88"}
          >
            Alterar música
          </UpDownButtons>
          <UpDownButtons
            onClick={() => handleChangeLyric("fwd")}
            color={theme[selected].secondaryColor}
            hover={theme[selected].secondaryColor + "88"}
          >
            Avançar letra
          </UpDownButtons>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default LyricsCard;
