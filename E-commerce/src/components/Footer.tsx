import React from "react";
import styles from "@/styles/components/Footer.module.css";
import { FaFacebook ,FaInstagram , FaXTwitter  , FaPinterest} from "react-icons/fa6";
import { FaSearchLocation , FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <h1 className={styles.Logo}>CARTIO</h1>
        <p className={styles.Desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <ul className={styles.SocialContainer}>
            <li className={styles.SocialIcon}><FaFacebook /></li>
            <li className={styles.SocialIcon}><FaInstagram /></li>
            <li className={styles.SocialIcon}><FaXTwitter /></li>
            <li className={styles.SocialIcon}><FaPinterest /></li>
        </ul>
      </div>
      <div className={styles.Center}>
        <h2 className={styles.Title}>Useful Links</h2>
        <ul className={styles.List}>
            <li className={styles.ListItem}>Home</li>
            <li className={styles.ListItem}>Cart</li>
            <li className={styles.ListItem}>Man Fashion</li>
            <li className={styles.ListItem}>Woman Fashion</li>
            <li className={styles.ListItem}>Accessories</li>
            <li className={styles.ListItem}>My Account</li>
            <li className={styles.ListItem}>Order Tracking</li>
            <li className={styles.ListItem}>Wishlist</li>
            <li className={styles.ListItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.Right}>
        <div className={styles.ContactItem}>
        <FaSearchLocation /> Baghershahr Tehran Iran
        </div>
        <div className={styles.ContactItem}>
            <FaPhoneAlt /> 0922 4003 487
        </div>
        <div className={styles.ContactItem}>
            <CgMail /> Homayunmmdy@gmail.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" title="payment" alt="payment"/>
      </div>
    </div>
  );
};

export default Footer;
