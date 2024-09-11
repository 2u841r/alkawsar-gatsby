import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen w-full px-8 box-border max-w-7xl mx-auto">
            <Navbar />
            <div className="flex-grow mt-8 mb-8 md:mr-8 md:ml-24">
                {children}
            </div>
            <footer className="mt-auto text-center py-5">কপিরাইট © ২০২৪ মাসিক আলকাউসার</footer>
        </div>
    )
}

export default Layout