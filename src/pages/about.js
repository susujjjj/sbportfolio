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
          <div className="PageLayout">
            <section className="aboutBannerMain">
              <div className="resumeWrapper">
                <div className="container">
                  <h2>
                    <div className="textWrapper">
                      <span className="text">About page</span>
                    </div>
                  </h2>
                  <section id="intro">
                    <div>
                      <div className="text">
                        <h2 className="headingUppercaseInline">
                          <span className="split">
                            <div id="model-wrapper" className="content">
                              <div className="caption item-fade">
                                <span
                                  className="h2Uppercase"
                                  data-margin="none"
                                  data-subtitle-left="Michelangelo's David"
                                >
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
                        <span className="h2Uppercase" data-margin="none">
                          <div className="split">
                            <div className="line">
                              i am a front-end developer with over a year of
                              experience
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
                              React, JavaScript, HTML/CSS to deliver good
                              customer experiences
                            </div>
                          </div>
                          <div className="split">
                            <div className="line">
                              Seeking for new opportunities and challenges that
                              will expand my skill set.
                            </div>
                          </div>
                          <div className="split">
                            <div className="line">
                              Adept at contributing to a highly
                            </div>
                          </div>
                          <div className="split">
                            <div className="line">
                              collaborative work environment,
                            </div>
                          </div>
                          <div className="split">
                            <div className="line">finding solutions,</div>
                          </div>
                          <div className="split">
                            <div className="line">
                              and determining customer satisfaction.
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="resumeWrapper">
                <div className="container">
                  <h2>EXPERIENCE</h2>
                  <span>
                    Rye&Catchers (Seoul, South Korea) [April 2022 - Present]
                  </span>
                  <span>
                    - In Progress with psychology consultation service project
                    (React, TypeScript, hooks, styled-components, redux-toolkit)
                  </span>
                  <span>- Seperated Dialog & alert Components</span>
                  <p>
                    - Gained experience in resolving conflicts with colleagues
                    professionally using gitLab
                  </p>
                  <div style={{ paddingTop: '20px' }}></div>
                  <p>
                    Inhandplus (Seoul, South Korea) [November 2022 - January
                    2022]
                  </p>
                  <p>
                    - Completed admin website project with Merck china, Seoul
                    National University (chart.js, recharts.js, react,
                    styled-component, TypeScript)
                  </p>
                  <p>
                    - Gained experience in resolving conflicts with colleagues
                    professionally using gitLab
                  </p>
                  <p>
                    - Improved ability in debugging to improve website
                    performance and user experience
                  </p>
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
                  <p>
                    - Chinese and English Languages B.A Shanghai Internationcal
                    Studies University [2014 - 2018]
                  </p>
                  <p>
                    - Front-end eductation bootcamp 'We Code' (south korea )
                    [May 2020 - August 2020]
                  </p>
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
          {/* <h3 className="h3">This is the About page</h3> */}
        </div>
      </div>
    </div>
  );
};

export default About;
