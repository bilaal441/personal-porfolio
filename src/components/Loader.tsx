// import Logo from "../icons/logo"
import styled from "styled-components"
import { mounted } from "../../interface"
import { useState, useEffect, Fragment } from "react"
// credit https://github.com/bchiang7/v4/blob/main/src/components/loader.js
import { Helmet } from "react-helmet"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  finishLoading: () => void
  isLoading: boolean
}

const transitionsvg = {
  duration: 1,
  ease: "easeInOut",
}
const svgPathHidden = {
  opacity: 0,
  pathLength: 0,
  scale: 0.5,
}

const svgPathVisible = {
  opacity: 1,
  pathLength: 1,
  scale: 1,
}
const loarderVarrients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const svgVarrients = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
}
const PathVarrients1 = {
  hidden: svgPathHidden,
  visible: {
    ...svgPathVisible,
    transition: { ...transitionsvg, delay: 0.4 },
  },
}
const PathVarrients2 = {
  hidden: svgPathHidden,
  visible: {
    ...svgPathVisible,
    transition: { ...transitionsvg, delay: 1.2 },
    fill: "#7FDEFF",
  },
}

const StyledLoader = styled(motion.div)`
  ${({
    theme: {
      mixin: { flexCenter },
    },
  }) => flexCenter}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-dark);
  z-index: 99;
  .logo-wrapper {
    width: max-content;
    max-width: 5rem;
    transition: var(--transition);
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }
  }
`
const Loader = ({ finishLoading, isLoading }: Props) => {
  return (
    <StyledLoader
      initial="hidden"
      animate="visible"
      variants={loarderVarrients}
      exit={{
        opacity: 0,

        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <motion.div className="logo-wrapper">
        <motion.svg
          width="118"
          height="91"
          viewBox="0 0 118 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          variants={svgVarrients}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,

              duration: 1,
              ease: "easeInOut",
            },
          }}
          onAnimationComplete={finishLoading}
        >
          <motion.path
            d="M58.6083 2.16672C58.8586 2.0602 59.1414 2.0602 59.3917 2.16672L109.487 23.491C109.856 23.6481 110.095 24.0102 110.095 24.4112V66.5888C110.095 66.9898 109.856 67.3519 109.487 67.509L59.3917 88.8333C59.1414 88.9398 58.8586 88.9398 58.6083 88.8333L8.51284 67.509C8.14395 67.3519 7.9045 66.9898 7.9045 66.5888V24.4112C7.9045 24.0102 8.14395 23.6481 8.51284 23.491L58.6083 2.16672Z"
            fill="none"
            stroke="#7FDEFF"
            strokeWidth="4"
            variants={PathVarrients1}
            key={"path1"}
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          />
          <motion.path
            d="M67.7765 44.8974C71.9661 46.0423 75 49.4772 75 53.3941C75 60.3241 69.2212 64 59.9752 64H43V27H58.5305C67.7765 27 73.5553 30.4349 73.5553 37.0635C73.5553 41.0407 71.0271 43.9332 67.7765 44.8974ZM50.2957 42.5472H58.4582C63.5869 42.5472 66.3318 40.9202 66.3318 37.4251C66.3318 33.93 63.5869 32.4235 58.4582 32.4235H50.2957V42.5472ZM50.2957 47.7296V58.5765H59.8307C64.8871 58.5765 67.6321 56.4674 67.6321 53.1531C67.6321 49.7785 64.8871 47.7296 59.8307 47.7296H50.2957Z"
            variants={PathVarrients2}
            key={"path2"}
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </StyledLoader>
  )
}

export default Loader
