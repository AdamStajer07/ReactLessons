import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ReactMod() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
        <button onClick={()=>setIsModalOpen(true)}>Open modal</button>
        <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setIsModalOpen(false)} style={{overlay: {backgroundColor: 'gray'}, content: {backgroundColor: 'wheat'}}}>
            <h2>Modal title</h2>
            <p>Modal body</p>
            <div>
              <button onClick={()=>setIsModalOpen(false)}>Close</button>
            </div>
        </Modal>
    </div>
  )
}

export default ReactMod