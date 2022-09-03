import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'

import DashboardPage from '../components/DashboardPage'


const Dashboard: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Abyss Dashboard</title>
        <meta property="og:title" content="Abyss Dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:image" content="http://localhost:3000/banner.png" />
        <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <meta name="theme-color" content="#0f172a" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <DashboardPage/>
    </>
  )
}

export default Dashboard
