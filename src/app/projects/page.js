import ProjectCard from "@/components/project-card"
import styles from "./page.module.css"

const projects = [
    {
        title: "Cygnus Lang",
        desc: "A current work in progress. The goal is to create a C like functional programming language using LLVM.",
        github: ""
    },
    {
        title: "YRES Room Scheduler",
        desc: "A room scheduling application for York Regional Educational Services that allows the creation of classroom assignments.",
        github: ""
    },
    {
        title: "MiniC Compiler",
        desc: "A compiler for MiniC, a C like programming language without pointers. Implemented using C++ 14 and LLVM.",
        github: ""
    },
    {
        title: "MarkUs",
        desc: "A collection of applications designed to streamline the process of automated grading.",
        github: ""
    },
    {
        title: "GameFace",
        desc: "A game review website that aims to aggregate reviews of video games and, using the reviews, provide a system for ranking games.",
        github: ""
    },
    {
        title: "Calendar",
        desc: "A simple calendar application created using Java and JavaFX. Allows users to create events and reminders.",
        github: ""
    }
]

export default function Projects() {
    return (
        <>
            <h1 className={styles.project_header}>My Projects</h1>
            <div className={styles.project_cards}>
                {projects.map(p => <ProjectCard key={p.title} title={p.title} desc={p.desc} github={p.github}/>)}
            </div>
        </>
    )
}