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
                    {/* <div className="aboutme-intro"> */}

                    <section id="intro">
                              
                      <div class="main-wrapper">
                        <div className="text">
                        <h2 className="heading--uppercase--inline">
                          <span className="split">
                            {/* 여기서부터 네이밍 스타일링  */}
                            <div id="model-wrapper" className="content">
                              <canvas className="webgl" data-engine="three.js r137" 
                              width="1052" height="898" 
                              style={{width: '526px', height: '449px'}}
                              />
                              <div class="caption item-fade">
                                <p className="h2--uppercase" data-margin="none" data-subtitle-left="Michelangelo's David">
                                    <span className="line">Hello. I am </span>
                                    {/* <div className="symbol--right">Patrick David</div> */}
                                  <div style={{ fontSize: '40px'}}>Patrick David</div>
                                  <svg width="104" height="54" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "150px", marginTop: "-60px"}}>
                                    <path d="M4.66 4.442C19.968 3.87 51.687 7.98 59.806 10.15c8.119 2.17 42.004 11.335 42.193 22.216.19 10.881-23.966 21.44-51.095 18.938C23.775 48.802 2.174 36.415 2.001 25.7 1.828 14.986 19.498 5.55 42.092 2.767c22.595-2.785 62.01 7.677 49.853 28.879" stroke="#F3DBC7" stroke-width="3" fill="none" fill-rule="evenodd"/>
                                  </svg>
                                </p>
                                <svg width="136" height="90" xmlns="http://www.w3.org/2000/svg"  style={{marginLeft: "230px", marginTop: "-60px"}}>
                                  <path d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                            {/*네이밍 스타일링  */}
                          </span>
                        </h2>
                        <p className="h2--uppercase animation-line" data-margin="none">
                          <div className="split">
                          <div className="line">
                          I use my passion and skills</div>
                          </div>
                        </p>
                        <p className="h2--uppercase animation-line" data-margin="none">
                          <div className="split">
                          <div className="line">
                          to create digital products and</div></div>
                          <div className="split">
                            <div className="line" style={{display: 'block', textAlign: 'start', width: '100%'}}>experiences. National and</div>
                          </div>
                          <div className="split">
                          <div className="line">international customers rely on</div></div><div className="split">
                          <div className="line">me for design, implementation,</div></div><div className="split">
                          <div className="line">and management of their digital</div></div><div className="split">
                          <div className="line">products. As an independent, I</div></div><div className="split">
                          <div className="line">work also with web agencies,</div></div>
                          <div className="split">
                            <div className="line">companies, startups and</div>
                          </div>
                          <div className="split">
                            <div className="line">individuals to create a blueprint</div>
                          </div>
                          <div className="split">
                            <div className="line">for the digital business. Advisor</div>
                          </div>
                          <div className="split"><div className="line">and partner of some digital and</div>
                          </div>
                          <div className="split"><div className="line">fintech startups. Also, Judge at</div>
                          </div>
                          <div className="split"><div className="line">CSSDA and The Webby.</div>
                          </div>
                        </p>
                        </div>
                        <div id="model-wrapper" className="content">
                          <canvas className="webgl" data-engine="three.js r137" style={{border: '1px solid red'}}></canvas>

                          <div class="caption item-fade2">
                            
                              {/* <svg width="136" height="90" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd">
                                  </path>
                                  </svg> */}
                            </div>

                          
                          <div className="caption item-fade">
                            <p className="h2--uppercase" data-margin="none" data-subtitle-left="Michelangelo's David"><span>I am not this one</span>
                              <svg width="104" height="54" xmlns="http://www.w3.org/2000/svg"  style={{border: '1px solid red'}}>
                                <path d="M4.66 4.442C19.968 3.87 51.687 7.98 59.806 10.15c8.119 2.17 42.004 11.335 42.193 22.216.19 10.881-23.966 21.44-51.095 18.938C23.775 48.802 2.174 36.415 2.001 25.7 1.828 14.986 19.498 5.55 42.092 2.767c22.595-2.785 62.01 7.677 49.853 28.879" stroke="#F3DBC7" stroke-width="3" fill="none" fill-rule="evenodd">
                                </path>
                              </svg>
                            </p>
                            <svg width="136" height="90" xmlns="http://www.w3.org/2000/svg" style={{border: '1px solid red'}}>
                              <path d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </section>
                      {/* <p classNameName="paragraphAnimation">
                        <h3>
                          high motivator
                          저는 끊임없이 배우고 성장하는 개발자를 꿈꾸고
                          있습니다. <br />
                          새로운 기술을 습득하는 것을 좋아하며 <br />
                          UI/UX 관점을 고려하며 확장 가능한 웹 애플리케이션에
                          대해 고민합니다.
                          <br />
                          업무적, 업무 외적으로 더 나은 사람이 되기 위해
                          노력하고자 합니다.
                        </h3>
                      </p> */}
                    {/* </div> */}
                  </div>
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
