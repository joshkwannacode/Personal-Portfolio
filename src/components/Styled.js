import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

//Key frames
const reveal = keyframes`
    100% {
      background-size: 300% 300%;
    }
  `;

const glow = keyframes` 
    40% {
      text-shadow: 0 0 8px #fff;
    }
    `;

//Animation and Style for FrontPage
export const FrontPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  color: white;

  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  animation: ${reveal} 1000ms ease-in-out forwards 200ms;

  @media (max-width: 480px) {
    width: 80%;
    margin-left: 35px;
  }
`;

//FrontPage titles
export const FrontPageTitle = styled.div`
  padding-bottom: 30px;
`;
export const FrontPageH1 = styled.h1`
  font-size: 56.6px;
`;
export const FrontPageP = styled.p`
  font-size: 20px;
`;

//FrontPage Nav
export const FrontPageNav = styled.button`
  background-color: transparent;
  padding: 10px 10px;
  border: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:hover {
    color: black;
    opacity: 1;
  }
`;
//Nav Border
export const NavBorder = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.7);
`;
//Main style for pages other than Layout
export const MainStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  max-width: 100vw;
`;

//Borders
export const Border = styled.div`
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  z-index: 2;
  
  @media (max-width: 480px) {
    width: 80vw;
  }
`;

//For title of pages other than FrontPage
export const PageTitles = styled.h2`
  margin-top: 3vh;
`;

//For areas with Text
export const Text = styled.div`
  /* height: 80vh; */
  width: 50vw;
  margin-top: 5vh;
`;

//Navbar buttons for pages other than FrontPage
export const NavButtons = styled.button`
  background-color: transparent;
  padding: 10px 10px;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 25px;
  cursor: pointer;

  &:hover {
    text-decoration: line-through;
  }
`;

//Project Page details
export const FirstProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  @media (max-width: 475px) {
  margin-left:30vw;
  }
  
`;
export const SecondProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  @media (max-width: 475px) {
  margin-left:30vw;
  }

  @media (max-width: 480px) {
    margin-top: 5vh;
  }
  
`;
export const ProjectImg = styled.img`
  justify-content:center;
  align-items:center;
  width: 35vw;
  height: 38vh;
  margin-right:1vw;

  @media (min-width: 2560px) {
    height: 41vh;
  }
  @media (max-width: 768px) {
    height: 30vh;
  }
  @media (max-width: 600px) {
    width: 40vw;
    height: 20vw;
  }
  @media (max-width: 320px) {
    width: 50vw;
    height: 30vw;
  }
`;
export const ProjectGif = styled.img`
  width: 35vw;
  height: 38vh;
  margin-right:1vw;

  @media (min-width: 2560px) {
    height: 41vh;
  }
  @media (max-width: 768px) {
    height: 30vh;
  }
  @media (max-width: 600px) {
    width: 40vw;
    height: 20vw;
  }
  @media (max-width: 320px) {
    width: 50vw;
    height: 30vw;
  }
`;
export const ProjectDescDiv = styled.div`

  
  @media (max-width: 600px) {
    font-size:2vw;
    width:60vw;
  }
  /* @media (max-width: 320px) {
    font-size:2vw;
    width:50vw;
  } */
`;

export const ProjectTitle = styled.h3`
  @media (max-width: 768px) {
    font-size: 1.2vw;
  }
  @media (max-width: 600px) {
    font-size:3vw;
  }

  @media (max-width: 320px) {
    font-size: 3vw;
  }
`;
export const ProjectDesc = styled.p`
  font-size: 10px;
  text-align: justify;
  width:35vw;

  @media (max-width: 2560px) {
    font-size: 0.8vw;
  }
  @media (max-width: 768px) {
    font-size: 1vw;
  }
  @media (max-width:600px) {
    font-size:1.6vw;
    width:42vw;
    margin-left:8vw;
  }
  @media (max-width:470px) {
    font-size:2vw;
    width:55vw;
    margin-left:2vw;
  }

  
`;
export const ProjectButton = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  margin-top: 1vh;
  margin-right: 1vw;
  margin-bottom: 3vh;
  @media (max-width: 768px) {
    margin-top:0vw;
  }
  @media (max-width: 600px) {
    margin-bottom:1vh;
    margin-top:0vw;

  }
`;

