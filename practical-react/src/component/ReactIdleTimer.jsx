import React, {useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ReactIdleTimer() {
    const [isLogged, setIsLogged] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)

    const onIdle = () => {
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }
    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('user is active')
    }
    const logOut = () => {
        setIsLogged(false)
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('user logged out')
    }
  return (
      <div>
        {
            isLogged ? <h2>Hello user</h2> : <h2>Hello Guest</h2>
        }    
        <Modal isOpen={modalIsOpen}>
            <h2>You've been idle for a while!</h2>
            <p>You'll be logged out soon</p>
            <div>
                <button onClick={logOut}>Log me out</button>
                <button onClick={stayActive}>Keep me signed in</button>
            </div>
        </Modal>
        <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default ReactIdleTimer