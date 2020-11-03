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
import SkyscannerGif from "../../assets/project-images/skyscanner.gif";
import Skyscanner from "../../assets/project-images/skyscanner.png";
import project1 from "../../assets/project-images/grammar-bot.png";
import project2 from "../../assets/project-images/bali-project.png";
import project1Gif from "../../assets/project-images/grammar-bot.gif";
import project2Gif from "../../assets/project-images/bali-resort.gif";
import resumeFile from "../../assets/Joshua-Kang-resume.pdf";
import {
  html2,
  javascript,
  material,
  react,
  css,
  nodeJS,
  mongodb
} from "../../assets/tech-icons";

export default function Projects() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);
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
            {isShown3 === true ? (
              <ProjectImg
                onMouseEnter={() => setIsShown3(false)}
                src={Skyscanner}
                alt="skyscanner img"
              />
            ) : null}

            {isShown3 === false ? (
              <ProjectGif
                onMouseLeave={() => setIsShown3(true)}
                src={SkyscannerGif}
                alt="skyscanner gif"
              />
            ) : null}

            <ProjectDescDiv>
              <ProjectTitle>OneWay Flight Info</ProjectTitle>
              <ProjectDesc>
              A full-stack CRUD app that searches and saves flight information from the Skyscanner api. 
              Incorporates a self-made REST api, the Skyscanner api, and an authentication system. 
              Created with React js, Node.js, MongoDB, Express api, React-router, HTML5, CSS3, and Javascript.

              </ProjectDesc>

              <TechStack>
                <h4>TechStack:</h4>
                <TechStackIcon src={react} alt="react" />
                <TechStackIcon src={nodeJS} alt="node-js" />
                <TechStackIcon src={mongodb} alt="mongodb" />
                <TechStackIcon src={javascript} alt="javascript" />
              </TechStack>
            </ProjectDescDiv>
          </FirstProject>
          <ProjectButton>
            <a
              href="https://github.com/joshkwannacode/OneWay-Flights"
              target="_blank"
              alt="code"
            >
              <CodeBtn>Code</CodeBtn>
            </a>
            <a
              href="https://one-way-flights.herokuapp.com/"
              target="_blank"
              alt="live Project"
            >
              <LiveCodeBtn>Live</LiveCodeBtn>
            </a>
          </ProjectButton>

          <SecondProject>
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
              A React js website that takes in text, checks for grammar 
              errors then using the Grammar Bot api returns all possible solutions and errors made. 
              Created with React js, Grammar Bot api, React-router, HTML5, CSS3, Javascript, and Material-ui.
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
          </SecondProject>
          <ProjectButton>
            <a
              href="https://github.com/joshkwannacode/grammar-josh"
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
                branch. The challenging part was that the width of the map could
                only be set in jsx.
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
              href="https://github.com/joshkwannacode/Bali-Resort"
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
          <a href={resumeFile} download="Joshua-Kang-Resume">
            <NavButtons>RESUME</NavButtons>
          </a>
        </NavBorder>
      </Border>
    </MainStyle>
  );
}
