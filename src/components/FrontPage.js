import React from "react";
import { Link } from "react-router-dom";
import {
  FrontPageStyle,
  FrontPageNav,
  FrontPageTitle,
  FrontPageH1,
  FrontPageP,
  NavBorder,
} from "./Styled";
export default function FrontPage() {
  return (
    <FrontPageStyle>
      <header>
        <FrontPageTitle>
          <FrontPageH1>Joshua Kang</FrontPageH1>
          <FrontPageP>Front-end Developer</FrontPageP>
        </FrontPageTitle>

        <NavBorder>
          <Link to="/Projects">
            <FrontPageNav>PROJECTS</FrontPageNav>
          </Link>

          <Link to="/Skills">
            <FrontPageNav>SKILLS</FrontPageNav>
          </Link>
          <Link to="/About">
            <FrontPageNav>ABOUT</FrontPageNav>
          </Link>
          <Link to="/Resume">
            <FrontPageNav>RESUME</FrontPageNav>
          </Link>
        </NavBorder>
      </header>
    </FrontPageStyle>
  );
}
