"use client"

import { useEffect } from "react"
import { animate, motion, useAnimate } from "motion/react"
import styles from './letter.module.css'

export default function Letter() {

    useEffect(() => {
        // window is accessible here.
        console.log("window.innerHeight", window.innerHeight);
    }, []);

    return (
        <div className={styles.letter}></div>
    )
}