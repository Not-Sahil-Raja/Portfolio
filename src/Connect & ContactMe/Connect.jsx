import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const Connect = () => {
  const [linkedinHover, setlinkedinHover] = useState(false);
  const [githubHover, setgithubHover] = useState(false);
  const [twitterHover, settwitterHover] = useState(false);
  const [emptyHover, setEmptyHover] = useState(false);
  const variants = {
    visible: {
      height: "100%",
    },
    hidden: {
      height: "0%",
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-20%",
  });
  return (
    <div className=" w-full h-[100vh] flex flex-col select-none" ref={ref}>
      <div className="  h-[45%] mt-auto pt-[3vh] flex flex-col items-center justify-center">
        <div className=" text-[5vh] leading-none overflow-hidden font-FixelText font-bold opacity-80 relative">
          <motion.div
            className=" sticky"
            animate={{
              opacity: inView ? 1 : 0.8,
              y: inView ? 0 : 100,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 0.7, 0.2, 1],
              delay: 0.5,
            }}
          >
            CONNECT WITH ME
          </motion.div>
        </div>
        <div className=" text-[20vh] font-semibold font-FixelText overflow-hidden leading-none relative">
          <motion.div
            className=" sticky"
            animate={{
              opacity: inView ? 1 : 0.8,
              y: inView ? 0 : 500,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 0.7, 0.2, 1],
              delay: 0.35,
            }}
          >
            GET IN TOUCH
          </motion.div>
        </div>
      </div>
      <div className="  h-[45%] pb-[10vh] flex">
        <div className=" w-1/2  flex flex-col px-[2vw]">
          <motion.div
            className=" h-1/2 flex items-center text-[10vh] ml-[2vw] overflow-hidden  relative"
            onHoverStart={() => setlinkedinHover(true)}
            onHoverEnd={() => setlinkedinHover(false)}
          >
            <motion.div
              className="  w-full  bg-[#131212] absolute"
              variants={variants}
              animate={linkedinHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className=" relative"
              animate={{
                y: inView ? 0 : 140,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.5 + 0.1,
              }}
            >
              <Link
                to="https://www.linkedin.com/in/mdsahil-raja/"
                className=" flex items-center pl-[2vw] w-full h-full  z-10"
              >
                Linkedin
                <ArrowUpRight className=" text-[50vh]" size={60} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className=" h-1/2 flex items-center text-[10vh] ml-[2vw] overflow-hidden  relative"
            onHoverStart={() => setgithubHover(true)}
            onHoverEnd={() => setgithubHover(false)}
          >
            <motion.div
              className="  w-full  bg-[#251f1f] absolute"
              variants={variants}
              animate={githubHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className=" relative"
              animate={{
                y: inView ? 0 : 140,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.5 + 0.2,
              }}
            >
              <Link
                to="https://github.com/Not-Sahil-Raja/"
                className=" flex items-center pl-[2vw] w-full h-full  z-10"
              >
                Github
                <ArrowUpRight className=" text-[50vh]" size={60} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className=" w-1/2  flex flex-col px-[2vw]">
          <motion.div
            className=" h-1/2 flex items-center text-[10vh] ml-[2vw] overflow-hidden  relative"
            onHoverStart={() => settwitterHover(true)}
            onHoverEnd={() => settwitterHover(false)}
          >
            <motion.div
              className="  w-full  bg-[#3a3737] absolute"
              variants={variants}
              animate={twitterHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className=" relative"
              animate={{
                y: inView ? 0 : 140,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.5 + 0.3,
              }}
            >
              <Link
                to="https://twitter.com/NotSahilRaja"
                className=" flex items-center pl-[2vw] w-full h-full  z-10"
              >
                Twitter
                <ArrowUpRight className=" text-[50vh]" size={60} />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className=" h-1/2 flex items-center text-[10vh] ml-[2vw] overflow-hidden  relative"
            onHoverStart={() => setEmptyHover(true)}
            onHoverEnd={() => setEmptyHover(false)}
          >
            <motion.div
              className="  w-full  bg-[#4b3e34] absolute"
              variants={variants}
              animate={emptyHover ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
            ></motion.div>
            <motion.div
              className=" relative"
              animate={{
                y: inView ? 0 : 200,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.7, 0.2, 1],
                delay: 0.5 + 0.4,
              }}
            >
              <Link
                to="mailto:sahilraja2002@gmail.com"
                className=" flex items-center pl-[2vw] w-full h-full  z-10"
              >
                Email
                <ArrowUpRight className=" text-[50vh]" size={60} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
