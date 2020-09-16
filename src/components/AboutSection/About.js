import React from "react";
import { Link } from "react-router-dom";
import {
  MainStyle,
  Border,
  PageTitles,
  Text,
  NavButtons,
  NavBorder,
  AboutText,
  SeattlePic,
} from "../Styled.js";
import seattlePic from "../../assets/about-me-img/seattle-pic.jpg";
import resumeFile from "../../assets/Joshua-Kang-resume.pdf";
export default function About() {
  return (
    <MainStyle
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Border>
        <PageTitles>ABOUT</PageTitles>
        <Text>
          <SeattlePic src={seattlePic} alt="pic of seattle" />
          <AboutText>
            &nbsp;&nbsp;&nbsp;&nbsp;Hi I am Joshua Kang, a front-end developer
            based in Seattle,Washington. I started learning web development when
            I accidently opened dev-tools in Chrome and never looked back since.
            In my free time I am playing in a local basketball team, attending
            boxing/MMA classes , and spending time with my dog.
          </AboutText>
        </Text>

        <NavBorder>
          <Link to="/">
            <NavButtons>HOME</NavButtons>
          </Link>
          <Link to="/Projects">
            <NavButtons>PROJECTS</NavButtons>
          </Link>

          <Link to="/Skills">
            <NavButtons>SKILLS</NavButtons>
          </Link>

          <a href={resumeFile} download="Joshua-Kang-Resume">
            <NavButtons>RESUME</NavButtons>
          </a>
        </NavBorder>
      </Border>
    </MainStyle>
  );
}
