import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen w-full px-8 box-border max-w-7xl mx-auto">
            <Navbar />
            <div className="flex-grow mt-8 mb-8 md:mr-8 md:ml-24">
                {children}
            </div>
            <footer className="mt-auto text-center py-5">
                <div>
                    <p> কপিরাইট © ২০২৪ মাসিক আলকাউসার</p>
                    <p> Developer by <Link className='text-green-400' to='https://zmt3.com'> Zubair Ibn Zamir - ZMT3 </Link></p>
                    <Link className='text-blue-400' to='https://github.com/2u841r/alkawsar-gatsby'>source code on gitbub</Link>
                </div>
            </footer>
        </div>
    )
}

export default Layout