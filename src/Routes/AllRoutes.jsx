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
import Login from "../Routes/Login"
import  PrivateRoute  from '../Component/PrivateRoute';
import Profile from './Profile';
import AlertLogin from '../Component/AlertLogin';
import SinlgeNewsPage from './SinlgeNewsPage';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute><Fantasy /></PrivateRoute>}></Route>
        <Route path="/Criclytics" element={<PrivateRoute><Criclytics /> </PrivateRoute>}></Route>
        <Route path="/Schedule" element={ <PrivateRoute> <Schedule />   </PrivateRoute>}></Route>
        <Route path="/Series" element={ <PrivateRoute> <Series />   </PrivateRoute>}></Route>
        <Route path="/News" element={ <PrivateRoute> <News />   </PrivateRoute>}></Route>
        <Route path="/News/:id" element={ <PrivateRoute> <SinlgeNewsPage/></PrivateRoute>}></Route>
        <Route path="/Videos" element={ <PrivateRoute> <Videos />   </PrivateRoute>}></Route>
        <Route path="/Players" element={ <PrivateRoute> <Players />   </PrivateRoute>}></Route>
        <Route path="/Teams" element={ <PrivateRoute> <Teams />   </PrivateRoute>}></Route>
        <Route path="/Login" element={  <Login/> }></Route>
        <Route path="/Profile" element={  <Profile/> }></Route>
        <Route path="/AlertLogin" element={  <AlertLogin/> }></Route>
      
      </Routes>
    </div>
  );
};

export default AllRoutes;
