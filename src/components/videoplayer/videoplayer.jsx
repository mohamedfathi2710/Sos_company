import React, {useRef} from 'react'
import './videoplayer.css'
import tarikvideo from '../../assets/TarikFadil.mp4'

function videoplayer({playState, setPlayState}) {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={tarikvideo} autoPlay muted controls></video>
    </div>
  )
}

export default videoplayer
