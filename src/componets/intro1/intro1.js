import React, { useEffect, useRef } from "react";
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

  return (
    <main className="main">
      <div className="hi">hi, i'm Prakhar Bhardwaj <span className="wave">👋🏼</span> </div>

      <div className="full_stack">A </div>
      <div className="container full_stack">
        <div ref={textRef} className="text">Full Stack</div>
      </div>
      <div className="full_stack">Developer</div>
    </main>
  );
}

export default Intro1;
