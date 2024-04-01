import { ArrowUp } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ThankYou = () => {
  const [arrowHover, setarrowHover] = useState(false);
  const [position, setposition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, top, left } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setposition({ x, y });
  };
  const mouseLeave = () => {
    setposition({ x: 0, y: 0 });
    setarrowHover(false);
  };
  const { x, y } = position;
  return (
    <div className="  w-full select-none h-[100vh] flex items-center font-Blackbird justify-center relative">
      <div className=" flex flex-col text-center">
        <motion.span
          className=" lg:text-[20vh] text-[5vh] leading-none whitespace-nowrap"
          initial={{
            opacity: 0,
            rotateX: "30deg",
            y: 20,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            rotateX: "0deg",
            y: 0,
            x: 0,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Thank You.
        </motion.span>
        <motion.span
          className=" text-[5vh]"
          initial={{
            opacity: 0,
            rotateX: "30deg",
            y: 20,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            rotateX: "0deg",
            y: 0,
            x: 0,
          }}
          transition={{
            delay: 0.625,
          }}
        >
          Have a great day
        </motion.span>
        {/*Cpyright*/}
        <div className=" text-[2vh] mt-[5vh] absolute bottom-[2%] right-[5%]">
          <span>© 2024 Sahil Raja</span>
        </div>
        <div className=" text-[2vh] mt-[5vh]  rounded-full absolute bottom-[10%] left-[8%]">
          <motion.div
            className=" w-[5rem] h-[5rem] rounded-full cursor-pointer overflow-hidden z-30 bg-[#e7e7a8] flex relative"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            ref={ref}
            onMouseEnter={() => setarrowHover(true)}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseMove}
            animate={{
              x,
              y,
              scale: arrowHover ? 0.9 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
          >
            <ArrowUp className=" m-auto text-black opacity-0" size={40} />
            <motion.div
              className=" flex items-center justify-center absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] "
              animate={{
                transform: arrowHover
                  ? "translate(-50%,-250%)"
                  : "translate(-50%,-50%)",
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 0.7, 0, 1],
              }}
            >
              <ArrowUp className="text-black " size={40} />
            </motion.div>
            <motion.div
              className=" flex items-center justify-center absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] "
              animate={{
                transform: arrowHover
                  ? "translate(-50%,-50%)"
                  : "translate(-50%,250%)",
              }}
              transition={{
                duration: 0.5,
                delay: 0.03,
                ease: [0.22, 0.7, 0, 1],
              }}
            >
              <ArrowUp className="text-black " size={40} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
