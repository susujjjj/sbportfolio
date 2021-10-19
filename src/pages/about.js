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
      {/* // <div className="page">
    //   <div className="container">
    //     <div className="row">
    //       <h3>This is the About page</h3> */}
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
                    <div className="aboutme-intro">
                      <p className="paragraphAnimation">
                        <h3>
                          저는 끊임없이 배우고 성장하는 개발자를 꿈꾸고
                          있습니다. <br />
                          새로운 기술을 습득하는 것을 좋아하며 <br />
                          UI/UX 관점을 고려하며 확장 가능한 웹 애플리케이션에
                          대해 고민합니다.
                          <br />
                          업무적, 업무 외적으로 더 나은 사람이 되기 위해
                          노력하고자 합니다.
                        </h3>
                      </p>
                    </div>
                  </div>
                  {/* <button className="btn-primary">request access</button> */}
                </div>

                <div className="textWrapper2">
                  <div className="container1">
                  

                    <div>
                      <h2>교육</h2>
                      <p>
                        중영학과 대외한어학사 - 상해외국어대학교 [2014.09 -
                        2018.09]
                      </p>
                      <p>2020 위코드 9기 [2020.05 - 2018.07]</p>
                      <p>CherGround 인턴 협업 [2020.07 - 2018.08]</p>
                    </div>

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
