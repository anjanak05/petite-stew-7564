import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCompledtedFantasyData } from '../api';
import styles from '../Style/FantasyCompletedCard.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Icon } from '@chakra-ui/icons';

const FantasyCompeltedCard = () => {
  const [fantasyUpcom, setFantasyUpcom] = useState([]);

  useEffect(() => {
    getCompledtedFantasyData()
      .then(res => {
        setFantasyUpcom(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.mainDiv}>
      
      {fantasyUpcom.map(item => (
        <div className={styles.fanUpcomingContainer}>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.innerDiv}>
            <img src={item.img1} alt="flag" />
            <p>{item.name1}</p>
            <div className={styles.versus}><p>vs</p></div>
            <p>{item.name2}</p>
            <img src={item.img2} alt="flag" />
          </div>
          <p id={styles.btn}>{item.btn}</p>
          
        </div>
      ))}
    </div>
  );
};

export default FantasyCompeltedCard;
