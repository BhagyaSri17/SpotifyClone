import React from 'react'
import NavBar from './NavBar'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'
import { albumsData ,songsData} from '../assets/assets'
const DisplayHome = () => {
  return (
    <>
        <NavBar/>
        <div className='album'>
          <h1>Featured Charts</h1>
          <div className='albumList'>
             {albumsData.map((item,index)=>(
                 <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>
                )
          )}
          </div>
        </div>
        <div className='album'>
          <h1>Today's Biggest Hits</h1>
          <div className='albumList'>
             {songsData.map((item,index)=>(
                 <SongsItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>
                )
          )}
          </div>
        </div>
    </>
  )
}

export default DisplayHome