import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useTransform,
} from "framer-motion";
import { ArrowUpRightIcon, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectEachCard = ({ scrollYProgress, cardOffset, ProjectData }) => {
  const [vidPlaying, setvidPlaying] = useState(false);
  const xMove = useTransform(scrollYProgress, cardOffset, [
    "120%",
    "-50%",
    "-50%",
    "-210%",
  ]);
  const yMove = useTransform(scrollYProgress, cardOffset, [
    "150%",
    "-50%",
    "-50%",
    "-150%",
  ]);
  const rotate = useTransform(scrollYProgress, cardOffset, [
    "40deg",
    "0deg",
    "0deg",
    "-30deg",
  ]);
  const scaleCard = useTransform(scrollYProgress, cardOffset, [0.5, 1, 1, 0.0]);
  const lines = ProjectData.details.split("\n");
  // console.log(lines);
  const textref = useRef(null);
  const textInV = useInView(textref, {
    threshold: 0.5,
    margin: "-50%",
  });
  const [linkHover, setlinkHover] = useState(false);
  const videoHandle = () => {
    if (vidPlaying) {
      textref.current.pause();
    } else {
      textref.current.play();
    }
    setvidPlaying(!vidPlaying);
  };
  useEffect(() => {
    if (textInV) {
      textref.current.pause();
      setvidPlaying(false);
    }
  }, [textInV]);
  return (
    <motion.div
      className="  rounded-md  absolute max-md:w-[90%] select-none top-1/2 left-1/2 [transform:translate(50%,-50%)]"
      style={{
        transform: `translate(${xMove}, ${yMove}) rotate(${rotate}) `,
        x: xMove,
        y: yMove,
        rotateZ: rotate,
        scale: scaleCard,
      }}
      transition={{
        type: "tween",
        duration: 1.5,
        ease: [0.22, 0.7, 0, 1],
      }}
    >
      <div
        className=" absolute h-full  bg-blend-lighten aspect-video"
        style={{
          background: `linear-gradient(180deg, #00000085 -50%, transparent 100%)`,
        }}
      ></div>
      <div
        className=" absolute h-full  bg-blend-lighten aspect-video"
        style={{
          background: `linear-gradient(0deg, #00000085 -50%, transparent 100%)`,
        }}
      ></div>
      <video
        src={ProjectData.video}
        className=" rounded-md aspect-video lg:w-[90%]   object-cover object-center"
        ref={textref}
        loop
        muted={true}
      />
      <motion.div
        className=" bg-[#0000003a] absolute  backdrop-blur-md cursor-pointer z-40 top-[50%] left-[50%] [transform:translate(-100%,-30%)]  rounded-full p-[1vh] "
        onClick={videoHandle}
        animate={{
          transform: vidPlaying
            ? "translate(-22vw,300%) "
            : "translate(-100%,-30%) ",
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.22, 0.7, 0, 1],
        }}
      >
        {vidPlaying ? <Pause size={30} /> : <Play size={30} />}
      </motion.div>

      <Link
        className=" absolute top-[-5%] left-[50%] lg:[transform:translate(-60%,-30%)] lg:text-[7vh] [transform:translate(-50%,-30%)] text-[4.5vh] font-FixelText font-medium overflow-hidden  "
        onMouseEnter={() => setlinkHover(true)}
        onMouseLeave={() => setlinkHover(false)}
        to={ProjectData.link}
        target="_blank"
      >
        <div
          className=" relative w-full  h-full"
          style={{
            perspective: "190px",
            perspectiveOrigin: "top",
          }}
        >
          <motion.div
            className=" z-20 relative px-[1vw] flex gap-[.3vh] items-center justify-center  whitespace-nowrap"
            animate={{
              rotateX: textInV ? "0deg" : "90deg",
              y: textInV ? "0%" : "50%",
              opacity: textInV ? 1 : 0,
              scale: textInV ? 1 : 0.8,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.22, 0.7, 0, 1],
              delay: 0.3,
            }}
          >
            {ProjectData.projectName}
            <motion.div
              animate={{
                rotate: linkHover ? "45deg" : "0deg",
              }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: [0.22, 0.7, 0, 1],
              }}
              layout
            >
              <ArrowUpRightIcon size={50} />
            </motion.div>
          </motion.div>
        </div>
      </Link>
      <div className=" absolute lg:bottom-[-10%] left-[50%] [transform:translate(-50%,-0%)]  lg:text-[2vh] text-[1.5vh]  font-FixelText leading-none flex flex-col gap-1 whitespace-nowrap items-center justify-center">
        {
          lines.map((line, index) => (
            <div
              key={index}
              className="w-full relative overflow-hidden text-center"
            >
              <span className=" opacity-[0] whitespace-nowrap px-1 py-2">
                {line}
              </span>
              <motion.div
                className=" absolute whitespace-nowrap flex flex-col top-[0%] w-full   items-center justify-center text-center "
                animate={{
                  y: textInV ? "0%" : "120%",
                  x: textInV ? "0%" : "-3%",
                }}
                transition={{
                  type: "tween",
                  duration: 1,
                  ease: [0.22, 0.7, 0, 1],
                  delay: index * 0.1,
                }}
              >
                {line}
              </motion.div>
            </div>
          ))
          // ProjectData.details
        }
      </div>
    </motion.div>
  );
};

export default ProjectEachCard;
