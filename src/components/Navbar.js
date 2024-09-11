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
        <nav className="flex justify-between my-5 mx-auto md:grid md:grid-cols-2 md:my-10">
        <h1 className="hover:border-transparent">
            <Link to='/' className="inline-block">
                <img src='/alkawsar_logo.svg' width='100' alt={title} />
            </Link>
        </h1>
        <div className="text-right">
            <Link to='/articles' className="ml-2.5 md:ml-5 font-normal pb-2 border-b-3 border-transparent hover:border-white">সকল আর্টিকেল</Link>
            <Link to='/issues' className="ml-2.5 md:ml-5 font-normal pb-2 border-b-3 border-transparent hover:border-white">পুরানো সংখ্যা</Link>
            <Link to='/sections' className="ml-2.5 md:ml-5 font-normal pb-2 border-b-3 border-transparent hover:border-white">বিভাগ</Link>
            <Link to='/topics' className="ml-2.5 md:ml-5 font-normal pb-2 border-b-3 border-transparent hover:border-white">বিষয়বস্তু</Link>
            <Link to='/authors' className="ml-2.5 md:ml-5 font-normal pb-2 border-b-3 border-transparent hover:border-white">লেখক</Link>
            <Link to='/about' className="ml-2.5 md:ml-5 font-normal pb-2 border-b-3 border-transparent hover:border-white">পরিচিতি</Link>
        </div>
    </nav>
    )
}

export default Navbar