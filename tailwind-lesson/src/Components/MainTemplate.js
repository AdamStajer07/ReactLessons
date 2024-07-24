import React from 'react'

function MainTemplate({children}) {
  return (
    <div className='flex justify-center mx-auto my-3 w-2/3 bg-zinc-300 p-5 rounded-md'>
        {children}
    </div>
  )
}

export default MainTemplate