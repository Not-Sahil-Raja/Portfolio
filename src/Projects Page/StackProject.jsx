import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Pause, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const StackProject = ({ index, data }) => {
  const [vidPlaying, setvidPlaying] = useState(false);
  const [videoHover, setvideoHover] = useState(false);
  const videoRef = useRef(null);
  const videoHandle = () => {
    if (vidPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setvidPlaying(!vidPlaying);
  };

  return (
    <div
      key={index}
      className={` h-screen w-[100%] sticky z-50 flex items-center  justify-center text-white `}
      style={{
        top: `calc(${index * 10}px)`,
        background: index === 0 ? "#111010" : "transparent",
      }}
    >
      {index == 0 && (
        <div className=" text-[4.5vh] font-Geist opacity-85 absolute top-[10vh] z-[250]">
          - Projects -
        </div>
      )}
      <div
        className={` lg:w-[65%] w-[80%] flex relative  justify-center max-md:flex-col rounded-md p-1 lg:p-4`}
        style={{
          backgroundColor: `${data.color}`,
        }}
      >
        <motion.div
          className=" bg-[#0000003a]  absolute border backdrop-blur-md cursor-pointer z-40 lg:bottom-[7%] left-[3%] max-lg:top-[24%]  rounded-full p-[1vh] "
          onClick={videoHandle}
        >
          {vidPlaying ? <Pause size={25} /> : <Play size={25} />}
        </motion.div>
        <video
          src={data.video}
          className=" rounded-md aspect-video lg:w-[70%] object-cover object-center"
          loop
          ref={videoRef}
          onMouseEnter={() => setvideoHover(true)}
          onMouseLeave={() => setvideoHover(false)}
          muted={true}
          // controls={true}
        />
        <div className=" h-[100%] lg:w-[30%]  flex text-center px-[.5vw] py-[2vh] flex-col justify-evenly font-Geist">
          <div className=" mb-auto text-[3vh] font-semibold border-b pb-[1vh]">
            {data.projectName}
          </div>
          <div className=" mt-[5vh] text-[1.8vh] opacity-85 mb-[5vh] overflow-hidden text-ellipsis text-wrap">
            {data.details}
          </div>
          <div className=" flex items-start justify-center">
            <motion.div className=" bg-[#222121] px-[1vw] py-[.5vh] rounded-sm">
              <Link
                to={data.link}
                target="_blank"
                className=" flex items-center justify-center gap-1 font-medium"
              >
                Visit {data.projectName} <ArrowUpRight size={20} />{" "}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackProject;
