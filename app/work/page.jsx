"use client";

// Imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

const projects = [
  {
    num: "01",
    category: "Backend",
    title: "Spring Boot (Microservices)",
    description:
      "Design and development of microservices using Spring Boot, Spring Cloud, REST APIs, Swagger, API-first approach, Docker, and OAuth2 security.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring Cloud" },
      { name: "REST APIs" },
      { name: "Swagger" },
      { name: "Docker" },
      { name: "OAuth2" },
    ],
    image: "assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Spek7ro/Microservicios_Spring_Boot.git",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Mentali Web",
    description:
      '"Mentali Web," a web platform designed to register, analyze, and provide psychological follow-up for students, facilitating the work of psychologists through customized tools.',
    stack: [
      { name: "Python" },
      { name: "Django" },
      { name: "Docker" },
      { name: "MySQL" },
      { name: "JavaScript" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "GitLab" },
    ],
    image: "assets/work/thumb2.png",
    live: "https://mentali.site/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section>
      <div className="container mx-auto">Projects</div>
    </motion.section>
  );
};

export default Work;
