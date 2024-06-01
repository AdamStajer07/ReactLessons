import React from 'react'
import CountUp, {useCountUp} from 'react-countup' 

function ReactCountup() {
    const {countUp, start, pauseResume, reset, update} = useCountUp({duration: 5, end: 10000, startOnMount: false   })
  return (
    <div>
        <div>
            <h1>{countUp}</h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=>update(2000)}>Update</button>
            <button onClick={pauseResume}>Pause Resume</button>
        </div>
        <h1>
            <CountUp end={200} />
        </h1>
        <h1>
            <CountUp end={200} duration={5} />
        </h1>
        <h1>
            <CountUp start={100} end={200} duration={3} />
        </h1>
        <h1>
            <CountUp start={100} end={300} duration={2} prefix='$' decimals={2}/>
        </h1>
        <h1>
            <CountUp start={100} end={300} duration={2} suffix='USD' decimals={2}/>
        </h1>
    </div>
  )
}

export default ReactCountup