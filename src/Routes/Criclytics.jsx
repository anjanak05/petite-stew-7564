import React from 'react';
import { useContext } from 'react';
import CarouselFantasy from '../Component/CarouselFantasy';
import MatchDetailCard from '../Component/MatchDetailCard';
import { CricklyticsCompletedContext, CricklyticsLiveContext, CricklyticsUpcomingContext } from '../Context/CricklyticsContext';

const Criclytics = () => {
  const {upcoming, upcomingTitle} = useContext(CricklyticsUpcomingContext)
  const {completed, completTitle} = useContext(CricklyticsCompletedContext)
  const {live, liveTitle} = useContext(CricklyticsLiveContext)

  
  return (
    <div>
      <CarouselFantasy></CarouselFantasy>
      <MatchDetailCard data={upcoming} title={upcomingTitle}></MatchDetailCard>
      <MatchDetailCard data={live} title={liveTitle}></MatchDetailCard>
      <MatchDetailCard data={completed} title={completTitle}></MatchDetailCard>
    </div>
  );
};

export default Criclytics;
