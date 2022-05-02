import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import Home from './views/Home'
import About from './views/About'
import Market from './views/Market'

import './styles/global.css'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
