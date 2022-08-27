import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../Style/FantasyPreview.module.css';
import { getFantasyPreviewData } from '../api';
const FantasyPreview = () => {
  const [fPreview, setFPreview] = useState([]);
  console.log('epre', fPreview);
  useEffect(() => {
    fetchCompletedData();
  }, []);

  const fetchCompletedData = () => {
    getFantasyPreviewData()
      .then(res => {
        setFPreview(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.previewContainer}>
      <div className={styles.titlePreview}>FANTASY PREVIEWS</div>
      <div>
      {fPreview?.map(e => (
        <div className={styles.mainDiv}>
          <img className={styles.image} src={e.image} alt="newsimage"></img>
          <div className={styles.details}>
            <p>{e.title}</p>
            <p>{e.para}</p>
            <p>{e.credit}</p>
            <p>{e.date}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FantasyPreview;
