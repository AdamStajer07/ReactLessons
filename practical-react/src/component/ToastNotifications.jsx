import React from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({closeToast}) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

toast.configure()
function ToastNotifications() {
    const notify = () => {
        toast('Basic Notification', {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
        toast.success('Success Notification', {position: toast.POSITION.TOP_CENTER})
        toast.info('Info Notification', {position: toast.POSITION.TOP_RIGHT})
        toast.warn(<CustomToast/>, {position: toast.POSITION.BOTTOM_LEFT})
        toast.error('Error Notification', {position: toast.POSITION.BOTTOM_CENTER})
        toast('Basic Notifiaction', {position: toast.POSITION.BOTTOM_RIGHT})
    }
  return (
    <>
        <button onClick={notify}>Notify</button>
    </>
  )
}

export default ToastNotifications