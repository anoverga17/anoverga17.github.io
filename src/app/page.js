"use client" 

import styles from "./page.module.css";
import Image from 'react-bootstrap/Image';
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => "Hello World!".slice(0, Math.round(count.get())));

  useEffect(() => {
    const controls = animate(count, 12, { duration: 2 })
    return () => controls.stop()
  }, []);

  return (
    <div className={styles.page}>
        <div className={styles.profile_message}>
            <motion.pre>{rounded}</motion.pre>
        </div>
        <Image className={styles.profile_img} src="gabriel-1.jpg"/>
        <div className={styles.bio}>
          Hello, I am Gabriel Libozada Anover. I am a Canadian software engineer currently living in Tokyo. 
          I have recently graduated with distinction from the University of Toronto, having done a specialist in Computer Science. 
          I have a passion for and specialize in frontend software engineering and low level systems programming. I am currently looking
          for roles that would allow me to work in either of these disciplines.
          <br/>
          Aside from learning Japanese, in my spare time, I also enjoy going outdoors to do Astronomy and partaking in the traditional Japanese
          arts of Iaido and Kenjutsu (swordsmanship).
        </div>
        <div id="about" className={styles.about_title}>About Me</div>
    </div>
  );
}
