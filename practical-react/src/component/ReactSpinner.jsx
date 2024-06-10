import React from 'react'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
import {css} from '@emotion/core'

const loaderCSS = css`
    margin-top: 24px;
    margin-bottom: 24px;
`

function ReactSpinner() {
  return (
    <>
        <BounceLoader css={loaderCSS} size={24} color='red' loading/>
        <BarLoader css={loaderCSS} size={48} color='orange' loading/>
        <BeatLoader css={loaderCSS} size={72} color='maroon' loading/>
    </>
  )
}

export default ReactSpinner