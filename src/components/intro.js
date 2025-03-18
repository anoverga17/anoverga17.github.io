import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styles from "./intro.module.css";

export default function Intro() {
    return (
        <div className={styles.intro_heading}>
            <div className={styles.profile_message}>
                Hello World
            </div>
            <Image className={styles.profile_img} src="gabriel-1.jpg"/>
        </div>
    )
}