import React from 'react'
import styles from "@/styles/components/Newsletter.module.css"
import { GrSend } from "react-icons/gr";

const Newsletter = () => {
  return (
    <div className={styles.NewsletterContainer}>
      <h4 className={styles.Title}>Newsletter</h4>
      <p className={styles.desc}>Get timely updates from your favorite products.</p>
      <div className={styles.InputContainer}>
        <input className={styles.Input} placeholder='Your Email' />
        <button type='button' className={styles.send}><GrSend /></button>
      </div>
    </div>
  )

}

export default Newsletter
