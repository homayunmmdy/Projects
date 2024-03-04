import React from 'react'
import styles from "@/styles/components/Announcement.module.css"
import { FaFacebook ,FaInstagram , FaXTwitter  , FaPinterest} from "react-icons/fa6";


const Announcement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialMeida}>
        <a href='#' title='facebook' target='_blank' className={styles.Icons}><FaFacebook /></a>
        <a href='#' title='instagram' target='_blank' className={styles.Icons}><FaInstagram /></a>
        <a href='#' title='X' target='_blank' className={styles.Icons}><FaXTwitter /></a>
        <a href='#' title='pinterest' target='_blank' className={styles.Icons}><FaPinterest /></a>
      </div>
      <div className={styles.offer}>
      Super Deal! Free Shipping on Orders Over $50
      </div>
      <div className={styles.lang}>
        <select className={styles.Selector} name='currency'>
            <option value="used">USD $</option>
            <option value="eur">EUR &euro;</option>
        </select>
        <select className={styles.Selector} name='langugage'>
            <option value="en-Us">English</option>
            <option value="es-ES">Espa&ntilde;ol</option>
            <option value="es-fr">Fran&ccedil;ais</option>
        </select>
      </div>
    </div>
  )
}

export default Announcement
