import React, { useEffect, useRef } from "react";
import { annotate } from 'https://unpkg.com/rough-notation?module';
import "./intro1.css";

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?@&$#$$________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

function Intro1() {
  const textRef = useRef(null);

  useEffect(() => {
    const fx = new TextScramble(textRef.current);
    const phrases = [
      'HTML,',
      'CSS',
      'Node.js',
      'Express',
      'Database',
      'React.js',
      'inshort...',
      'Full Stack'
    ];
    const totalCycles = 8;
    let currentCycle = 0;

    const next = () => {
      fx.setText(phrases[currentCycle]).then(() => {
        setTimeout(() => {
          currentCycle++;
          if (currentCycle < phrases.length && currentCycle < totalCycles) {
            next();
          }
        }, 900);
      });
    };

    next();
  }, []);

useEffect(()=>{
  const notation1 = document.querySelector('.notation1');
  const annotation1 = annotate(notation1, { type: 'underline' , color:'green'});
  setTimeout(()=>{annotation1.show()},15000)


const notation2= document.querySelector('.text');

const annotation2 = annotate(notation2, { type: 'box' , color:'red'});

setTimeout(()=>{annotation2.show()},15000)
 
},[])
 

  return (
    <main className="main">
      <div className="hi">hi, i'm <span className="notation1"> Prakhar Bhardwaj </span> <span className="wave">👋🏼</span> </div>

      <div className="full_stack">A </div>
      <div className="container full_stack">
        <div ref={textRef} className="text">Full Stack</div>
      </div>
      <div className="full_stack">Developer</div>

    <div className="para">
      <p class="e1">I'm a Software enthusiast and an explosive right-hand batsman from the capital city of India, New Delhi.🫡 When I'm not smashing keys on my laptop 💻, you'll probably find me either immersed in a thrilling game of cricket 🏏 or grooving to some awesome beats. 🎵</p>

      <p class="e2">As a junior pursuing Computer Science Engineering, I've dived headfirst into the fascinating world of technology ⚙️. Over the past few months, I've been rocking it with NextJS, React, NodeJs and MongoDB 😅, crafting stylish websites from scratch. But hey, I'm not just about the front-end wizardry! ✨ I'm also eager to explore the backend and dive into the depths of databases and server-side programming. 🤓</p>

      <p class="e3">Creativity is my middle name! Armed with my trusty problem-solving skills, I fearlessly tackle any challenge that comes my way. 🛡️ Whether it's debugging code or finding innovative solutions, I've got it covered. And hey, communication is key! 🔑 I excel in expressing my thoughts, both in writing and verbally. When it comes to project management, I'm like the conductor of a symphony, keeping all the moving parts in perfect harmony. 🎶</p>
      </div>
    </main>
  );
}

export default Intro1;
