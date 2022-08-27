import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../Style/FantasyVideo.module.css';
import { getFantasyVideoData } from '../api';
const FantasyVideo = () => {
  const [fVideo, setFVideo] = useState([]);
  console.log('epre', fVideo);

  useEffect(() => {
    fetchCompletedData();
  }, []);

  const fetchCompletedData = () => {
    getFantasyVideoData()
      .then(res => {
        setFVideo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.previewContainer}>
      <div className={styles.titlePreview}>FANTASY PREVIEWS</div>
      <div>
        {fVideo?.map(e => (
          <div className={styles.mainDiv}>
            {/* <img className={styles.image} src={e.image} alt="newsimage"></img */}
            <iframe width="230"
             height="200"
             className={styles.image}
              src={e.image}
               title={e.para} 
               frameborder="-10"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <p>{e.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FantasyVideo;
