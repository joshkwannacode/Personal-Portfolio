import {
  figma,
  git,
  html,
  javascript,
  material,
  npm,
  react,
  sass,
  styled,
  webpack,
  python,
  wordpress,
  bootstrap,
} from "../../assets/tech-icons";

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "html5", icon: html },
      { name: "css3/scss", icon: sass },
      { name: "javascript", icon: javascript },
      { name: "python", icon: python },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "react", icon: react },
      { name: "styled", icon: styled },
      { name: "material ui", icon: material },
      { name: "bootstrap", icon: bootstrap },
    ],
  },
  {
    title: "Tools that I use",
    skills: [
      { name: "git", icon: git },
      { name: "wordpress", icon: wordpress },
      { name: "figma", icon: figma },
      { name: "npm & yarn", icon: npm },
      { name: "webpack", icon: webpack },
    ],
  },
];

export default skillsData;
