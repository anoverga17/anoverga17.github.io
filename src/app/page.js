import Intro from "@/components/intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Intro/>
      <div className={styles.about_section}>
        <div className={styles.bio}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere pulvinar blandit. Duis tristique accumsan ullamcorper. Aliquam pharetra eleifend fringilla. Nullam venenatis diam vitae mauris pulvinar lobortis. Etiam in imperdiet orci. Curabitur maximus tortor et ligula accumsan tincidunt. Curabitur in quam sem. Suspendisse porttitor ligula enim, in rhoncus enim tincidunt facilisis. Praesent id ullamcorper justo, id pulvinar felis. Duis faucibus ullamcorper purus, ac rhoncus justo porta ac. Maecenas at nibh efficitur, gravida erat et, egestas quam. Integer et venenatis nibh. Morbi aliquam et turpis quis rutrum. Nunc in nibh nunc. Nulla pulvinar justo quis facilisis fermentum.

        </div>
        <div className={styles.about_title}>About Me</div>
      </div>
    </div>
  );
}
