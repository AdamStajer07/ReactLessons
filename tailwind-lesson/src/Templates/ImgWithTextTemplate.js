import React from 'react'

function ImgWithTextTemplate({img, title, text, duration='left'}) {
  return (
    <div className='flex justify-between w-4/5 min-h-12 max-h-240 rounded-md overflow-hidden'>
        {duration === 'left' && <img src={img} alt={img} className='object-cover hover:scale-125 transition-all'/>}
        <div className='z-10 bg-neutral-400 px-5 py-3'>
            <h2 className={`text-3xl tracking-widest font-bold ${duration === 'right' && 'text-right'}`}>{title}</h2>
            <p className={`tracking-wide ${duration === 'right' ? 'text-right' : 'text-justify'}`}>{text}</p>
        </div>
        {duration === 'right' && <img src={img} alt={img} className='object-cover hover:scale-125 transition-all'/>}
    </div>
  )
}

export default ImgWithTextTemplate