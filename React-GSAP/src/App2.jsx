import React, { useRef } from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap';

const App2 = () => {

    const circleref = useRef();
    useGSAP(()=>{
        gsap.from(circleref.current, {
            y:200,
            opacity: 0,
            duration: 2,
            delay: 1
        })
    })
  return (
    <main>
        <div className="container1">
            <div className="box" ></div>
            <div className="circle" ref={circleref}></div>
        </div>
        <div className="container2">
            <div className="box"></div>
            <div className="circle"></div>
        </div>
    </main>
  )
}

export default App2