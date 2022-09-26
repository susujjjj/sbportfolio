import React, { useEffect } from 'react';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    t1.from(
      'nav',
      1,
      { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35,
      'Start',
    );
    gsap.from('.content', {
      duration: 3,
      y: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.content-main',
        markers: false,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete reverse reset',
      },
    });
  });

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          {/* about page desgin */}
          <div className="contentLayout">
            <div className="PageLayout">
              <section className="aboutBannerMain">
                <section id="intro">
                  <div className="text">
                    <h2 className="headingUppercaseInline">
                      <span className="split">
                        <div id="model-wrapper" className="content">
                          <div className="caption item-fade">
                            <span className="h2Uppercase">
                              <span className="line">Hello. I am </span>
                              <div style={{ fontSize: '40px' }}>
                                Subeen Chloe Jeong
                              </div>
                              <svg
                                width="140"
                                height="66"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  marginLeft: '50px',
                                  marginTop: '-90px',
                                }}
                              >
                                <path
                                  d="M4.66 4.442C19.968 3.87 51.687 7.98 59.806 10.15c8.119 2.17 42.004 11.335 42.193 22.216.19 10.881-23.966 21.44-51.095 18.938C23.775 48.802 2.174 36.415 2.001 25.7 1.828 14.986 19.498 5.55 42.092 2.767c22.595-2.785 62.01 7.677 49.853 28.879"
                                  stroke="#F3DBC7"
                                  strokeWidth="3"
                                  fill="none"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </span>
                    </h2>
                    <div className="h2Uppercase" data-margin="none">
                      <div className="split">
                        <div className="line">
                          I am a front-end developer with over a year of
                          experience, i love to work with React.
                        </div>
                      </div>
                      <div className="split">
                        <div
                          className="line"
                          style={{
                            display: 'block',
                            textAlign: 'start',
                            width: '100%',
                          }}
                        >
                          in building and maintaining website, working with
                          React, JavaScript, HTML/CSS and i always consider to
                          create and maintain a better code base for
                          reusability.
                        </div>
                      </div>
                      <div className="split">
                        <div className="line">
                          Currently seeking for new opportunities and
                          challenges!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contentBox">
                    <h2>EXPERIENCE</h2>
                    <span>
                      Rye&Catchers (Seoul, South Korea) [April 2022 - July 2022]
                    </span>
                    <p className="descriptionCompany">
                      Rye&Catchers is a Systems Integration company. i worked as
                      part of team of psychology consultation service
                      application. (react, typescript, hooks, styled-components,
                      redux-toolkit, context api, vite, babel, REST, gitlab,
                      swagger, google meet for meeting)
                    </p>
                    <p>
                      - Reduced server traffic and CPU usage using amazon S3,
                      implemented images & files upload, update, removal of
                      duplicate files
                    </p>
                    <p>- Redeveloped page structure with context api</p>
                    <p>
                      - Developed comments CRUD, sending messages & emails to
                      specialist counselor, page UI.
                    </p>
                    <p>
                      - Developed design system and fill out the readme /
                      button, input component (storybook, typescript, react,
                      using OOP with emotion styled-component)
                    </p>
                    <p>
                      - Professional experience with leading team members with
                      the use of Gitlab
                    </p>
                    <div style={{ paddingTop: '20px' }}></div>
                    <p>
                      Inhandplus (Seoul, South Korea) [November 2022 - January
                      2022]
                    </p>
                    <p className="descriptionCompany">
                      InhandPlus is a Korean startup, to solve the medication
                      non-adherence problem, develop medication-use smartwatch
                      and AI-based medication management solution. I mostly
                      developed medication adherence management admin page for
                      Merck China, Seoul University and other major universities
                      in South Korea.
                    </p>
                    <p>
                      Seoul University medication admin website project 2021.08
                      - 2021.12 (Stack: Highcharts, React, recoil,
                      styled-component, typescript, bit.dev, storybook, web
                      pack, babel, REST Collaboration tools: Azure, Zeplin,
                      using airbnb ESlint, Prettier) policy, postman
                    </p>
                    <p>
                      - Gained experience in working with designer & PM
                      intimately
                    </p>
                    <p>
                      - Implemented date picker & date slide picker without
                      library
                    </p>
                    <p>
                      - Developed UI components using Storybook for building a
                      design system and modularization using bit.dev
                    </p>
                    <p>
                      Project Redevelopment 2021.07 - 2021.08 (ver.3.0) (Stack:
                      react, redux thunk, styled-component, typescript, bit.dev,
                      storybook, webpack, babel, REST)
                    </p>
                    <p>
                      - Implemented different UI depending on user's
                      affiliation, added toast popup, debugging and download
                      excel of participant's data
                    </p>
                    <p>
                      - applied https with Nginx when deploy web application
                    </p>
                    <p>
                      - Medication admin website project (react,
                      styled-component, typescript, redux thunk, Recharts)
                    </p>
                    <p>
                      Implemented doughnut, line, scatter chart about
                      participant's information, connected inquiry chatbot using
                      Channel.io
                    </p>
                    <p>
                      Merck China Project 2020.11 - 2021.02 (Internship: Nov
                      2020 - Feb 2021) (Stack: React, javascript, materialUI)
                    </p>
                    <p>Redesigned date picker (with date picker airbnb)</p>
                    <p>
                      Granted an opportunity to implement project A - Z
                      (routing, login, redirection, page development etc.)
                    </p>
                  </div>
                </section>
                <div className="resumeWrapper">
                  <div className="box">
                    <h2>SKILLS</h2>
                    <p>- HTML, CSS/SCSS/SASS</p>
                    <p>- Javascript, Typescript, React.js</p>
                    <p>- Styled-component, Emotion Styled-component</p>
                    <p>- MaterialUI Storybook, bit dev</p>
                    <p>- mongoDB</p>
                    <p>- gitHub, gitLab</p>
                  </div>
                  <div className="box">
                    <h2>EDUCATION</h2>
                    <p>
                      - Chinese and English Languages B.A Shanghai
                      Internationcal Studies University [2014 - 2018]
                    </p>
                    <p>
                      - Front-end eductation bootcamp 'We Code' (south korea )
                      [May 2020 - August 2020]
                    </p>
                  </div>
                  <div className="box">
                    <h2>LANGUAGES</h2>
                    <p>- Korean (native)</p>
                    <p>- English (intermediate)</p>
                    <p>- Chinese (intermediate)</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
