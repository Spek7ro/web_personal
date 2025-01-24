"use client";

import { FaJava, FaPython, FaNodeJs, FaDocker, FaLinux } from "react-icons/fa";

import { GrOracle, GrDatabase } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGit } from "react-icons/fa";

// about me
const about = {
  title: "About Me",
  description:"Software Engineer passionate about technology and cybersecurity. Focused on developing innovative solutions and exploring the intersection of programming and security.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Cristian Alvarado"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+52) 492 223 1030"
    },
    {
      fieldName: "Email",
      fieldValue: "cristianrdz75453@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Mexico"
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English"
    },
  ],
};

// experience data
const experience = {
  icon: 'assets/resume/badge.svg',
  title: "My Experience",
  description: "I have worked in the following companies and projects",
  items: [
    {
      comany: "Orla Mining Ltd",
      position: "Software Engineer",
      duration: "March 2024 - October 2024", 
    },
    {
      comany: "Laboratory of molecular medicine - UAZ",
      position: "Web Developer",
      duration: "Junary 2024 - March 2024"
    },
    {
      comany: "Psicosfera",
      position: "Backend Developer",
      duration: "February 2023 - November 2023"
    },
  ],
};

// education data
const education = {
  icon: 'assets/resume/cap.svg',
  title: "My Education",
  description: "I graduated with a degree in software engineering",
  items: [
    {
      institution: "Universidad Autónoma de Zacatecas",
      degree: "Software Engineer",
      duration: "2020 - 2024" 
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "I have a strong background in the following skills",
  items: [
    
  ],
};

const Resume = () => {
  return (
    <h1>Resume</h1>
  );
};

export default Resume;
