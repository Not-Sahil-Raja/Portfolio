import React, { forwardRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
} from "framer-motion";

const Header = ({
  homeRef,
  aboutRef,
  projectRef,
  techRef,
  connectRef,
  progress,
}) => {
  const [pageActive, setPageActive] = useState(1);
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [projectHover, setProjectHover] = useState(false);
  const [techHover, setTechHover] = useState(false);
  const [connectHover, setConnectHover] = useState(false);

  const homeinView = useInView(homeRef, {});
  const projectinView = useInView(projectRef, {
    threshold: 0.5,
  });
  const aboutinView = useInView(aboutRef, {
    threshold: 0.4,
    margin: "-50%",
  });
  const techinView = useInView(techRef, { threshold: 0.5 });
  const connectinView = useInView(connectRef, { threshold: 0.5 });

  useEffect(() => {
    if (homeinView) {
      setPageActive(1);
    }
    if (projectinView) {
      setPageActive(2);
    }
    if (aboutinView) {
      setPageActive(3);
    }
    if (techinView) {
      setPageActive(4);
    }
    if (connectinView) {
      setPageActive(5);
    }
  }, [homeinView, aboutinView, projectinView, techinView, connectinView]);
  // console.log("pageActive: ", pageActive);
  return (
    <motion.div
      className="2xl:h-12 md:h-10 text-center font-FixelText text-[2vh]  px-[2vw] rounded-xl fixed left-1/2 top-[5vh] [transform:translate(-50%,-50%)]  z-[500] "
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <AnimatePresence>
        <div className=" relative w-full h-full ">
          <div className="w-full h-full flex items-center justify-center">
            <button
              className="ml-4 relative "
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              style={{
                perspective: "200px",
                perspectiveOrigin: "bottom",
              }}
              onMouseEnter={() => {
                setHomeHover(true);
              }}
              onMouseLeave={() => {
                setHomeHover(false);
              }}
            >
              <motion.div
                className="  h-[6.5%] w-full bg-white opacity-75 absolute bottom-0   "
                animate={{
                  transform: homeHover ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: homeHover ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              ></motion.div>
              <motion.span
                className=" opacity-100 absolute whitespace-nowrap "
                animate={{
                  y: pageActive == 1 ? 0 : -200,
                  rotateZ: pageActive == 1 ? 0 : 90,
                  scale: pageActive == 1 ? 1 : 0.2,
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
                style={{
                  perspective: "200px",
                  perspectiveOrigin: "bottom",
                }}
              >
                ( Home )
              </motion.span>
              <span className=" opacity-40 absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)] whitespace-nowrap">
                {" "}
                Home{" "}
              </span>

              <span className=" opacity-0 font-bold whitespace-nowrap">
                ( Home )
              </span>
            </button>
            <button
              className="ml-4   overflow-hidden"
              onClick={() => {
                window.scrollTo({
                  top: projectRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
              style={{
                perspective: "200px",
                perspectiveOrigin: "bottom",
              }}
              onMouseEnter={() => {
                setProjectHover(true);
              }}
              onMouseLeave={() => {
                setProjectHover(false);
              }}
            >
              <motion.div
                className="  h-[6.5%] w-full bg-white opacity-75 absolute bottom-0   "
                animate={{
                  transform: projectHover ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: projectHover ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              ></motion.div>
              <motion.span
                className=" opacity-100 absolute whitespace-nowrap "
                animate={{
                  y: pageActive == 2 ? 0 : -200,
                  rotateZ: pageActive == 2 ? 0 : 90,
                  scale: pageActive == 2 ? 1 : 0.2,
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
                style={{
                  perspective: "200px",
                  perspectiveOrigin: "bottom",
                }}
              >
                ( Projects )
              </motion.span>
              <span className=" opacity-40 absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)] whitespace-nowrap">
                {" "}
                Projects{" "}
              </span>

              <span className=" opacity-0 font-bold whitespace-nowrap">
                ( Projects )
              </span>
            </button>
            <button
              className=" ml-4  overflow-hidden"
              onClick={() => {
                window.scrollTo({
                  top: aboutRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
              style={{
                perspective: "200px",
                perspectiveOrigin: "bottom",
              }}
              onMouseEnter={() => {
                setAboutHover(true);
              }}
              onMouseLeave={() => {
                setAboutHover(false);
              }}
            >
              <motion.div
                className="  h-[6.5%] w-full bg-white opacity-75 absolute bottom-0   "
                animate={{
                  transform: aboutHover ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: aboutHover ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              ></motion.div>
              <motion.span
                className=" opacity-100 absolute whitespace-nowrap "
                animate={{
                  y: pageActive == 3 ? 0 : 200,
                  rotateZ: pageActive == 3 ? 0 : 90,
                  scale: pageActive == 3 ? 1 : 0.2,
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              >
                ( About Me )
              </motion.span>
              <span className=" opacity-40 absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)] whitespace-nowrap">
                {" "}
                About Me{" "}
              </span>

              <span className=" opacity-0 font-bold whitespace-nowrap">
                ( About Me )
              </span>
            </button>
            <button
              className="ml-4   overflow-hidden"
              style={{
                perspective: "200px",
                perspectiveOrigin: "bottom",
              }}
              onClick={() => {
                window.scrollTo({
                  top: techRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
              onMouseEnter={() => {
                setTechHover(true);
              }}
              onMouseLeave={() => {
                setTechHover(false);
              }}
            >
              <motion.div
                className="  h-[6.5%] w-full bg-white opacity-75 absolute bottom-0   "
                animate={{
                  transform: techHover ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: techHover ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              ></motion.div>
              <motion.span
                className=" opacity-100 absolute "
                animate={{
                  y: pageActive == 4 ? 0 : -200,
                  rotateZ: pageActive == 4 ? 0 : 90,
                  scale: pageActive == 4 ? 1 : 0.2,
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              >
                ( TechStacks )
              </motion.span>
              <span className=" opacity-40 absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)]">
                {" "}
                TechStacks{" "}
              </span>

              <span className=" opacity-0 font-bold">( TechStacks )</span>
            </button>
            <button
              className="ml-4   overflow-hidden"
              onClick={() => {
                window.scrollTo({
                  top: connectRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
              style={{
                perspective: "200px",
                perspectiveOrigin: "bottom",
              }}
              onMouseEnter={() => {
                setConnectHover(true);
              }}
              onMouseLeave={() => {
                setConnectHover(false);
              }}
            >
              <motion.div
                className="  h-[6.5%] w-full bg-white opacity-75 absolute bottom-0   "
                animate={{
                  transform: connectHover ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: connectHover ? "left" : ["left", "right"],
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              ></motion.div>
              <motion.span
                className=" opacity-100 absolute "
                animate={{
                  y: pageActive == 5 ? 0 : 200,
                  rotateZ: pageActive == 5 ? 0 : 90,
                  scale: pageActive == 5 ? 1 : 0.2,
                }}
                transition={{
                  duration: 0.35,
                  type: "tween",
                  ease: [0.87, 0, 0.13, 1],
                }}
              >
                ( Contacts )
              </motion.span>
              <span className=" opacity-40 absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)]">
                {" "}
                Contacts{" "}
              </span>

              <span className=" opacity-0 font-bold">( Contacts )</span>
            </button>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
