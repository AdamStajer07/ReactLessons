import React from 'react'

function Pagination({goToNextPage, goToPrevPage}) {
  return (
    <>
        {goToPrevPage && <button onClick={goToPrevPage}>Prev page</button>}
        {goToNextPage && <button onClick={goToNextPage}>Next page</button>}
    </>
  )
}

export default Pagination