import { Card, Image, CardBody, CardText, CardTitle, CardImg } from "react-bootstrap";
import styles from "./project-card.module.css"

const getRandColour = () => {
    const hex_digits = '0123456789ABCDEF';
    // Create random but still bright colours
    let colour = "#" + hex_digits[Math.floor(Math.random() * 6) + 10];
    for (let i = 0; i < 5; i++) {
        colour += hex_digits[Math.floor(Math.random() * 16)]
    }
    return colour;
}

export default function ProjectCard(props) {
    return (
        <Card className={styles.project} style={{backgroundColor: getRandColour()}}>
            <CardBody>
                <CardTitle>
                    <b>{props.title}</b>
                    <a href={props.github}>
                        <Image className={styles.project_link_img} src="logos/github-mark.svg" hidden={props.github === ""}/>
                    </a>
                </CardTitle>
                <CardText>
                    <em>{props.desc}</em>
                </CardText>
            </CardBody>
        </Card>
    )
}