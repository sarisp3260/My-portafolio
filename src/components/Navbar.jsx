import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className='relative flex justify-between items-center bg-purple-300 p-4'>

      <p>Logo</p>

      <ul className='hidden justify-around space-x-4 sm:flex'>
        <li className='font-bold'><Link to={"/"}>Home</Link></li>
        <li className='font-bold'><Link to={"/about"}>About</Link></li>
        <li className='font-bold'><Link to={"/projects"}>Projects</Link></li>
        <li className='font-bold'><Link to={"/testimonial"}>Testimonials</Link></li>
        <li className='font-bold'><Link to={"/contact"}>Contact</Link></li>
      </ul>

      <div className='block sm:hidden' onClick={()=> setIsOpen(!isOpen)}>
        <FiMenu/>
      </div>

      {
        isOpen && (
          <ul className='block absolute top-14 right-0 bg-purple-300 p-4 text-right sm:hidden'>
            <li className='font-bold'><Link to={"/"}>Home</Link></li>
            <li className='font-bold'><Link to={"/about"}>About</Link></li>
            <li className='font-bold'><Link to={"/projects"}>Projects</Link></li>
            <li className='font-bold'><Link to={"/testimonial"}>Testimonials</Link></li>
            <li className='font-bold'><Link to={"/contact"}>Contact</Link></li>
          </ul>
        )
      }

    </nav>
  )
}

export default Navbar