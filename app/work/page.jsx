"use client";

// Imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Backend",
    title: "Spring Boot Microservices - Financial Sector",
    description:
      "PaymentChain, a financial sector startup, needs to create a technological solution to support the core of its business. This includes managing customer information, products, transactions, communication with business partners, and other operational processes.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring Cloud" },
      { name: "REST APIs" },
      { name: "Swagger" },
      { name: "Docker" },
      { name: "OAuth2" },
    ],
    image: "/assets/work/thumb1.png",
    live: "ttps://github.com/Spek7ro/Microservicios_Spring_Boot.git",
    github: "https://github.com/Spek7ro/Microservicios_Spring_Boot.git",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Mentali Web",
    description:
      '"Mentali Web", a web platform designed to register, analyze, and provide psychological follow-up for students, facilitating the work of psychologists through customized tools.',
    stack: [
      { name: "Python" },
      { name: "Django" },
      { name: "Docker" },
      { name: "MySQL" },
      { name: "JavaScript" },
      { name: "CSS" },
      { name: "HTML" },
    ],
    image: "/assets/work/mentali.png",
    live: "https://mentali.site/",
    github: "https://mentali.site/",
  },
  {
    num: "03",
    category: "Backend",
    title: "Spring-Oracle-Docker Integration",
    description: "This project is designed to learn how to integrate an application built with Spring Boot with an Oracle database, using Docker containers for deployment. The solution includes optimized configurations for development and test environments.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "Docker" },
      { name: "Oracle" },
      { name: "Postman" },
    ],
    image: "/assets/work/project03.png",
    live: "https://github.com/Spek7ro/Spring-Oracle-Docker.git",
    github: "https://github.com/Spek7ro/Spring-Oracle-Docker.git",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Todo Application",
    description: "This is a project for a to-do list application. It is a simple application that allows users to add, edit, and delete tasks.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Tymeleaf" },
      { name: "HTML" },
      { name: "Bootstrap" },
      { name: "MySQL" },
    ],
    image: "/assets/work/project02.png",
    live: "https://github.com/Spek7ro/TodoApp_SpringBoot.git",
    github: "https://github.com/Spek7ro/TodoApp_SpringBoot.git",
  },
  {
    num: "05",
    category: "Data Analysis",
    title: "ETL Pipeline in Python",
    description: "This is a project in which a component responsible for executing the data extraction, transformation and loading process was developed. Using different sources of information.",
    stack: [
      { name: "Python" },
      { name: "Docker" },
      { name: "Python luigi" },
      { name: "dgraph" },
    ],
    image: "/assets/work/project04.png",
    live: "https://github.com/Spek7ro/GestorDeDatos_ETL.git",
    github: "https://github.com/Spek7ro/GestorDeDatos_ETL.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
          order-2 xl:order-none "
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div
                className="text-8xl leading-none font-extrabold 
              text-transparent text-outline"
              >
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500 capitalize "
              >
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* project stack */}
              <ul className="flex gap-10">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* Buutons */}
              <div className="flex items-center gap-4">
                {/* Live projects buuton */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github projects buuton */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] w-[620px] relative group flex justify-center
                    items-center bg-pink-50/20 "
                    >
                      {/* overlay */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full bg-black/10 
                      z-10"
                      ></div>
                      {/* image */}
                      <div className="realtive w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slides buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute rigth-1 bottom-[calc(50%_-_22px)] 
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                w-[45px] h-[45px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
