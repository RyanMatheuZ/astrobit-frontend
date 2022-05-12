import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import About from '../views/About'
import Market from '../views/Market'
import Contact from '../views/Contact'
import Admin from '../views/Admin'
import Login from '../views/Login'
import Register from '../views/Register'

const WebSiteRoutes = () =>
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/market" element={<Market />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>

export default WebSiteRoutes
