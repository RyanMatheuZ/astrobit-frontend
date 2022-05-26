import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Market from '../views/Market';
import Contact from '../views/Contact';
import Login from '../views/Login';
import Register from '../views/Register';
import Admin from '../views/Admin';
import NotFound from '../views/NotFound';

const WebSiteRoutes = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/market" element={<Market />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default WebSiteRoutes;
