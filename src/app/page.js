import Intro from "@/components/intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Intro/>
      <div className={styles.about_section}>
        <div className={styles.bio}>
          Hello, I am Gabriel Libozada Anover. I am a Canadian software engineer currently based in Tokyo. 
          I have recently graduated with distinction from the University of Toronto, having done a specialist in Computer Science. 
          I have a passion for and specialize in frontend software engineering and low level systems programming. I am currently looking
          for roles that would allow me to work in either of these disciplines. <br/><br/>
          In my spare time, I also enjoy going outdoors to do Astronomy and partaking in the traditional Japanese
          arts of Iaido and Kenjutsu (swordsmanship). 
        </div>
        <div className={styles.about_title}>About Me</div>
      </div>
    </div>
  );
}
