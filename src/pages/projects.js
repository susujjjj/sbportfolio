import React, { useEffect } from 'react';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Channel from '../assets/channel.png';
import Airbnb from '../assets/airbnb.gif';

gsap.registerPlugin(ScrollTrigger);
const CaseStudies = () => {
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
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="projectLayout">
            <div className="PageLayout">
              <section className="projectBannerMain">
                <h2>
                  <span className="text">Projects</span>
                </h2>
                <div className="title"> Channel Clone Project </div>
                <div className="projectDescription">
                  <div className="imgWrapper">
                    <img className="img" src={Channel} alt="img" />
                  </div>

                  <div className="videoBtnWrapper">
                    <div className="DetailLayoutControl-CTAButtons-49iUa firstBtn">
                      <a
                        className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
                        href="https://www.youtube.com/watch?v=A-BaNR3fjeI&t=3s"
                      >
                        <button className="css-1kopvh6">VIEW VIDEO</button>
                      </a>
                    </div>

                    <div className="DetailLayoutControl-CTAButtons-49iUa">
                      <a
                        className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
                        href="https://github.com/wecode-bootcamp-korea/9-No.4-frontend"
                      >
                        <button className="css-1kopvh6">Project Review</button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="projectBannerMain">
                <div className="projectDescription">
                  <div className="textBox">
                    <div className="title">
                      <h2 className="text">Projects</h2>
                      <p> Air bnb Clone Project </p>
                    </div>
                  </div>
                  <div className="imgWrapper">
                    <img src={Airbnb} className="img" alt="img" />
                  </div>

                  <div className="videoBtnWrapper">
                    <div className="DetailLayoutControl-CTAButtons-49iUa firstBtn">
                      <a
                        className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
                        href="https://www.youtube.com/watch?v=28Q003gHF4Q"
                      >
                        <button className="css-1kopvh6">VIEW VIDEO</button>
                      </a>
                    </div>

                    <div className="DetailLayoutControl-CTAButtons-49iUa">
                      <a
                        className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
                        href="https://www.youtube.com/watch?v=28Q003gHF4Q"
                      >
                        <button className="css-1kopvh6">Project Review</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="intro"></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
