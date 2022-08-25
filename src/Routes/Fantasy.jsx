import React from 'react';
import FantasyCompeltedCard from '../Component/FantasyCompeltedCard';
import FantasyLiveCard from '../Component/FantasyLiveCard';
import FantasyUpcomingCard from '../Component/FantasyUpcomingCard';
import styles from '../Style/Fantasy.module.css';

const Fantasy = () => {
  return (
    <div className={styles.fantasyContainer}>
      <div className={styles.titleDiv}>
        <p>FANTASY CENTRE</p>
      </div>
      <p className={styles.title}> UPCOMING MATCHES</p>
      <FantasyUpcomingCard></FantasyUpcomingCard>
      <p className={styles.title}> LIVE MATCHES</p>
      <FantasyLiveCard></FantasyLiveCard>
      <p className={styles.title}> COMPLETED MATCHES</p>
      <FantasyCompeltedCard></FantasyCompeltedCard>
    </div>
  );
};

export default Fantasy;
