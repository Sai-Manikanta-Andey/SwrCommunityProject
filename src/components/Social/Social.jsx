import React from "react";
import "./Social.css";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

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
                  Discord <FaLink fontSize={18} />
                </a>
              </div>

              <div className="whatsapp social-icon">
                <div className="react-icon">
                  <BsTelegram fontSize={80} className="icon" />
                </div>
                <a
                  href="https://t.me/+EpZl1pGlhl81MTA1"
                  target="_blank"
                  className="link"
                >
                  Telegram <FaLink fontSize={18} />
                </a>
              </div>
              <div className="whatsapp social-icon">
                <div className="react-icon">
                  <FaInstagramSquare fontSize={80} className="icon" />
                </div>
                <a href="https://www.instagram.com/swr_community/" target="_blank" >
                  Instagram <FaLink fontSize={18} />
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
                className="homepic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
