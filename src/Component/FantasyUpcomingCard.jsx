import React, { useState } from 'react';
import { useEffect } from 'react';
import { getUpcomingFantasyData } from '../api';
import styles from '../Style/FantasyUpcomingCard.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Icon } from '@chakra-ui/icons';

const FantasyUpcomingCard = () => {
  const [fantasyUpcom, setFantasyUpcom] = useState([]);

  useEffect(() => {
    getUpcomingFantasyData()
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
          <p>
            {item.date} | <Icon color=" rgb(200, 42, 42)" as={FaMapMarkerAlt} /> 
            {item.place}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FantasyUpcomingCard;
