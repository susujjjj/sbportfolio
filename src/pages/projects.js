import React, { useEffect } from 'react';
import '../styles/components/project.scss';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Channel from '../assets/channel.png';
import Airbnb from '../assets/airbnb.gif';
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
      '.bannerMain-rgt',
      3,
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      'Start',
    );
    t1.staggerFrom(
      '.text',
      1,
      { y: 30, ease: Power3.easeOut, opacity: 0 },
      0.15,
      'Start',
    )
      .from(
        '.btn-primary',
        1,
        { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.4 },
        0.35,
      )
      .from(
        '.paragraphAnimation',
        1,
        { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        0.35,
      )
      .from(
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
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });

  return (
    <>
      <div className="page">
        <div className="row">
          <div className="projectPageLayout">
            <section className="projectBannerMain">
              <div className="resumeWrapper">
                <h2>
                  <div className="textWrapper">
                    <span className="text">Project page</span>
                  </div>
                </h2>
                <section id="intro">
                  <div>
                    <div className="text">
                      <h2 className="headingUppercaseInline">
                        <span className="split">
                          <div id="model-wrapper" className="content">
                            <div class="caption item-fade">
                              <p
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
                                    stroke-width="3"
                                    fill="none"
                                    fill-rule="evenodd"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </h2>
                      <p className="h2Uppercase" data-margin="none">
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
                            React, JavaScript, HTML/CSS to deliver good customer
                            experiences
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
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              {/* <div className="bannerMainWrapper">
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
              </div> */}
            </section>
            {/* <section className="projectBannerMain">
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
            </section> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
