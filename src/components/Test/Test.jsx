import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Test = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Test Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
        className="shadow-lg flex w-full h-16 bg-white items-center px-4"
      >
        <span className="text-green-600 font-bold text-2xl select-none">
        TEST REACT BUILD
        </span>
        <div className="test-img"/>
      </div>
    </HelmetProvider>
  )
}

export default Test
