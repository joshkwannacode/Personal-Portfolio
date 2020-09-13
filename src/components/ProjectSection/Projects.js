import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MainStyle,
  Border,
  PageTitles,
  Text,
  NavButtons,
  NavBorder,
  FirstProject,
  SecondProject,
  ProjectButton,
  ProjectImg,
  ProjectDescDiv,
  ProjectTitle,
  ProjectDesc,
  LiveCodeBtn,
  CodeBtn,
  TechStack,
  TechStackIcon,
  MoreProjectButton,
  ProjectGif,
} from "../Styled.js";
import project1 from "../../assets/project-images/grammar-bot.png";
import project2 from "../../assets/project-images/bali-project.png";
import project1Gif from "../../assets/project-images/grammar-bot.gif";
import project2Gif from "../../assets/project-images/bali-resort.gif";

import {
  html2,
  javascript,
  material,
  react,
  css,
} from "../../assets/tech-icons";

export default function Projects() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  return (
    <MainStyle
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Border>
        <PageTitles>PROJECTS</PageTitles>
        <Text>
          <FirstProject>
            {isShown === true ? (
              <ProjectImg
                onMouseEnter={() => setIsShown(false)}
                src={project1}
                alt="project 1 img"
              />
            ) : null}

            {isShown === false ? (
              <ProjectGif
                onMouseLeave={() => setIsShown(true)}
                src={project1Gif}
                alt="project 1 gif"
              />
            ) : null}

            <ProjectDescDiv>
              <ProjectTitle>GrammarBot</ProjectTitle>
              <ProjectDesc>
                This website takes in text and checks for grammar errors, then
                it returns all the errors and possible solutions. The difficult
                part of making this website was that the documentation on the
                api was limited. Due to this I realized the importance of the
                console log.
              </ProjectDesc>

              <TechStack>
                <h4>TechStack:</h4>
                <TechStackIcon src={react} alt="react" />
                <TechStackIcon src={html2} alt="html" />
                <TechStackIcon src={css} alt="css" />
                <TechStackIcon src={javascript} alt="javascript" />
                <TechStackIcon src={material} alt="material-ui" />
              </TechStack>
            </ProjectDescDiv>
          </FirstProject>
          <ProjectButton>
            <a
              href="https://github.com/joshkwannacode/GrammarFix-react"
              target="_blank"
              alt="code"
            >
              <CodeBtn>Code</CodeBtn>
            </a>
            <a
              href="https://grammar-josh.netlify.app/"
              target="_blank"
              alt="live Project"
            >
              <LiveCodeBtn>Live</LiveCodeBtn>
            </a>
          </ProjectButton>

          <SecondProject>
            {isShown2 === true ? (
              <ProjectImg
                onMouseEnter={() => setIsShown2(false)}
                src={project2}
                alt="project 2 img"
              />
            ) : null}
            {isShown2 === false ? (
              <ProjectGif
                onMouseLeave={() => setIsShown2(true)}
                src={project2Gif}
                alt="project 2 gif"
              />
            ) : null}
            <ProjectDescDiv>
              <ProjectTitle>Bali Resort Landing Page</ProjectTitle>
              <ProjectDesc>
                This is a react js landing page for a mock resort. I used a map
                api to show the locations and some basic details for each
                branch. The part I had most trouble was using the react-router
                because I had no prior knowledge about it.
              </ProjectDesc>

              <TechStack>
                <h4>TechStack:</h4>
                <TechStackIcon src={react} alt="react" />
                <TechStackIcon src={html2} alt="html" />
                <TechStackIcon src={css} alt="css" />
                <TechStackIcon src={javascript} alt="javascript" />
              </TechStack>
            </ProjectDescDiv>
          </SecondProject>
          <ProjectButton>
            <a
              href="https://github.com/joshkwannacode/Bali-Resort-Page"
              target="_blank"
              alt="code"
            >
              <CodeBtn>Code</CodeBtn>
            </a>
            <a
              href="https://bali-resort.netlify.app/"
              target="_blank"
              alt="live Project"
            >
              <LiveCodeBtn>Live</LiveCodeBtn>
            </a>
          </ProjectButton>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/joshkwannacode"
            target="_blank"
            alt="more projects"
          >
            <MoreProjectButton>More Projects</MoreProjectButton>
          </a>
        </Text>

        <NavBorder>
          <Link to="/">
            <NavButtons>HOME</NavButtons>
          </Link>

          <Link to="/Skills">
            <NavButtons>SKILLS</NavButtons>
          </Link>
          <Link to="/About">
            <NavButtons>ABOUT</NavButtons>
          </Link>
          <Link to="/Resume">
            <NavButtons>RESUME</NavButtons>
          </Link>
        </NavBorder>
      </Border>
    </MainStyle>
  );
}
