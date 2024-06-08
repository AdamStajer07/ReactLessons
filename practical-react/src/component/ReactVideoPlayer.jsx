import React from 'react'
import ReactPlayer from 'react-player'

function ReactVideoPlayer() {
  return (
    <div>
        <ReactPlayer 
        width='480px' 
        height='240px' 
        controls 
        url='https://youtu.be/7sDY4m8KNLc?feature=shared' 
        onReady={()=>console.log('onReady Callback')}
        onStart={()=>console.log('onStart Callback')}
        onPause={()=>console.log('onPause Callback')}
        onEnded={()=>console.log('onEnded Callback')}
        onError={()=>console.log('onError Callback')}
        />
    </div>
  )
}

export default ReactVideoPlayer