import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useTransform,
  useScroll,
} from "framer-motion";
import noise from "/noise.svg";
import { ArrowUpRightIcon, Github } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectEachCard from "./ProjectEachCard";

const Projects = forwardRef(({ index, sm3, sm4, bgcolor, item }, ref) => {
  const Prref = useRef(null);
  const { scrollYProgress } = useScroll();
  const [linkHover1, setLinkHover1] = useState(false);
  const [linkHover2, setLinkHover2] = useState(false);
  const [linkHover3, setLinkHover3] = useState(false);
  const [linkHover4, setLinkHover4] = useState(false);

  const indeXMove = useTransform(
    scrollYProgress,
    [0.1, 0.18, 0.255, 0.3],
    ["0", "-100%", "-200%", "-300%"]
  );
  const indeScale = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.14, 0.18, 0.2175, 0.255, 0.2775, 0.3],
    ["0%", "100%", "20%", "100%", "20%", "100%", "20%", "100%"]
  );
  const wholeClipPath = useTransform(scrollYProgress, [0, 0.07], [10, 0]);

  const mainClipPath = useTransform(wholeClipPath, (v) => {
    return `inset(0 ${v}% 0  round ${v}rem)`;
  });

  const HeadingX = useTransform(scrollYProgress, [0.04, 0.08], ["-50%", "0%"]);
  const HeadingOpacity = useTransform(
    scrollYProgress,
    [0.075, 0.09],
    ["70%", "0%"]
  );
  const clipPathTrns1 = useTransform(
    scrollYProgress,
    [0.07 + 0.01, 0.1],
    ["100%", "0%"]
  );
  const clipPathTrns2 = useTransform(
    scrollYProgress,
    [0.16 - 0.03, 0.175],
    ["100%", "0%"]
  );
  const clipPathTrns3 = useTransform(
    scrollYProgress,
    [0.245 - 0.03, 0.255],
    ["100%", "0%"]
  );
  const clipPathTrns4 = useTransform(
    scrollYProgress,
    [0.322 - 0.03, 0.33],
    ["100%", "0%"]
  );
  const clipping1 = useTransform(clipPathTrns1, (v) => {
    return `inset(0 ${v} 0 0)`;
  });
  const clipping2 = useTransform(clipPathTrns2, (v) => {
    return `inset(0 ${v} 0 0)`;
  });
  const clipping3 = useTransform(clipPathTrns3, (v) => {
    return `inset(0 ${v} 0 0)`;
  });
  const clipping4 = useTransform(clipPathTrns4, (v) => {
    return `inset(0 ${v} 0 0)`;
  });
  // useMotionValueEvent(mainClipPath, "change", (latest) => {
  //   console.log("value: ", latest);
  // });
  const ProjectData = [
    {
      projectName: "Cypher",
      video: "./CypherPromo.mp4",
      link: "https://cypher-theta.vercel.app/",
      details:
        " Our payment fraud application\n employs machine learning algorithms\n to detect suspicious transactions,\n flagging potential fraudulent activity in real-time. ",
      color: "to-[#000000]",
    },
    {
      projectName: "Agrico",
      video: "./AgricoPromo.mp4",
      details:
        "Agrico is an innovative EdTech platform\n empowering individuals and communities\n to learn modern farming practices\n and cultivate sustainable agricultural success. ",
      color: "to-[#2d232e]",
      link: "https://agrico.vercel.app/",
    },
    {
      projectName: "Cook's Book",
      video: "./Cook'sBookPromo.mp4",
      details:
        " Cook's Book could evolve into a\n meal planning tool,suggesting recipes for the entire week \nthat utilize overlapping ingredients and minimize waste.",
      color: "to-[#02010a]",
      link: "https://github.com/AvirupRay/CookBook",
    },
    {
      projectName: "RobinFood",
      video: "./RobinFoodPromo.mp4",
      details:
        "RobinFood is a web platform\n that bridges the gap between restaurants with\nsurplus food and non-governmental organization(NGOs),\nfood banks, dedicated to distributing food to those in need.",
      color: "to-[#2d2d34]",
      link: "https://github.com/AvirupRay/reckon_5.0",
    },
  ];

  return (
    <motion.section
      className=" h-screen mt-[10vh] w-[calc(100vw-3px)] flex flex-col bg-[#111010] text-white sticky top-[0px] z-50"
      style={{
        position: "sticky",
        clipPath: mainClipPath,
      }}
      ref={Prref}
    >
      {/* <svg className=" absolute top-[-10.5vh] w-[calc(100vw-3px)] h-[30vh] fill-[#111010]  ">
        <motion.path
          animate={{
            d: initialPath,
          }}
        ></motion.path>
      </svg> */}
      <div className=" w-full  h-full relative overflow-hidden">
        <motion.div
          className=" absolute top-0 left-1/2 [transform:translate(30%,10%)] lg:text-[15vh] text-[5vh] whitespace-nowrap font-Geist"
          style={{
            translateX: HeadingX,
            opacity: HeadingOpacity,
          }}
        >
          -Projects-
        </motion.div>

        <div
          className=" absolute top-[10%]  left-[5%] text-[30vh] leading-none font-Blackbird opacity-15 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 30%, transparent 100%)",
          }}
        >
          <div className=" relative px-[1vw] ">
            <div className=" opacity-0">04.</div>
            <motion.div
              className=" absolute  flex flex-col items-center justify-center"
              style={{
                top: indeXMove,
                opacity: indeScale,
              }}
            >
              <div>01.</div>
              <div>02.</div>
              <div>03.</div>
              <div>04.</div>
            </motion.div>
          </div>
        </div>
        <div className="lg:w-[20vw] lg:top-1/2 lg:h-[30vh] lg:gap-0 gap-1 top-[20%]  lg:text-[3vh] text-[2.5vh] [transform:translate(10%,-50%)] justify-evenly  absolute flex flex-col font-Geist whitespace-nowrap">
          <div className=" w-full h-[20%] ">
            <motion.div
              className=" w-full h-full relative"
              style={{
                clipPath: clipping1,
              }}
              onMouseEnter={() => setLinkHover1(true)}
              onMouseLeave={() => setLinkHover1(false)}
            >
              <motion.div
                className=" absolute w-full h-[5%] bg-gradient-to-l from-white to-gray-400 bottom-[10%]"
                animate={{
                  transform: linkHover1 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: linkHover1 ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.5,
                  transformOrigin: { duration: 0.0 },
                }}
              ></motion.div>
              <Link
                className=" flex items-center justify-start pl-[1vw] h-full  w-full"
                to={ProjectData[0].link}
                target="_blank"
              >
                Cypher <ArrowUpRightIcon />
              </Link>
            </motion.div>
          </div>
          <div className=" w-full h-[20%] ">
            <motion.div
              className=" w-full h-full relative"
              style={{
                clipPath: clipping2,
              }}
              onMouseEnter={() => setLinkHover2(true)}
              onMouseLeave={() => setLinkHover2(false)}
            >
              <motion.div
                className=" absolute w-full h-[5%] bg-gradient-to-l from-white to-gray-400 bottom-[10%]"
                animate={{
                  transform: linkHover2 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: linkHover2 ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.5,
                  transformOrigin: { duration: 0.0 },
                }}
              ></motion.div>
              <Link
                className=" flex items-center justify-start pl-[1vw] h-full  w-full"
                to={ProjectData[1].link}
                target="_blank"
              >
                Agrico <ArrowUpRightIcon />
              </Link>
            </motion.div>
          </div>
          <div className=" w-full h-[20%] ">
            <motion.div
              className=" w-full h-full relative"
              style={{
                clipPath: clipping3,
              }}
              onMouseEnter={() => setLinkHover3(true)}
              onMouseLeave={() => setLinkHover3(false)}
            >
              <motion.div
                className=" absolute w-full h-[5%] bg-gradient-to-l from-white to-gray-400 bottom-[10%]"
                animate={{
                  transform: linkHover3 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: linkHover3 ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.5,
                  transformOrigin: { duration: 0.0 },
                }}
              ></motion.div>
              <Link
                className=" flex items-center justify-start pl-[1vw] h-full  w-full"
                to={ProjectData[2].link}
                target="_blank"
              >
                Cook's Book <ArrowUpRightIcon />
              </Link>
            </motion.div>
          </div>
          <div className=" w-full h-[20%] ">
            <motion.div
              className=" w-full h-full relative"
              style={{
                clipPath: clipping4,
              }}
              onMouseEnter={() => setLinkHover4(true)}
              onMouseLeave={() => setLinkHover4(false)}
            >
              <motion.div
                className=" absolute w-full h-[5%] bg-gradient-to-l from-white to-gray-400 bottom-[10%]"
                animate={{
                  transform: linkHover4 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: linkHover4 ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.5,
                  transformOrigin: { duration: 0.0 },
                }}
              ></motion.div>
              <Link
                className=" flex items-center justify-start pl-[1vw] h-full  w-full"
                to={ProjectData[3].link}
                target="_blank"
              >
                RobinFood <ArrowUpRightIcon />
              </Link>
            </motion.div>
          </div>
        </div>
        {/* <section>
          {" "}
          <ProjectEachCard
            scrollYProgress={scrollYProgress}
            cardOffset={[0.058, 0.0945, 0.11, 0.18]}
            ProjectData={ProjectData[0]}
          />
        </section>
        <section>
          <ProjectEachCard
            scrollYProgress={scrollYProgress}
            cardOffset={[0.135, 0.1715, 0.187, 0.257]}
            ProjectData={ProjectData[1]}
          />
        </section>
        <section>
          <ProjectEachCard
            scrollYProgress={scrollYProgress}
            cardOffset={[0.212, 0.2485, 0.264, 0.334]}
            ProjectData={ProjectData[2]}
          />
        </section>
        <section>
          <ProjectEachCard
            scrollYProgress={scrollYProgress}
            cardOffset={[0.289, 0.3255, 0.341, 0.411]}
            ProjectData={ProjectData[3]}
          />
        </section> */}
      </div>
    </motion.section>
  );
});

export default Projects;

// .058 .35

// .122 .045

// 0.0365 0.0155 .07
