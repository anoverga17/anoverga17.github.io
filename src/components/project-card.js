import { Card, Button, CardBody, CardText, CardTitle } from "react-bootstrap";
import styles from "./project-card.module.css"

export default function ProjectCard(props) {
    return (
        <Card className={styles.project}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <Button variant="primary">Go somewhere</Button>
                <CardText>
                    {props.desc}
                </CardText>
            </CardBody>
        </Card>
    )
}