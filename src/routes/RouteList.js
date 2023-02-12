import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Donate from '../pages/Donate';
import Find from '../pages/FindDonations';
import Home from '../pages/Home';
import Scan from '../pages/Scan';
import Entry from '../pages/SignUp';

const RoutesJs = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Entry type={'Login'} />}></Route>
      <Route exact path="/signup" element={<Entry type={'Sign-up'} />}></Route>
      <Route exact path="/donate" element={<Donate />}></Route>
      <Route exact path="/scan" element={<Scan />}></Route>
      <Route exact path="/find-donations" element={<Find />}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* {!user && <Route path="*" element={<Navigate to={'/'} />} />} */}
    </Routes>
  );
};

export default RoutesJs;
