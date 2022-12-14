import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex flex-col justify-between min-h-screen ">
        <Navbar />

        <main className="container m-auto mt-4 px-6">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
