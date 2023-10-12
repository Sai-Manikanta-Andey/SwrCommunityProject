import React from 'react'
import './Home.css'
import {VscDebugBreakpointLog} from "react-icons/vsc"
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="home-wrapper ">
      <div className="home-container paddings maxWidth">
        <motion.div
          className="left"
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="title">
            <h1 className="welcome-title primaryText">
              Hey There
              <span className="highlight">Welcome</span> !
            </h1>
          </div>
          <div className="intro">
            <h3 className="intro-title secondaryText">
              AS A SENIOR & A FRIEND
            </h3>
            <div className="points">
              <p className="firstPoint alignCenter thirdText">
                <VscDebugBreakpointLog fontSize={10} /> We will be someone who
                you can look upto.
              </p>
              <p className="secondPoint alignCenter thirdText">
                <VscDebugBreakpointLog fontSize={10} /> We will be someone who
                you can take advice from.
              </p>
              <p className="ThirdPoint alignCenter thirdText">
                <VscDebugBreakpointLog fontSize={10} /> It's a new dawn let us
                help you.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="right"
          initial={{ y: "-2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="image-container">
            <img
              src="./pic.png"
              alt="homepic"
              width={500}
              className="homepic"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home