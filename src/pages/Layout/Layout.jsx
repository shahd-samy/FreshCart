import React from 'react'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet></Outlet>
       
      <Footer />

    </>
  )
}
