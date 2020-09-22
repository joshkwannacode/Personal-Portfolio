import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FrontPageStyle,
  FrontPageNav,
  FrontPageTitle,
  FrontPageH1,
  FrontPageP,
  NavBorder,
} from "../Styled";
import resumeFile from "../../assets/Joshua-Kang-resume.pdf";
export default function FrontPage() {
  return (
    <>
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
            <a href={resumeFile} download="Joshua-Kang-Resume">
              <FrontPageNav>RESUME</FrontPageNav>
            </a>
          </NavBorder>
        </header>
      </FrontPageStyle>
    </>
  );
}
