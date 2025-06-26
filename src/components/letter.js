"use client"

import { useEffect } from "react"
import { animate, motion, useAnimate } from "motion/react"
import styles from './letter.module.css'

export default function Letter(props) {

    return (
        <div className={styles.letter} style={{animationDuration: props.time, left: props.x}}></div>
    )
}