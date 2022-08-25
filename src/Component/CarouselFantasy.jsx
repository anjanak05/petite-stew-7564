import React from 'react';
import styles from '../Style/CarouselFantasy.module.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

const CarouselFantasy = () => {
  return (
    <div>
      <MDBCarousel
        className={styles.carouselContainer}
        showIndicators
        showControls interval={3000}
      >
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              className={styles.carouselimage}
              src="https://www.cricket.com/pngs/banner-1.jpg"
              alt="..."
            />
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              className={styles.carouselimage}
              src="https://www.cricket.com/pngs/Banner-2.jpg"
              alt="..."
            />
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              className={styles.carouselimage}
              src="https://www.cricket.com/pngs/Banner-3.jpg"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselFantasy;
