import { Card, Button, CardBody, CardText, CardTitle } from "react-bootstrap";
import styles from "./page.module.css";

export default function Projects() {
    return (
        <>
            <h1 className={styles.project_header}>My Projects</h1>
            <div className={styles.project_cards}>
                <Card className={styles.project}>
                    <CardBody>
                        <CardTitle>Cygnus Lang</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                        <Button variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>

                <Card className={styles.project}>
                    <CardBody>
                        <CardTitle>YRES Room Scheduler</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                        <Button variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>

                <Card className={styles.project}>
                    <CardBody>
                        <CardTitle>MiniC Compiler</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                        <Button variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>

                <Card className={styles.project}>
                    <CardBody>
                        <CardTitle>MarkUs</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                        <Button variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>

                <Card className={styles.project}>
                    <CardBody>
                        <CardTitle>GameFace</CardTitle>
                            <CardText>
                                A game review website that aims 
                            </CardText>
                        <Button variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>

                <Card className={styles.project}>
                    <CardBody>
                        <CardTitle>Calendar</CardTitle>
                            <CardText>
                                A simple calendar application created using Java and JavaFX.
                            </CardText>
                        <Button variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}