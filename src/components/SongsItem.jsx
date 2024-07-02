import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayContext } from '../context/PlayContext'
const SongsItem = ({name,image,desc,id}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/albums/${id}`)
    playWithId(id)
  }
  const {playWithId}=useContext(PlayContext)
  return (
    <div onClick={handleClick} className='albumItem'>
    <img src={image} alt=''></img>
     <p className='name'>{name}</p>
     <p className='desc'>{desc}</p>
    </div>
  )
}

export default SongsItem