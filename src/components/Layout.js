import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full px-8 box-border max-w-7xl mx-auto">
      <Navbar />
      <div className="flex-grow mt-8 mb-8">
        {children}
      </div>
      <footer className="mt-auto text-center py-5">
        <div>
          <p> কপিরাইট © ২০২৪ মাসিক আলকাউসার</p>
          <p>
            Developer by&nbsp;
            <a
              className="text-green-400"
              href="https://zubairiz.com"
              target="_blank"
              rel="noreferrer"
            >
              Zubair Ibn Zamir
            </a>{' '}
            -{' '}
            <a
              className="text-green-500"
              href="https://zmt3.com"
              target="_blank"
              rel="noreferrer"
            >
              ZMT3
            </a>
          </p>
          <a
            className="text-blue-400"
            href="https://github.com/2u841r/alkawsar-gatsby"
            target="_blank"
            rel="noreferrer"
          >
            source code on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
