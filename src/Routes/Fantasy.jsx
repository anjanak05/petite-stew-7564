import React from 'react';
import FantasyCompeltedCard from '../Component/FantasyCompeltedCard';
import FantasyLiveCard from '../Component/FantasyLiveCard';
import FantasyPreview from '../Component/FantasyPreview';
import FantasyUpcomingCard from '../Component/FantasyUpcomingCard';
import FantasyVideo from '../Component/FantasyVideo';
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
      <FantasyPreview></FantasyPreview>
      <FantasyVideo></FantasyVideo>
      {/* <iframe width="977" height="384" src="https://www.youtube.com/embed/VLW7Twv7S9E" title="Kaun hogi aapki aaj ki fantasy picks? WI v IND, 3rd T20I, Fantasy Preview | Cricket.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  );
};

export default Fantasy;
