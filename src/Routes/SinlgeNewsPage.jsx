import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Style/SinlgeNewsPage.module.css';
import { getSingleNewsData } from '../api';
import { Heading } from '@chakra-ui/react';

const SinlgeNewsPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);
// console.log(data.description)
  useEffect(() => {
    getSingleNewsData(params.id)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [params.id]);
  return (
    <div className={styles.background}>
      <div className={styles.continersinglenews}>
      <img src={data.image} alt="scsc"></img>
      <div className={styles.newDiv}>
        <div>
          <div className={styles.dates}>
            <p>28 Aug 2022 | 01:00 PM</p>
            <div>
              <img
                src="https://www.cricket.com/svgs/author-icon.svg"
                alt="sff"
              ></img>
              <p>AFP</p>
            </div>
          </div>
          <Heading className={styles.title} as="h5" size="md">
            {data.title}
          </Heading>
          <p>{data.heading}</p>
          {data.description?.map((e)=>(
            <p>{e.new1}</p>
          ))}
        </div>
        <div>
        <Heading as="h5" p="15px 30px" borderBottom="1px solid rgb(232, 229, 229)" size="md">Related Articles</Heading>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SinlgeNewsPage;
