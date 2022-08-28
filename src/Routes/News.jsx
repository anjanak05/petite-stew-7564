import React, { useEffect, useState } from 'react';
import styles from '../Style/News.module.css';
import { Heading, Button } from '@chakra-ui/react';
import { getNewsData } from '../api';
import {Link} from "react-router-dom"

const btn = ['LATEST', 'NEWS', 'ON THIS DAY', 'MATCH RELATED', 'FEATURES'];

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchnewsData();
  }, []);

  const fetchnewsData = () => {
    getNewsData()
      .then(res => {
        setNews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.backGroundNews}>
      <div className={styles.stickry}>
        <Heading ml="16.5%" mb="0.5%" color="#454547" as="h4" size="md">
          News & Articles
        </Heading>
        <div className={styles.btnDiv}>
          {btn.map(e => (
            <Button
              className={styles.btn}
              colorScheme="black"
              variant="outline"
            >
              {e}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        {news.map(e => (
          <div key={e.id+ e.title}>
            <Link to={`/News/${e.id}`}>
            <div className={styles.mainDetailDiv}>
              <div>
                <img src={e.image} alt="imgeebews" />
              </div>
              <div className={styles.detailsDiv}>
                <Heading mt="2%" mb="2%" color="#454547" as="h5" size="sm">
                  {e.title}
                </Heading>
                <p>{e.heading}</p>
                <span>
                  <img
                    width="20px"
                    src="https://www.cricket.com/svgs/user.svg"
                    alt="profilelogo"
                  />
                  cricket.com staff
                </span>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
