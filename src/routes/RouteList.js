import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Entry from '../pages/SignUp';
import { getUser } from '../utils/actions';

const RoutesJs = () => {
  const user = getUser();
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Entry type={'Login'} />}></Route>
      <Route exact path="/signup" element={<Entry type={'Sign-up'} />}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* {!user && <Route path="*" element={<Navigate to={'/'} />} />} */}
    </Routes>
  );
};

export default RoutesJs;
