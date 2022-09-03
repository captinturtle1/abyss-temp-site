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
        <title>Dashboard</title>
        <meta property="og:title" content="Abyss Dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://abyssfnf.com/dashboard" />
        <meta property="og:image" content="http://abyssfnf.com/banner.png" />
        <meta property="og:description" content="Private alpha community by application only. Over 8 figures of profit generated." />
        <meta name="theme-color" content="#202225" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <DashboardPage/>
    </>
  )
}

export default Dashboard
