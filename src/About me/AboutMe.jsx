import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import React, { forwardRef, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import vector1 from "/sign1.png";
import vector2 from "/sign2.png";
import vector3 from "/sign3.png";
import { Link } from "react-router-dom";

const AboutMe = forwardRef(({}, ref) => {
  const [hover1, sethover1] = useState(false);
  const [hover2, sethover2] = useState(false);
  const [hover3, sethover3] = useState(false);
  const [resHover, setresHover] = useState(false);
  const bottomRef = useRef(null);
  const bottomInV = useInView(bottomRef);
  const abtTextRef = useRef(null);
  const abtTextInV = useInView(abtTextRef);
  // console.log(bottomInV);

  return (
    <div
      className="  h-[200vh] relative w-[calc(100vw-3px)]"
      id="About"
      ref={ref}
    >
      <div className=" w-full h-full absolute flex flex-col select-none overflow-hidden">
        <div className=" flex-1 relative ">
          <motion.div
            className=" absolute h-fit left-1/2 top-1/2 lg:w-1/3 w-[95%] font-Geist flex-wrap flex text-[3vh] leading-none flex-col text-center [transform:translate(-50%,-50%)]"
            ref={abtTextRef}
            animate={{
              opacity: abtTextInV ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: [0.42, 0, 0.58, 1],
              delay: 0.2,
            }}
          >
            <span className=" text-[6vh] pb-[3vh] font-Blackbird">
              Hi! I'm Sahil
            </span>
            A full-stack web developer passionate about creating seamless online
            experiences. With expertise in both front-end and back-end
            technologies, I specialize in turning ideas into polished,
            functional websites.
            <br />
            ._.
          </motion.div>
        </div>
        <div className=" flex-1 ">
          <div className=" flex flex-col w-full h-full">
            <div className=" h-3/5"></div>
            <div className=" h-2/5 flex" ref={bottomRef}>
              <div className=" lg:w-3/5 w-full  flex flex-col font-FixelText justify-center pl-[2vw] overflow-hidden  ">
                <motion.div
                  className=" relative lg:text-[5vh] text-[3vh] flex items-center lg:gap-[1vw]  gap-[2vw] overflow-hidden "
                  onMouseEnter={() => sethover1(true)}
                  onMouseLeave={() => sethover1(false)}
                  style={{
                    perspective: "100px",
                    perspectiveOrigin: "right",
                  }}
                  animate={{
                    y: bottomInV ? 0 : 50,
                    opacity: bottomInV ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  <motion.img
                    src={vector1}
                    alt="vector1"
                    className=" lg:w-[4vh] w-[2.5vh]"
                    animate={{ rotate: hover1 ? 360 : 0 }}
                  />
                  <motion.span
                    animate={{
                      rotateX: hover1 ? 90 : 0,
                      y: hover1 ? 200 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 190,
                      damping: 20,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className=" relative  text-[#ffffffaf] h-full"
                  >
                    Living In India.
                  </motion.span>
                  <motion.span
                    animate={{
                      rotateX: hover1 ? 0 : -90,
                      y: hover1 ? 0 : -200,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 190,
                      damping: 20,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className=" absolute left-[6vh] top-0 "
                  >
                    Living In India.
                  </motion.span>
                </motion.div>
                <motion.div
                  className=" relative lg:text-[5vh] text-[3vh] whitespace-nowrap flex items-center gap-[1vw] overflow-hidden "
                  onMouseEnter={() => sethover2(true)}
                  onMouseLeave={() => sethover2(false)}
                  style={{
                    perspective: "100px",
                    perspectiveOrigin: "right",
                  }}
                  animate={{
                    y: bottomInV ? 0 : 50,
                    opacity: bottomInV ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  <motion.img
                    src={vector2}
                    alt="vector2"
                    className=" lg:w-[4vh] w-[2.5vh]"
                    animate={{ rotate: hover2 ? 360 : 0 }}
                  />
                  <motion.span
                    animate={{
                      rotateX: hover2 ? 90 : 0,
                      y: hover2 ? 200 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 190,
                      damping: 20,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className=" relative  text-[#ffffffaf]"
                  >
                    Studying CS Engineering.
                  </motion.span>
                  <motion.span
                    animate={{
                      rotateX: hover2 ? 0 : -90,
                      y: hover2 ? 0 : -200,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 190,
                      damping: 20,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className=" absolute left-[6vh] top-0  whitespace-nowrap"
                  >
                    Currently Studying CS Engineering.
                  </motion.span>
                </motion.div>
                <motion.div
                  className=" relative lg:text-[5vh] text-[3vh] whitespace-nowrap flex items-center gap-[1vw] overflow-hidden "
                  onMouseEnter={() => sethover3(true)}
                  onMouseLeave={() => sethover3(false)}
                  style={{
                    perspective: "100px",
                    perspectiveOrigin: "right",
                  }}
                  animate={{
                    y: bottomInV ? 0 : 50,
                    opacity: bottomInV ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  <motion.img
                    src={vector3}
                    alt="vector3"
                    className=" lg:w-[4vh] w-[2.5vh]"
                    animate={{ rotate: hover3 ? 360 : 0 }}
                  />

                  <motion.span
                    animate={{
                      rotateX: hover3 ? 90 : 0,
                      y: hover3 ? 200 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 190,
                      damping: 20,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className=" relative  text-[#ffffffaf]"
                  >
                    Learning Web Dev & ML.
                  </motion.span>
                  <motion.span
                    animate={{
                      rotateX: hover3 ? 0 : -90,
                      y: hover3 ? 0 : -200,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 190,
                      damping: 20,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className=" absolute left-[6vh] top-0  whitespace-nowrap"
                  >
                    Learning Web Dev & ML.
                  </motion.span>
                </motion.div>
                <Link
                  className="  flex items-center justify-center absolute lg:bottom-[10%] bottom-[2vh] right-0"
                  to="https://drive.google.com/file/d/1gIHebwsb9Bf1h_k8N3FHjM03bNIPaXIT/view?usp=sharing"
                  target="_blank"
                >
                  <motion.div
                    className=" text-[4vh] font-FixelText cursor-pointer relative overflow-hidden"
                    onMouseEnter={() => setresHover(true)}
                    onMouseLeave={() => setresHover(false)}
                  >
                    <motion.span
                      className="flex items-center px-3 gap-[.2vw] relative z-10"
                      animate={{
                        x: resHover ? 12 : 0,
                        y: bottomInV ? 0 : 200,
                      }}
                      transition={{
                        duration: 0.5,
                        type: "tween",
                        ease: [0.42, 0, 0.58, 1],
                        y: { delay: 0.5 },
                      }}
                    >
                      My Resume <ArrowUpRight size="2.5rem" />
                    </motion.span>
                    <motion.div
                      className=" bg-[#effffc] absolute w-full h-[.3rem] bottom-0"
                      animate={{
                        transform: resHover ? "scaleX(1)" : "scaleX(0) ",
                        transformOrigin: resHover ? "left" : ["left", "right"],
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.42, 0, 0.58, 1],
                      }}
                    ></motion.div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/Image.png"
        className=" w-full h-full object-cover"
        alt=""
        style={{
          borderRadius: "2rem 2rem 0rem 0px",
        }}
      />
    </div>
  );
});

export default AboutMe;
