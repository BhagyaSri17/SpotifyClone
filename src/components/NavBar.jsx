import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate()
  
  return (
    <>
    <div className='navbar'>
<div className='nav'>
    <img onClick={()=>{navigate(-1)}} src={assets.arrow_left} alt=""></img>
    <img  onClick={()=>{navigate(1)}} src={assets.arrow_right} alt=""></img>
</div>
<div className='navright'>
<p className='premium'>Explore Premium</p>
<p className='install'>Install App</p>
<p className='account'>B</p>
</div>
    </div>
<div className='navbar2'>
<p className='all'>All</p>
<p className='music'>Music</p>
<p className='music'>Podcasts</p>
</div>
    </>
  )
}

export default NavBar