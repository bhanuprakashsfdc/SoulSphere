import React from 'react'
import { Outlet } from 'react-router-dom';
import MiniHeader from '../components/MiniHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniFooter from '../components/MiniFooter';

const Layout = () => {
  return (
    <div className="layout">
      <MiniHeader />
      <Header />
      <main className="main" id="top">
        <Outlet />
      </main>    
      <Footer />
      <MiniFooter />  
    </div>
  )
}

export default Layout