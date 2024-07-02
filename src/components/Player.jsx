import { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayContext } from '../context/PlayContext'
function Player() {
    const {seekBar,seekbg,playStatus,play,pause,track,time,previous,next,seekSong}=useContext(PlayContext)
    return (
        <div className='players'>
            <div className='player'>
                <img src={track.image}></img>
                <div className='text'>
                    {track.name}
                    <p> {track.desc.slice(0, 12)}</p>

                </div>


            </div>
            <div className='icons'>
                <div className='playicons'>
                    <img src={assets.shuffle_icon}></img>
                    <img onClick={previous} src={assets.prev_icon}></img>
                    {playStatus?  <img onClick={pause} src={assets.pause_icon}></img>
                    :  <img onClick={play} src={assets.play_icon}></img>}
                 
                   
                    <img onClick={next} src={assets.next_icon}></img>
                    <img src={assets.loop_icon}></img>

                </div>
                <div className='time'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekbg} onClick={seekSong}className='line'>
                        <hr ref={seekBar} className='hline' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
       <div className='iconsAside'>
       <img src={assets.plays_icon}></img>
        <img src={assets.mic_icon}></img>
        <img src={assets.queue_icon}></img>
         <img src={assets.speaker_icon}></img>
         <img src={assets.volume_icon}></img>
         <div className='volume'></div>
         <img src={assets.mini_player_icon}></img>
         <img src={assets.zoom_icon}></img>
       </div>
        </div>
    )
}
export default Player