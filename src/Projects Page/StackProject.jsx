import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const StackProject = ({ index, data }) => {
  return (
    <div
      key={index}
      className={` h-screen w-full sticky z-50 flex items-center justify-center text-white `}
      style={{
        top: `calc(${index * 10}px)`,
        background: index === 0 ? "#111010" : "transparent",
      }}
    >
      <div
        className={` w-[65%] flex  bg-[#181717] justify-center rounded-md p-4`}
        style={{
          backgroundColor: `${data.color}`,
        }}
      >
        <video
          src={data.video}
          className=" rounded-md aspect-video w-[70%] object-cover object-center"
          loop
          muted={true}
        />
        <div className=" h-[100%] w-[30%]  flex text-center px-[.5vw] py-[2vh] flex-col justify-evenly font-Geist">
          <div className=" mb-auto text-[3vh] font-semibold">
            {data.projectName}
          </div>
          <div className=" mt-[5vh] text-[1.8vh] opacity-95 mb-[5vh]">
            {data.details}
          </div>
          <Link
            to={data.link}
            target="_blank"
            className=" flex items-start justify-center"
          >
            Visit {data.projectName} <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StackProject;
