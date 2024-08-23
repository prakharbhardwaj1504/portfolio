import React, { useEffect } from "react";
import "./about.css";
import { annotate } from "https://unpkg.com/rough-notation?module";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  // GSAP image
  const imagePath = process.env.PUBLIC_URL + "/favicon/gsap.png";
  // quickcommerce image
  const realtimechatapp = process.env.PUBLIC_URL + "/favicon/realtimechatapp.jpg";
  // Generative AI image
  const realgemini = process.env.PUBLIC_URL + "/favicon/realgemini.jpg";
  // get organised image
  const getorganised = process.env.PUBLIC_URL + "/favicon/getorganised.png";
  // streaming app
  const streamingapp = process.env.PUBLIC_URL + "/favicon/streamingapp.png";

  // rough notation
  useEffect(() => {
    const notation1 = document.querySelector(".notation1");
    const annotation1 = annotate(notation1, {
      type: "underline",
      color: "green",
    });
    setTimeout(() => {
      annotation1.show();
    }, 2200);

    const notation2 = document.querySelector(".text");
    const annotation2 = annotate(notation2, { type: "box", color: "red" });
    setTimeout(() => {
      annotation2.show();
    }, 2200);

    const notation3 = document.querySelector(".project");
    const annotation3 = annotate(notation3, { type: "box", color: "red" });
    setTimeout(() => {
      annotation3.show();
    }, 2200);
  }, []);

  // WEB development animation

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.fromTo("#iconanimate1", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl.fromTo("#iconanimate1", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  useGSAP(
    () => {
      let tl2 = gsap.timeline();
      tl2.fromTo("#iconanimate2", { scale: 0 }, { scale: 0, duration: 0.35 });
      tl2.fromTo("#iconanimate2", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl2.fromTo("#iconanimate2", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  useGSAP(
    () => {
      let tl3 = gsap.timeline();
      tl3.fromTo("#iconanimate3", { scale: 0 }, { scale: 0, duration: 0.7 });
      tl3.fromTo("#iconanimate3", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl3.fromTo("#iconanimate3", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  useGSAP(
    () => {
      let tl4 = gsap.timeline();
      tl4.fromTo("#iconanimate4", { scale: 0 }, { scale: 0, duration: 1.05 });
      tl4.fromTo("#iconanimate4", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl4.fromTo("#iconanimate4", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  useGSAP(
    () => {
      let tl5 = gsap.timeline();
      tl5.fromTo("#iconanimate5", { scale: 0 }, { scale: 0, duration: 1.4 });
      tl5.fromTo("#iconanimate5", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl5.fromTo("#iconanimate5", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  useGSAP(
    () => {
      let tl6 = gsap.timeline();
      tl6.fromTo("#iconanimate6", { scale: 0 }, { scale: 0, duration: 1.75 });
      tl6.fromTo("#iconanimate6", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl6.fromTo("#iconanimate6", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  useGSAP(
    () => {
      let tl7 = gsap.timeline();
      tl7.fromTo("#iconanimate7", { scale: 0 }, { scale: 0, duration: 2.1 });
      tl7.fromTo("#iconanimate7", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl7.fromTo("#iconanimate7", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray" }
  );

  // TOOLS animation

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.fromTo("#iconanimate12", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl.fromTo("#iconanimate12", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray2" }
  );

  useGSAP(
    () => {
      let tl2 = gsap.timeline();
      tl2.fromTo("#iconanimate11", { scale: 0 }, { scale: 0, duration: 0.35 });
      tl2.fromTo(
        "#iconanimate11",
        { scale: 0 },
        { scale: 1.1, duration: 0.35 }
      );
      tl2.fromTo(
        "#iconanimate11",
        { scale: 1.1 },
        { scale: 1, duration: 0.35 }
      );
    },
    { scope: ".webarray2" }
  );

  useGSAP(
    () => {
      let tl3 = gsap.timeline();
      tl3.fromTo("#iconanimate10", { scale: 0 }, { scale: 0, duration: 0.7 });
      tl3.fromTo(
        "#iconanimate10",
        { scale: 0 },
        { scale: 1.1, duration: 0.35 }
      );
      tl3.fromTo(
        "#iconanimate10",
        { scale: 1.1 },
        { scale: 1, duration: 0.35 }
      );
    },
    { scope: ".webarray2" }
  );

  useGSAP(
    () => {
      let tl4 = gsap.timeline();
      tl4.fromTo("#iconanimate9", { scale: 0 }, { scale: 0, duration: 1.05 });
      tl4.fromTo("#iconanimate9", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl4.fromTo("#iconanimate9", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray2" }
  );

  useGSAP(
    () => {
      let tl5 = gsap.timeline();
      tl5.fromTo("#iconanimate8", { scale: 0 }, { scale: 0, duration: 1.4 });
      tl5.fromTo("#iconanimate8", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl5.fromTo("#iconanimate8", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: ".webarray2" }
  );

  // Scroll trigger

  useGSAP(() => {
    gsap.from("#actonscroll1", {
      opacity: 0,
      x: 270,
      duration: 2,
      scrollTrigger: {
        trigger: "#scrolltrigger1",
        toggleActions: "play none none reverse",
        start: "top 85%",
        // markers: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from("#actonscroll2", {
      opacity: 0,
      x: -270,
      duration: 2,
      scrollTrigger: {
        trigger: "#scrolltrigger2",
        toggleActions: "play none none reverse",
        start: "top 85%",
        // markers: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from("#actonscroll3", {
      opacity: 0,
      x: 270,
      duration: 2,
      scrollTrigger: {
        trigger: "#scrolltrigger3",
        toggleActions: "play none none reverse",
        start: "top 85%",
        // markers: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from("#actonscroll4", {
      opacity: 0,
      x: -270,
      duration: 2,
      scrollTrigger: {
        trigger: "#scrolltrigger4",
        toggleActions: "play none none reverse",
        start: "top 85%",

        // markers: true,
      },
    });
  });

  return (
    <div className="about">
      <div className="headingabout notation1">About Me</div>

      <div className="box1">
        <div className="headingskills text">Skills</div>
        {/* /////////////////////////////                  WEB development                 ///////////////////////////////// */}
        <div className="headingwebdevelopment">Web Development</div>
        <div className="webarray">
          <div className="arr" id="iconanimate1">
            <img
              className="reacticon"
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/50/react-native.png"
              alt="react-native"
            />
          </div>
          <div className="arr " id="iconanimate2">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/color/38/express-js.png"
              alt="express-js"
            />
          </div>
          <div className="arr" id="iconanimate3">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/small/38/nodejs.png"
              alt="nodejs"
            />
          </div>
          <div className="arr" id="iconanimate4">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/38/jquery.png"
              alt="jquery"
            />
          </div>

          <div className="arr" id="iconanimate5">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/50/html-5--v2.png"
              alt="html-5--v2"
            />
          </div>
          <div className="arr" id="iconanimate6">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/50/css3.png"
              alt="css3"
            />
          </div>
          <div className="arr" id="iconanimate7">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/38/bootstrap.png"
              alt="bootstrap"
            />
          </div>
        </div>
        {/* /////////////////////////////                  TOOLS                 ///////////////////////////////// */}
        <div className="headingtools">Tools</div>

        <div className="webarray2">
          <div className="arr" id="iconanimate8">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/38/visual-studio.png"
              alt="visual-studio"
            />
          </div>

          <div className="arr" id="iconanimate9">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/ios-filled/38/git.png"
              alt="git"
            />
          </div>
          <div className="arr" id="iconanimate10">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/windows/38/github.png"
              alt="github"
            />
          </div>
          <div className="arr" id="iconanimate11">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/windows/38/npm.png"
              alt="npm"
            />
          </div>
          <div className="arr" id="iconanimate12">
            <img
              className="gsapimg"
              width="40"
              height="40"
              src={imagePath}
              alt="gsap"
            />
          </div>
        </div>
      </div>

      {/* /////////////////////////////                  Projects                 ///////////////////////////////// */}

      <div className="box2">
        <div className="headingskills project">Projects</div>

        <div className="headingwebdevelopment" id="scrolltrigger1">
          Real-time Chat Application
        </div>
        <div className="showcase" id="actonscroll1">
          <img className="projectimg" src={realtimechatapp} alt="realtimechatapp" />
        </div>
        <div className="gitcode">
          code<i class="fa fa-github"></i>
        </div>

        <div className="headingwebdevelopment" id="scrolltrigger2">
          
          Generative AI 
        </div>
        <div className="showcase" id="actonscroll2">
          <img className="projectimg" src={realgemini} alt="weatherapp" />
        </div>
        <div className="gitcode">
          code<i class="fa fa-github"></i>
        </div>

        <div className="headingwebdevelopment" id="scrolltrigger3">
          Streaming App
        </div>
        <div className="showcase" id="actonscroll3">
          <img
            className="projectimg streamingapp"
            src={streamingapp}
            alt="weatherapp"
          />
        </div>
        <div className="gitcode">
          code<i class="fa fa-github"></i>
        </div>

        <div className="headingwebdevelopment" id="scrolltrigger4">
          get Organised
        </div>

        <div className="showcase" id="actonscroll4">
          <a width="50%" href="https://get-organised2.vercel.app/">
            <img className="projectimg" src={getorganised} alt="weatherapp" />
          </a>
        </div>

        <div className="gitcode">
          code<i class="fa fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default About;
