import React, {forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const TippyComponent = ({text}) => {
    return <span style={{color: 'orange'}}>{text}</span>
}

const CustomChild = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>First line</div>
            <div>Second line line</div>
        </div>
    )
})

function ReactTippy() {
  return (
    <div style={{textAlign: 'center'}}>
        <div style={{paddingBottom: '20px'}}>
            <Tippy content='Basic Tooltip' arrow={false} delay={1000} placement='right'>
                <button>Hover</button>
            </Tippy>
        </div>
        <div style={{paddingBottom: '20px'}}>
            <Tippy content={<span style={{color: 'orange'}} placement='top-start'>Colored</span>}>
                <button>Hover</button>
            </Tippy>
        </div>
        <div style={{paddingBottom: '20px'}}>
            <Tippy content={<TippyComponent text={'Colored'}/>}>
                <button>Hover</button>
            </Tippy>
        </div>
        <div style={{paddingBottom: '20px', textAlign: 'center'}}>
            <Tippy content={<TippyComponent text={'Colored'}/>}>
                <CustomChild/>
            </Tippy>
        </div>
    </div>
  )
}

export default ReactTippy