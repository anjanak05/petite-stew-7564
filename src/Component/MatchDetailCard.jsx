import React from 'react';
import styles from '../Style/MatchDetailCard.module.css';

const MatchDetailCard = ({ data, title }) => {
  return (
    <div className={styles.backGroundMacthCard}>
      <div className={styles.containerMatch}>
        <div className={styles.blueHeading}>
          <p>{title.current}</p>
        </div>
        <div className={styles.cardMacth}>
          {data.map(item => (
            <div>
              <p>{item.title}</p>
              <div>
                <img src={item.img1}  alt="dsd"/>
                <p>{item.name1}</p>
              </div>
              <div>
                <img src={item.img2}  alt="dsd"/>
                <p>{item.name2}</p>
              </div>
              <div className={styles.pinkDiv}>{item.btn}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchDetailCard;
