import React from 'react'
import { useNavigate } from 'react-router-dom'
const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/albums/${id}`)
  }
  return (
    <div className='albumItem' onClick={handleClick}>
     <img src={image} alt=''></img>
     <p className='name'>{name}</p>
     <p className='desc'>{desc}</p>
    </div>
  )
}

export default AlbumItem