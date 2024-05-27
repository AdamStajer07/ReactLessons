import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FaReact } from 'react-icons/fa'
import {MdAlarm} from 'react-icons/md'

function Icons() {
  return (
    <IconContext.Provider value={{color: 'blue', size: '5rem'}}>
        <div className="App">
          <FaReact />
          <MdAlarm color='purple' size='10rem' />
        </div>
    </IconContext.Provider>
  )
}

export default Icons