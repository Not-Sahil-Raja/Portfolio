import React from "react";
import { motion } from "framer-motion";
const Stacks = ["React Js", "Tailwind Css", "JavaScript", "Redux Toolkit"];
const AllTechStacks = [
  {
    name: "Front end Technologies",
    stacks: ["React Js", "Tailwind Css", "JavaScript", "Redux Toolkit"],
    details:
      "creating functional and optimized website with these techStacks. ",
  },
  {
    name: "Back end Technologies",
    stacks: ["Express Js", "Node Js", "Flask", "Mongo DB"],
    details: "creating APIs , Server & Databases with all of these. ",
  },
  {
    name: "Programming Languages",
    stacks: ["JavaScript", "C++", "Python"],
    details: "writing optimized code with these languages. ",
  },
  {
    name: "Design Tools",
    stacks: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    details: "creating wireframes, mockups and designs with these tools. ",
  },
];

const TechStacks = ({ sm5 }) => {
  return (
    <div className=" h-[80%] select-none bg-gradient-to-b from-[#161616] to-[#111010] relative overflow-hidden border-t">
      <div
        className=" absolute h-full lg:w-[35%] w-[0%] bg-gradient-to-r backdrop-blur-md from-[#00000000] to-[#02020269]  z-20 right-0"
        style={{
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      ></div>
      <div
        className=" absolute h-full  lg:w-[20%] w-[0%]  bg-gradient-to-r backdrop-blur-md to-[#00000000] from-[#02020288]  z-20 left-0"
        style={{
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        }}
      ></div>
      <motion.div
        className=" h-full w-fit flex brightness-50 opacity-0"
        initial={{
          x: "200%",
        }}
        style={{
          x: sm5,
        }}
        whileInView={{
          filter: "brightness(100%)",
          opacity: 1,
          transition: { duration: 0.5, ease: [0.22, 0.7, 0.2, 1] },
        }}
      >
        {AllTechStacks.map((item, index) => (
          <motion.div
            className=" h-full lg:w-[35vw] w-[80vw] border-x border-b  px-[1.5vw] py-[2vh] flex flex-col font-FixelText"
            style={{
              background:
                "radial-gradient(143.86% 143.86% at 50% 180.52%, #2E454A 0%, #161616 100%)",
            }}
            key={index}
          >
            <div className=" pt-[3vh] h-[70%] flex flex-col lg:text-[3.2vh] text-[2vh]">
              {item.stacks.map((item, index) => (
                <motion.div
                  className=" w-full py-[.5vh] border-b mb-[2vh] relative"
                  key={index}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2, ease: [0.22, 0.7, 0.2, 1] },
                  }}
                >
                  <motion.div className=" overflow-hidden font-Geist">
                    <motion.span
                      className=" relative"
                      animate={{
                        y: -10,
                      }}
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="  h-[30%] flex flex-col justify-center font-Geist">
              <span className="lg:text-[3.6vh] text-[2.5vh] pb-[1vh]">
                {item.name}
              </span>
              <span className=" text-wrap lg:text-[3vh] text-[2vh] leading-none">
                {item.details}{" "}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStacks;
/* Rectangle 19 */

// box-sizing: border-box;

// position: absolute;
// width: 3716px;
// height: 937px;
// left: 159px;
// top: 166px;

// background:  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
// border: 1px solid #FFFFFF;
