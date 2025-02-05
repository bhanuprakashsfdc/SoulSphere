import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <main className="main" id="top">
        <Outlet />
      </main>      
    </div>
  )
}

export default Layout