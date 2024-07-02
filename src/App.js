
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Player from './components/Player.jsx';
import Display from './components/Display.jsx';
import { useContext } from 'react';
import { PlayContext } from './context/PlayContext.jsx';

function App() {
  const {audioRef,track}=useContext(PlayContext);
  return (
    <div>
      <div className='components'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;
