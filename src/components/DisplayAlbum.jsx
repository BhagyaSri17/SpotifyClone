import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayContext } from '../context/PlayContext';

const DisplayAlbum = () => {
    const {id}=useParams();
    const albumData=albumsData[id]
    const {playWithId}=useContext(PlayContext)
    const bgcolor=albumData.bgColor;
    const linearGradient = `linear-gradient(to bottom, ${bgcolor}, #121212)`;
  return (
    <div style={{background:`${linearGradient}`, padding:'10px'}}>
    <NavBar/>
    <div className="albumdata">
    <img src={albumData.image} alt=""/>
    <div className='albumdesc'>
        <p className='playlist'>PlayList</p>
        <h2>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <p className='albump'>
            <img src={assets.spotify_logo} alt=""/>
       
        <b>Spotify</b>
        . 5,648,285 likes
        .<b>50 songs, </b>
        about 2 hr 30 min
        </p>
    </div>
    </div>
    <div className='heading'>
        <p><b>#</b>Title</p>
        <p>Album</p>
        <p className='date'> Date Added</p>
        <img src={assets.clock_icon} alt=""/>
    </div>
    <hr/>
    {
        songsData.map((item,index)=>(
            <div onClick={()=>playWithId(item.id)} key={index} className='songslist'> 
              <p>
                <b>{index+1}</b>
                <img src={item.image} alt=""/>
               {item.name}
              </p>
              <p className='albumname'> {albumData.name} </p>
              <p className='datevalue'> 5 days ago </p>
              <p className='duration'> {item.duration}</p>
            </div>
        ))
    }
    </div>
  )
}

export default DisplayAlbum