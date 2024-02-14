import React, { useEffect } from "react";
import "./contact.css";
import { annotate } from "https://unpkg.com/rough-notation?module";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

  useEffect(() => {
    const notation1 = document.querySelector(".notation1");
    const annotation1 = annotate(notation1, {
      type: "underline",
      color: "green",
    });
    setTimeout(() => {
      annotation1.show();
    }, 2000);

    const notation2 = document.querySelector(".notation2");
    const annotation2 = annotate(notation2, {
      type: "circle",
      color: "red",
    });
    setTimeout(() => {
      annotation2.show();
    }, 2000);
  }, []);


  ////images sources
  const linkdin = process.env.PUBLIC_URL + "/favicon/linkdin.png";
  const instagram = process.env.PUBLIC_URL + "/favicon/instagram.png";
  const twitter = process.env.PUBLIC_URL + "/favicon/twitter.png";
  const gmail = process.env.PUBLIC_URL + "/favicon/gmail.png";
  const github = process.env.PUBLIC_URL + "/favicon/github.png";


  // WEB development animation

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.fromTo("#iconanimate1", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl.fromTo("#iconanimate1", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      let tl2 = gsap.timeline();
      tl2.fromTo("#iconanimate2", { scale: 0 }, { scale: 0, duration: 0.35 });
      tl2.fromTo("#iconanimate2", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl2.fromTo("#iconanimate2", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      let tl3 = gsap.timeline();
      tl3.fromTo("#iconanimate3", { scale: 0 }, { scale: 0, duration: 0.7 });
      tl3.fromTo("#iconanimate3", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl3.fromTo("#iconanimate3", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      let tl4 = gsap.timeline();
      tl4.fromTo("#iconanimate4", { scale: 0 }, { scale: 0, duration: 1.05 });
      tl4.fromTo("#iconanimate4", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl4.fromTo("#iconanimate4", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      let tl5 = gsap.timeline();
      tl5.fromTo("#iconanimate5", { scale: 0 }, { scale: 0, duration: 1.4 });
      tl5.fromTo("#iconanimate5", { scale: 0 }, { scale: 1.1, duration: 0.35 });
      tl5.fromTo("#iconanimate5", { scale: 1.1 }, { scale: 1, duration: 0.35 });
    },
    { scope: "" }
  );
  useGSAP(
    ()=>{
gsap.from(".personalised",{opacity:0,duration:2})
    },{scope:""}
  )



  return (
    <div className="all">
      <div className="headingcontactme">
        Wanna be in <span className="notation1"> touch? </span>
      </div>
      <div className="shaded">
        If you have a job or freelancing gig, that you think I can do.
      </div>

      <div className="lower">
        <div className="box">
          <div className="note">
            Send a <span className="personalised"> personalised </span>message!
          </div>
          <form
            className="form"
            action="https://formspree.io/f/meqygakd"
            method="POST"
          >
            <div className="formpart1">
              {" "}
              <input
                className="inputfield1"
                type="name"
                name="name"
                placeholder="Name here!"
                required
              />
              <input
                className="inputfield2"
                type="email"
                name="email"
                placeholder="Drop your email here!"
                required
              />
            </div>

            <textarea
              rows="10"
              className="inputfield3"
              name="message"
              placeholder="What do you want to say?"
              required
            ></textarea>

            <button id="myButton" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="lowerleft">
        <div className="socialmedia">
          {" "}
          or <span className="notation2"> ping</span> me here...
        </div>
        <div className="icons">
            <div className="icon" id="iconanimate1"> <a target='_blank' href="https://www.linkedin.com/in/prakhar-bhardwaj1504/"><img width="38" height="38" src={linkdin} alt="linkedin"/></a></div>
            
            <div className="icon" id="iconanimate2">  <a target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=prakharbhardwaj1504@gmail.com&su=&body="> <img width="38" height="38" src={gmail} alt="linkedin"/></a></div>
            
            <div className="icon" id="iconanimate3"> <a target='_blank' href="https://github.com/prakharbhardwaj1504"><img width="38" height="38" src={github} alt="linkedin"/></a></div>
            
            <div className="icon" id="iconanimate4"><a target='_blank' href="https://twitter.com/prakhar1504">
            <img width="38" height="38" src={twitter} alt="linkedin"/> </a></div>
            
            <div className="icon" id="iconanimate5"> <a target='_blank' href="https://www.instagram.com/prakharbhardwaj1504/"><img width="38" height="38" src={instagram} alt="linkedin"/></a></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
