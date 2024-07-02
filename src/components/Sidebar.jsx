import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'
function Sidebar() {
    const navigate=useNavigate();
    return (
        <div className='sidebar'>
            <div className='sidebar1'>
                <div onClick={()=>navigate('/')}className="icon">
                    <img src={assets.home_icon}></img>
                    <p>Home</p>
                </div>
                <div className="icon">
                    <img src={assets.search_icon}></img>
                    <p>Search</p>
                </div>
            </div>
            <div className='sidebar2'>
                <div className='Library'>
                    <div className="icon">
                        <img src={assets.stack_icon}></img>
                        <p>Your Library</p>
                    </div>
                    <div className='icon'>
                    <img src={assets.arrow_icon}></img>
                        <img src={assets.plus_icon}></img>
                    </div>
                </div>
                <div className='block1'>
                    <h4>Create Your First PlayList</h4>
                    <p>It's easy we will help you</p>
                    <button >Create Playlist</button>
                </div>
                <div className='block1'>
                    <h4>Let's findsome podcasts to follow</h4>
                    <p>we'll keep you update on new eposides</p>
                    <button >Browse BoardCast</button>
                </div>
            </div>
            
        </div>
    );
}
export default Sidebar