import React from "react";
import { Link } from "react-router-dom";
import {
  MainStyle,
  Border,
  PageTitles,
  Text,
  NavButtons,
  NavBorder,
  SkillsPage,
  SkillsDetail,
  SkillsIcon,
  SkillTitles,
  SkillsItemList,
  SkillsItemDiv,
  IconName,
} from "../Styled.js";
import skillsData from "./skillsData";
import resumeFile from "../../assets/Joshua-Kang-resume.pdf";
export default function Skills() {
  return (
    <MainStyle
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Border>
        <SkillsPage>
          <PageTitles>SKILLS</PageTitles>
          <Text>
            <SkillsDetail>
              {skillsData.map(({ skills, title }) => (
                <div>
                  <SkillTitles>{title}</SkillTitles>
                  <SkillsItemList>
                    {skills.map(({ name, icon }) => (
                      <SkillsItemDiv key={name}>
                        <SkillsIcon src={icon} alt={name} />
                        <IconName>{name}</IconName>
                      </SkillsItemDiv>
                    ))}
                  </SkillsItemList>
                </div>
              ))}
            </SkillsDetail>
          </Text>
        </SkillsPage>

        <NavBorder>
          <Link to="/">
            <NavButtons>HOME</NavButtons>
          </Link>

          <Link to="/Projects">
            <NavButtons>PROJECTS</NavButtons>
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
