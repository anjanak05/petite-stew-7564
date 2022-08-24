import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Fantasy from './Fantasy';
import Criclytics from './Criclytics';
import Schedule from './Schedule';
import Series from './Series';
import News from './News';
import Videos from './Videos';
import Players from './Players';
import Teams from './Teams';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Fantasy" element={<Fantasy />}></Route>
        <Route path="/Criclytics" element={<Criclytics />}></Route>
        <Route path="/Schedule" element={<Schedule />}></Route>
        <Route path="/Series"element={<Series />}></Route>
        <Route path="/News" ement={<News />}></Route>
        <Route path="/Videos"element={<Videos />}></Route>
        <Route path="/Players" element={<Players />}></Route>
        <Route path="/Teams" element={<Teams />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
