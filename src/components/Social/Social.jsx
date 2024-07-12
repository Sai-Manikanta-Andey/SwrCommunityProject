import React from "react";
import "./Social.css";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6"
 
function Social() {
  return (
    <div className="social-wrapper" id="social">
      <div className="social-container paddings innerWidth">
        <div className="social-title">
          <h3 className="component-heading social-title-heading">Social</h3>
          <h3 className="title-social secondaryText">
            These are our social media handles
          </h3>
        </div>
        <div className="social-icons-images-container">
          <div className="all-socials">
            <div className="social-left secondaryText">
              <div className="whatsapp social-icon">
                <div className="react-icon">
                  <FaDiscord fontSize={80} className="icon" />
                </div>
                <a
                  href="https://discord.com/invite/FXnswDq2xm"
                  target="_blank"
                  className="link"
                >
                  Discord <FaLink fontSize={14} />
                </a>
              </div>

              <div className="whatsapp social-icon">
                <div className="react-icon">
                  <FaSquareWhatsapp fontSize={80} className="icon" />
                </div>
                <a
                  href="https://chat.whatsapp.com/KiyXJN78JnJ1nluUtNdmky"
                  target="_blank"
                  className="link"
                >
                  Whatsapp <FaLink fontSize={14} />
                </a>
              </div>
              <div className="whatsapp social-icon">
                <div className="react-icon">
                  <FaInstagramSquare fontSize={80} className="icon" />
                </div>
                <a
                  href="https://www.instagram.com/swr_community/"
                  target="_blank"
                  className="link"
                >
                  Instagram <FaLink fontSize={14} />
                </a>
              </div>
            </div>
            <div className="details-about-dc thirdText">
              You can join with us through above provided links . Your seniors
              and juniors,parallels will be a part of the group, you can
              interact with your respective domain seniors if you have any
              doubts regarding career and subjects for guidance. The group
              consists seniors who are now working in various domains like
              software & hardware.
            </div>
          </div>
          <div className="social-right">
            <div className="image-container">
              <img
                src="/social-min.png"
                alt="social"
                width={500}
                className="social-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
