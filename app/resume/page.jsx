"use client";

import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaGitlab,
} from "react-icons/fa";
import { GrOracle, GrDatabase } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGit } from "react-icons/fa";
import { DiDjango } from "react-icons/di";

// about me
const about = {
  title: "About Me",
  description:
    "Software Engineer passionate about technology and cybersecurity. Focused on developing innovative solutions and exploring the intersection of programming and security.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Cristian Alvarado",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+52) 492 223 1030",
    },
    {
      fieldName: "Email",
      fieldValue: "cristianrdz75453@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Mexico",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
  ],
};

// experience data
const experience = {
  icon: "assets/resume/badge.svg",
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
      duration: "Junary 2024 - March 2024",
    },
    {
      comany: "Psicosfera",
      position: "Backend Developer",
      duration: "February 2023 - November 2023",
    },
  ],
};

// education data
const education = {
  icon: "assets/resume/cap.svg",
  title: "My Education",
  description: "I graduated with a degree in software engineering",
  items: [
    {
      institution: "Universidad Autónoma de Zacatecas",
      degree: "Software Engineer",
      duration: "2020 - 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "I have a strong background in the following skills",
  items: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <GrOracle />,
      name: "Oracle",
    },
    {
      icon: <GrDatabase />,
      name: "Database",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "Spring Boot",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaGitlab />,
      name: "Gitlab",
    },
    {
      icon: <DiDjango />,
      name: "Django",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6
                        px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> 
                            <p className="text-white/60">{item.comany}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
