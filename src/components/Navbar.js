import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {

    const data = useStaticQuery(graphql`
      query MyQuery1 {
        site {
            siteMetadata {
                title
                }
            }
        }
        `)

    const { title } = data.site.siteMetadata;

    return (
        <nav>
            <h1>  <Link to='/'> <img src='/alkawsar_logo.svg' width='100px' /> </Link> </h1>
            <div className='links'>
                <Link to='/articles'> সকল আর্টিকেল </Link>
                <Link to='/issues'> পুরানো সংখ্যা </Link>
                <Link to='/sections'> বিভাগ </Link>
                <Link to='/topics'> বিষয়বস্তু </Link>
                <Link to='/authors'> লেখক </Link>
                <Link to='/about'> পরিচিতি </Link>
            </div>
        </nav>
    )
}

export default Navbar