import React from 'react'

import Header from '../../Modules/Header'
import Footer from '../../Modules/Footer'

const LayoutDefault = ({ children }) =>
  <>
    <Header />
    {children}
    <Footer />
  </>

export default LayoutDefault
