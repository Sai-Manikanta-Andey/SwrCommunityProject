import React from 'react'
import "./About.css"
import { VscDebugBreakpointLog } from "react-icons/vsc";

function About() {
  return (
    <div className="about-wrapper" id="about">
      <div className="about-container paddings innerWidth">
        <div className="about-title">
          <h3 className="component-heading social-title-heading">About</h3>
        </div>
        <div className="flex">
          <div className="left">
            <div className="image-container">
              <img
                src="./Aboutus.png"
                alt="about"
                className="homepic"
                width={500}
              />
            </div>
          </div>
          <div className="right">
            <p className="about-para thirdText">
              We are a group of students when we were in college there was no
              proper guidance from our seniors, so now we want to be that senior
              when my junior needs.This is why it all started, to help juniors
              to guide them in excelling their career.
            </p>
            <div className="attention thirdText">
              <h3 className="secondaryText">Attention</h3>
              <div>
                <VscDebugBreakpointLog fontSize={10} /> Be respectful to
                everyone .
              </div>
              <div>
                <VscDebugBreakpointLog fontSize={10} /> Only join if you want to
                grow.
              </div>
              <div>
                <VscDebugBreakpointLog fontSize={10} /> Interact and help each
                other.
              </div>
              <div></div>
              <div>
                <VscDebugBreakpointLog fontSize={10} /> All the best.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About