import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='srchmob flex flex-row gap-7 mt-4 font-semibold navbar'>
        <Link to="/Women">
        <li className='navbarelement'>Women</li>
        </Link>
        <Link to="/Women">
        <li className='navbarelement'>Men</li>
        </Link>
        <Link to="/Women">
        <li className='navbarelement'>Kids</li>
        </Link>
        <Link to="/Women">
        <li className='navbarelement'>Sports</li>
        </Link>
        <Link to="/Women">
        <li className='navbarelement'>Brands</li>
         </Link>
         <Link to="/Women">
        <li className='navbarelement'>New</li> </Link>
        <Link to="/Women">
        <li className='navbarelement'>Sale</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
