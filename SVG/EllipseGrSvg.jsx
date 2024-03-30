import * as React from "react";
import { motion } from "framer-motion";
const EllipseGrSvg = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="100vw"
    height="100vh"
    fill="none"
    {...props}
    animate={{
      y: [0, -20, 0],
      x: [0, 5, 0],
      scale: [1, 1.01, 1],
      filter: [
        "blur(0px) brightness(1)",
        "blur(1px) brightness(1.1)",
        "blur(0px) brightness(1)",
      ],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 1,
    }}
  >
    <circle
      cx="50%"
      cy="-65%"
      r={props.r}
      stroke="#fff"
      strokeWidth={3}
      strokeOpacity={0.05}
    />
    <defs>
      <linearGradient
        id="a"
        x1={636}
        x2={658.5}
        y1={-274.5}
        y2={454}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} />
      </linearGradient>
    </defs>
  </motion.svg>
);
export default EllipseGrSvg;
