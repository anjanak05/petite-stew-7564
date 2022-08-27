import { useEffect } from 'react';
import { useRef } from 'react';
import { createContext, useState } from 'react';
import { getLiveData, getUpcomingData, getCompledtedData } from '../api';

export const CricklyticsUpcomingContext = createContext();
export const CricklyticsUpcomingProvider = ({ children }) => {
  const [upcoming, setUpcoming] = useState([]);
const upcomingTitle = useRef("UPCOMING")
  useEffect(() => {
    fetchUpcomingData();
  }, []);

  const fetchUpcomingData = () => {
    getUpcomingData()
      .then(res => {
        setUpcoming(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <CricklyticsUpcomingContext.Provider value={{ upcoming, upcomingTitle }}>
      {children}
    </CricklyticsUpcomingContext.Provider>
  );
};

export const CricklyticsLiveContext = createContext();
export const CricklyticsLiveProvider = ({ children }) => {
  const [live, setLive] = useState([]);
const liveTitle = useRef("LIVE")
  useEffect(() => {
    fetchLiveData();
  }, []);

  const fetchLiveData = () => {
    getLiveData()
      .then(res => {
        setLive(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <CricklyticsLiveContext.Provider value={{live, liveTitle}}>
      {children}
    </CricklyticsLiveContext.Provider>
  );
};

export const CricklyticsCompletedContext = createContext();
export const CricklyticsCompletedProvider = ({ children }) => {
  const [completed, setCompleted] = useState([]);
const completTitle = useRef("COMPLETED")
  useEffect(() => {
    fetchCompletedData();
  }, []);

  const fetchCompletedData = () => {
    getCompledtedData()
      .then(res => {
        setCompleted(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <CricklyticsCompletedContext.Provider value={{completed, completTitle}}>
      {children}
    </CricklyticsCompletedContext.Provider>
  );
};
