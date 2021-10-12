import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/components/project.scss'
import { gsap, TimelineLite, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        <div className="container">
          <div className="row">
            <div className="projectpageLayout">
              <section className="bannerMain">
                <div className="bannerMain-lft">
                  <div className="bannerMain-lft__inner">
                    <h2>
                      <div className="textWrapper">
                        <span className="text">My</span>
                      </div>
                      <div className="textWrapper">
                        <span className="text">Projects</span>
                      </div>
                    </h2>
                    <p className="paragraphAnimation">
                      We provide seemeless integration with <br /> multiple
                      devices so that you can take <br /> notes even better.
                    </p>
                  </div>
                  <button className="btn-primary">request access</button>
                </div>
                <div className="bannerMain-rgt"></div>
              </section>
              <div className="content">
                <div className="container1">
                  {/* <main className="content-main"> */}
                    {panels.map(({ title, subtitle }) => (
                      <div key={panels.index}>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                      </div>
                    ))}
                  {/* </main> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CaseStudies;
