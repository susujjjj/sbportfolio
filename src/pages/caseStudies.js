import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/components/project.scss'
import { gsap, TimelineLite, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Channel from '../assets/channel.png'
import Airbnb from "../assets/airbnb.gif";
gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: 'Architecto aliquam',
    subtitle:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.',
  },
  {
    title: 'Ceritatis placeat',
    subtitle:
      'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?',
  },
  {
    title: 'Vitae voluptates',
    subtitle:
      'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.',
  },
];


const CaseStudies = () => {
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
    <>
      <div className="page">
        <div className="aboutcontainer">
          <div className="row">
            <div className="projectpageLayout">
              <section className="projectBannerMain">
                {/* <div className="about-bannerMain-lft"> */}
                <div className="bannerMainWrapper">
                  <h2>
                    <span className="text">Projects</span>
                  </h2>
                  <div className="title"> 샤넬 프로젝트 </div>

                  <div className="projectDescription">
                    <div className="imgWrapper">
                      <img src={Channel} alt="img" />
                    </div>

                    <div className="videoBtnWrapper">
                      <div className="buttonBox">
                        <button type="button" id="button" className="button">
                          <a
                            href="https://www.youtube.com/watch?v=A-BaNR3fjeI&t=3s"
                            target="_blank"
                          >
                            <div className="btnWrapper">
                              <div id="signinbox">VIEW VIDEO</div>
                            </div>
                          </a>
                        </button>
                        <button type="button" id="button" className="button">
                          <a
                            href="https://github.com/wecode-bootcamp-korea/9-No.4-frontend"
                            target="_blank"
                          >
                            <div className="btnWrapper">
                              <div id="signinbox">VIEW PROJECT</div>
                            </div>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/** */}
              <section className="projectBannerMain2">
                <div className="bannerMainWrapper2">
                  <div className="projectDescription">
                    <div className="textBox">
                      <div className="title">
                        <h2 className="text">Projects</h2>
                        <p>에어비앤비 프로젝트 </p>
                      </div>
                    </div>
                    <div className="imgWrapper">
                      <img src={Airbnb} alt="img" />
                    </div>

                    <div className="videoBtnWrapper">
                      <div className="buttonBox">
                        <button type="button" id="button" className="button">
                          <a
                            href="https://www.youtube.com/watch?v=28Q003gHF4Q"
                            target="_blank"
                          >
                            <div className="btnWrapper">
                              <div id="signinbox"> VIEW VIDEO</div>
                            </div>
                          </a>
                        </button>
                        <button type="button" id="button" className="button">
                          <a
                            href="https://www.youtube.com/watch?v=28Q003gHF4Q"
                            target="_blank"
                          >
                            <div className="btnWrapper">
                              <div id="signinbox">VIEW PROJECT</div>
                            </div>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="intro"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
