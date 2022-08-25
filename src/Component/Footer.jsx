import React from 'react';
import styles from '../Style/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
      <div>
        <img
          className={styles.crickLogo}
          src="https://www.cricket.com/cricket.com.svg"
          alt="logosvg"
        />
        <p className={styles.smallSize}>Cricket like never before</p>
      </div>
      <div className={styles.policies}>
        <Link to="/">Term of use</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Cookies Policy</Link>
      </div>
      <div >
        <div className={styles.mediaDiv}>
          <p className={styles.smallSize}>Follow us on</p>
          <img
            src="https://www.cricket.com/svgs/facebook.svg"
            alt="socialMediaLogo"
          />
          <img
            src="https://www.cricket.com/svgs/twitter.svg"
            alt="socialMediaLogo"
          />
          <img
            src="https://www.cricket.com/svgs/linkedin.svg"
            alt="socialMediaLogo"
          />
        </div>
        <div>
          <p>@ 2020 cricket.com | All rights reserved</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
