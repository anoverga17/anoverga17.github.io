import ProjectCard from "@/components/project-card"
import styles from "./page.module.css"

const projects = [
    {
        title: "Cygnus Lang",
        desc: "A current work in progress. The goal is to create a C like functional programming language using LLVM.",
        github: "https://github.com/anoverga17/cygnus-lang"
    },
    {
        title: "YRES Room Scheduler",
        desc: "A room scheduling application for York Regional Educational Services that allows the creation of classroom assignments.",
        github: "https://github.com/csc301-2023-fall/project-48-yorkregioneducationalservices-T",
        img: "https://private-user-images.githubusercontent.com/109639262/287138715-83c81b5e-102f-48ff-9749-a3f7869d62d9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMxMDc1MDEsIm5iZiI6MTc0MzEwNzIwMSwicGF0aCI6Ii8xMDk2MzkyNjIvMjg3MTM4NzE1LTgzYzgxYjVlLTEwMmYtNDhmZi05NzQ5LWEzZjc4NjlkNjJkOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyN1QyMDI2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYWI2ZjQ4N2VlYmQ5YjkwZTFmMjk3ZWY4MDAyZDk4YmM5NWM0NGZmYTNlMWFmZDZlOTZlN2VlZDVmYzExNWJkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iZqePF49r3W5NbCfDaTsvwJ8ndo5dVTVHdCnYiy1yAU"
    },
    {
        title: "MiniC Compiler",
        desc: "A compiler for MiniC, a C like programming language without pointers. Implemented using C++ 14 and LLVM.",
        github: ""
    },
    {
        title: "MarkUs",
        desc: "A collection of applications designed to streamline the process of automated grading.",
        github: "https://github.com/MarkUsProject/Markus"
    },
    {
        title: "GameFace",
        desc: "A game review website that aims to aggregate reviews of video games and, using the reviews, provide a system for ranking games.",
        github: "https://github.com/anoverga17/GameFace"
    },
    {
        title: "Calendar",
        desc: "A simple calendar application created using Java and JavaFX. Allows users to create events and reminders.",
        github: "https://github.com/anoverga17/Calendar_application"
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