import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles/components/about.scss'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
              <section className="about-bannerMain">
                <div className="about-bannerMain-lft">
                  <div className="bannerMain-lft__inner">
                    <h2>
                      <div className="textWrapper">
                        <span className="text">About page</span>
                      </div>
                    </h2>

                    <section id="intro" style={{paddingLeft: '30px'}}>
                      <div class="main-wrapper">
                        <div className="text">
                          <h2 className="heading--uppercase--inline">
                            <span className="split">
                              {/* 여기서부터 네이밍 스타일링  */}
                              <div id="model-wrapper" className="content">
                                <div class="caption item-fade">
                                  <p className="h2--uppercase" data-margin="none" data-subtitle-left="Michelangelo's David">
                                    <span className="line">Hello. I am </span>
                                    <div style={{ fontSize: '40px'}}>Subeen Chloe Jeong</div>
                                    <svg width="140" height="66" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "50px", marginTop: "-90px", }}>
                                      <path d="M4.66 4.442C19.968 3.87 51.687 7.98 59.806 10.15c8.119 2.17 42.004 11.335 42.193 22.216.19 10.881-23.966 21.44-51.095 18.938C23.775 48.802 2.174 36.415 2.001 25.7 1.828 14.986 19.498 5.55 42.092 2.767c22.595-2.785 62.01 7.677 49.853 28.879" stroke="#F3DBC7" stroke-width="3" fill="none" fill-rule="evenodd"/>
                                    </svg>
                                  </p>
                                </div>
                              </div>
                            </span>
                          </h2>
                          <p className="h2--uppercase animation-line" data-margin="none">
                            <div className="split">
                            <div className="line">i am a front-end developer with over a year of experience</div></div>
                            <div className="split">
                              <div className="line" style={{display: 'block', textAlign: 'start', width: '100%'}}>
                                in building and maintaining website, working with React, JavaScript, HTML/CSS to deliver good customer experiences
                              </div>
                            </div>
                            <div className="split">
                              <div className="line">
                                Seeking for new opportunities and challenges that will expand my skill set.
                              </div>
                            </div>
                            <div className="split"><div className="line">Adept at contributing to a highly</div></div>
                            <div className="split"><div className="line">collaborative work environment,</div></div>
                            <div className="split"><div className="line">finding solutions,</div></div>
                            <div className="split"><div className="line">and determining customer satisfaction.</div></div>
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="resumeWrapper">
                  <div className="container">
                    <h2>EXPERIENCE</h2>
                    <p>
                      Rye&Catchers (Seoul, South Korea) [April 2022 -
                      Present]
                    </p>
                    <p>- In Progress with psychology consultation service project (React, TypeScript, hooks, styled-components, redux-toolkit)</p>
                    <p>- Seperated Dialog & alert Components</p>
                    <p>- Gained experience in resolving conflicts with colleagues professionally using gitLab</p>
                    <div style={{paddingTop: '20px'}}></div>
                    <p>
                      Inhandplus (Seoul, South Korea) [November 2022 -
                      January 2022]
                    </p>
                    <p>- Completed admin website project with Merck china, Seoul National University (chart.js, recharts.js, react, styled-component, TypeScript)</p>
                    <p>- Gained experience in resolving conflicts with colleagues professionally using gitLab</p>
                    <p>- Improved ability in debugging to improve website performance and user experience</p>
                  </div>
                  <div className="container">
                    <h2>SKILLS</h2>
                    <p>- Javascript, HTML, CSS/SCSS/SASS</p>
                    <p>- Typescript, React.js</p>
                    <p>- Styled-component</p>
                    <p>- MaterialUI Storybook, bit dev</p>
                    <p>- Vue.js</p>
                    <p>- gitHub, gitLab</p>
                  </div>
                  <div className="container">
                    <h2>EDUCATION</h2>
                    <p>- Chinese and English Languages B.A Shanghai Internationcal Studies University [2014 - 2018]</p>
                    <p>- Front-end eductation bootcamp 'We Code' (south korea ) [May 2020 - August 2020]</p>
                  </div>
                  <div className="container">
                    <h2>LANGUAGES</h2>
                    <p>- Korean</p>
                    <p>- English (intermediate)</p>
                    <p>- Chinese (intermediate)</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default About;
