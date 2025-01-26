"use client";

// Imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

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
    ],
    image: "/assets/work/thumb2.png",
    live: "https://mentali.site/",
    github: "",
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
                      {/* {index !== project.stack.length - 1 && ","} */}
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
                      className="h-[460px] relative group flex justify-center
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
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
