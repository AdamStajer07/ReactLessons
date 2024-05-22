import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
  return (
    <footer className='footer'>
        <div className="footer__col">
            <span onClick={()=>navigate('/')}  className="footer__text footer__text-large">Contact</span>
            <span className="footer__text">mail: contact@sweetcafe.com</span>
            <span className="footer__text">tel: 123 312 123</span>
        </div>
        <div className="footer__col">
            <span onClick={()=>navigate('/')} className="footer__text footer__text-large">Home</span>
            <span onClick={()=>navigate('/products')} className="footer__text footer__text-large">Products</span>
        </div>
    </footer>
  )
}

export default Footer