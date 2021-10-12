import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/components/approach.scss";

const Approach = () => {
    let t1 = new TimelineLite({ delay: 0.3 });
    useEffect(() => {
      t1.from(
        ".bannerMain-rgt",
        3,
        { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        "Start"
      );
      t1.staggerFrom(
        ".text",
        1,
        { y: 30, ease: Power3.easeOut, opacity: 0 },
        0.15,
        "Start"
      )
        .from(
          ".btn-primary",
          1,
          { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.4 },
          0.35
        )
        .from(
          ".paragraphAnimation",
          1,
          { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
          0.35
        )
        .from(
          "nav",
          1,
          { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
          0.35,
          "Start"
        );
      gsap.from(".content", {
        duration: 3,
        y: "100",
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: ".content-main",
          markers: false,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "restart complete reverse reset",
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    });
  

  return (
    <div className="page">
      <div className="aboutcontainer">
        <div className="row">
          <div className="projectpageLayout">
            <section className="contact-bannerMain">
              <div className="about-bannerMain-lft">
                <h2 className="textWrapper">
                    <span className="text">About page</span>
                </h2>
                <div className="aboutme-intro">
                  <p className="paragraphAnimation">
                    <h3>
                      <h3>This is the approach page</h3>
                      <p>EMAIL chloejjjj@naver.com</p>
                      <p>PHONE 010 5637 6381</p>
                      <p>BLOG velog.io/@rhftnqls</p>
                      <p>GITHUB github.com/susujjjj</p>
                    </h3>
                  </p>
                </div>
              </div>
              <div className="textWrapper2">
                <div className="container1"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
