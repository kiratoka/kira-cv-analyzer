import React from 'react'
import { Link } from 'react-router'

const Navbar = ({ auth}: { auth?: boolean }) => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className='text-2xl font-bold text-gradient'>KiraCV</p>
            </Link>
            <div>
                <Link to="/upload" className='primary-button w-fit' >
                    Upload CV
                </Link>
                <Link to={"/auth"} className='ml-4 w-fit text-red-600 hover:bg-red-200 rounded-full px-4 py-2'>
                    Logout
                </Link>
            </div>
        </nav>
    )
}

export default Navbar