export const LiveCodeBtn = styled.button`
  margin-left: 1vw;
  border-radius: 2px;
  width: 5vw;
  background-color: gray;
  border: gray;
  cursor: pointer;
  color: white;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
  @media(min-width:2560px){
    width:3vw;
  }
  @media (max-width: 768px) {
    font-size:1vw;
  }
  @media (max-width: 600px) {
    width: 5vw;
    height:2vh;
    font-size:1.7vw;
  }
`;

export const CodeBtn = styled.button`
  margin-left: 1vw;
  border-radius: 2px;
  width: 5vw;
  background-color: gray;
  border: gray;
  cursor: pointer;
  color: white;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
  @media(min-width:2560px){
    width:3vw;
  }
  @media (max-width: 768px) {
    font-size:1vw;
  }
  @media (max-width: 600px) {
    width: 5vw;
    height:2vh;
    font-size:1.7vw;
  }
`;
export const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 2vh;
  margin-bottom:6vh;
  @media (max-width: 2560px) and (min-width: 2000px) {
    font-size: 1vw;
  }
  @media (max-width: 768px) {
    margin-top: 1vh;
    width: 15vw;
    font-size: 1.3vw;
  }
  @media (max-width:600px) {
    margin-left:8vw;
  }
  @media (max-width: 475px) {
    margin-top: 2vh;
    font-size: 2.5vw;
    margin-left:2vw;
  }

`;
export const TechStackIcon = styled.img`
  height: 3.5vh;
  width: 1.5vw;
  margin-right: 0.5vw;
  margin-left: 0.5vw;
  @media (max-width: 768px) {
    width: 1.5vw;
    margin-top: -0.8vh;
  }
  @media (max-width: 480px) {
    height: 5vh;
    width: 3vw;
    margin-top: -1.5vh;
  }
  @media (max-width: 380px) {
    height: 4vh;
    width: 4vw;
    margin-top: -1.5vh;
  }
`;
export const MoreProjectButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.2vw;
  font-size: 1vw;
  width: 10vw;
  height: 5vh;
  background-color: gray;
  border: gray;
  cursor: pointer;
  color: white;
  opacity: 1;
  margin-top: 3vh;
  margin-bottom:4vh;
  margin-left: 20vw;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    margin-top: 8vh;
  }
  @media (max-width: 480px) {
    margin-left: 22vh;
    width: 25vw;
    height: 5vh;
    font-size: 2vw;
  }
  @media (max-width: 380px) {
    margin-left: 27vw;
  }
`;
//Skills Page details
export const SkillsPage = styled.div`
margin-bottom:4vh;`;
export const SkillsDetail = styled.div`
  margin-left: 2vw;
`;

export const SkillsIcon = styled.img`
  height: 9vh;
  width: 5vw;
  margin-right: 2vw;
  @media (max-width: 480px) {
    width: 12vw;
    height: 8vh;
  }
`;
export const SkillTitles = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 4vh;
`;
export const SkillsItemList = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SkillsItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  text-align: center;
`;
export const IconName = styled.span`
  margin-right: 2.2vw;
  font-size: 1vw;
  margin-top: 2vh;
  @media (max-width: 480px) {
    font-size: 2vw;
  }
  @media (max-width: 320px) {
    font-size: 3vw;
  }
`;

//About Page
export const AboutText = styled.p`
  text-align: justify;
  margin-right: 2vw;
  margin-left: 1vw;
  margin-top: 2vh;
  @media (max-width: 2560px) {
    font-size: 1.5vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
    width: 77vw;
  }
`;
export const SeattlePic = styled.img`
  width: 40vw;
  height: 35vh;
  margin-right: 1vw;
  @media (max-width: 480px) {
    width: 70vw;
    margin-left: 4.5vw;
  }
  @media (max-width: 380px) {
    width: 60vw;
    height: 20vh;
    margin-left: 9vw;
  }
  @media (max-width: 325px) {
    width: 60vw;
    height: 20vh;
    margin-left: 10vw;
  }
`;
