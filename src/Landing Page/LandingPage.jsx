import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  motion,
  useMotionValueEvent,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import AboutMe from "../About me/AboutMe";
import Homepage from "./Homepage";
import Header from "../Header/Header";
import Projects from "../Projects Page/Projects";
import { NavLink } from "react-router-dom";
import TechStacks from "../TechStack/TechStacks";
import Connect from "../Connect & ContactMe/Connect";
import ThankYou from "../Connect & ContactMe/ThankYou";
import noise from "/noise.svg";

const LandingPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [techTranslateX, setTechTranslateX] = useState("-80%");
  const container = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const techRef = useRef(null);
  const connectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileView(true);
      setTechTranslateX("-140%");
    }
  }, []);

  const tchStcInV = useInView(techRef, { threshold: 0.5 });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const sm2 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const sm3 = useTransform(scrollYProgress, [0.01, 0.12], [1, 0.5]);
  const sm4 = useTransform(scrollYProgress, [0.01, 0.095], [5, 0]);
  const sm5 = useTransform(scrollYProgress, [0.63, 1], ["5%", techTranslateX]);

  const progress = useTransform(scrollYProgress, [0, 1], [0, 3]);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("value: ", latest);
  // });

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1600);
  }, []);

  return (
    <>
      <motion.div className={` relative  select-none  ${isLoading ? "" : ""}`}>
        <Reveal />
        <NavLink to="/">
          <motion.div
            className="fixed px-[1vw] overflow-hidden z-[1001] font-medium  left-[1vw] lg:text-[3vh] text-[2.5vh]  text-[#fcfeff] font-ClashDisplay font-#8E9495 "
            whileHover={{ fontStyle: "italic" }}
            initial={{
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              top: "2vh",
              left: "1vw",
              translateX: "0",
              translateY: "0",
            }}
            transition={{
              duration: 1.8,
              delay: 1.2,
              ease: [0.22, 0.7, 0, 1],
              fontStyle: { duration: 0.2, delay: 0 },
            }}
          >
            <motion.span
              className=" relative top-[0rem] select-none"
              initial={{ top: "3rem" }}
              animate={{ top: "0rem" }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.85, 0, 0.15, 1],
              }}
            >
              Sahil.
            </motion.span>
          </motion.div>
        </NavLink>
        <div ref={container} className=" ">
          <Header
            homeRef={homeRef}
            aboutRef={aboutRef}
            projectRef={projectRef}
            techRef={techRef}
            connectRef={connectRef}
            progress={progress}
          />

          {/* <Homepage ref={homeRef} xval={sm} xval2={sm2} xval3={sm4} /> */}

          <motion.section className="  h-fit relative">
            <section
              className=" h-screen w-[calc(100vw-3px)] sticky top-[0px] z-50"
              style={{
                position: "sticky",
              }}
              ref={homeRef}
            >
              <Homepage
                xval={sm}
                xval2={sm2}
                xval3={sm4}
                scaleV={sm3}
                color={"1f2a47"}
              />
            </section>

            <section ref={projectRef} className=" h-[400vh] relative">
              <Projects />
            </section>
          </motion.section>

          <AboutMe ref={aboutRef} />
          <motion.section
            className="relative text-black h-[300vh] text-5xl"
            ref={techRef}
          >
            <section
              className=" h-screen w-[calc(100vw-3px)] flex flex-col text-white sticky top-[0px] z-50"
              style={{
                position: "sticky",
              }}
              ref={techRef}
            >
              <div className=" h-[15%]  flex items-end text-[8vh] pb-[vh] pl-[1vw] font-FixelText overflow-hidden">
                {" "}
                <motion.span
                  className=" relative max-md:text-[5vh] max-md:pl-[5vw] max-md:pb-[2vh]  "
                  // initial={{ x: 30, opacity: 0.1 }}
                  animate={{
                    x: tchStcInV ? 0 : 50,
                    opacity: tchStcInV ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5,
                  }}
                >
                  TechSatcks
                </motion.span>
              </div>
              <TechStacks sm5={sm5} />
            </section>
          </motion.section>
          <section
            className=" h-[200vh] w-[calc(100vw-3px)] bg-gradient-to-tr from-[#8E9495] to-[#375157] via-[#080F14]  flex flex-col relative"
            ref={connectRef}
            style={{
              // background: "#8E9495",
              background:
                "radial-gradient(circle at top right, #8E9495 0%, #375157 37%, #080F14 81%)",
            }}
          >
            <img
              src={noise}
              alt=""
              className=" w-full h-full  absolute object-cover opacity-[5%]"
            />
            <div className=" absolute w-[calc(100vw-3px)] h-[200vh] overflow-hidden">
              <motion.div
                className=" absolute w-[70vw] left-[80%] opacity-[30%] top-[12vh] aspect-square border-4 rounded-full"
                style={{
                  maskImage: "linear-gradient(transparent 40%, black 100%)",
                }}
                animate={{
                  rotate: [0, 360],
                  x: ["0%", "10%"],
                  transition: {
                    duration: 10,
                    repeat: Infinity,

                    repeatType: "reverse",
                    ease: "linear",
                  },
                }}
              />
              <motion.div
                className=" absolute w-[70vw] left-[85%] opacity-[30%] top-[10vh] aspect-square border-2 rounded-full"
                style={{
                  maskImage: "linear-gradient(transparent 30%, black 100%)",
                }}
                animate={{
                  rotate: [0, 360],
                  x: ["0%", "10%"],
                  transition: {
                    duration: 12,
                    repeat: Infinity,

                    repeatType: "reverse",
                    ease: "linear",
                  },
                }}
              />
            </div>
            <Connect />
            <ThankYou />
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;

{
  /* <div className=" h-[100vh] w-[100vw] overflow-hidden absolute opacity-[.03] ">
          <img src={noise} alt="" />
        </div> */
}
