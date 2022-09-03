import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>The Abyss</title>
        <meta property="og:title" content="The Abyss" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://abyssfnf.com/" />
        <meta property="og:image" content="http://abyssfnf.com/banner.png" />
        <meta property="og:description" content="Private alpha community by application only. Over 8 figures of profit generated." />
        <meta name="theme-color" content="#202225" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Landing/>
    </>
  )
}

export default Home
