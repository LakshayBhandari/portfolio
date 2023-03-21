import React from 'react'

import './Balls.css'
import CSS from "../../assets/tech/css.png"
import git from "../..//assets/tech/git.png"
import html from "../../assets/tech/html.png"
import javascript from "../../assets/tech/javascript.png"
import mongodb from "../../assets/tech/mongodb.png"
import reactjs from "../../assets/tech/reactjs.png"
import redux from "../../assets/tech/redux.png"

const Balls = () => {
  return (
    <div className='hoverballcomponent'>

    <div className="hover-balls">
    <div className="ball" options={{ max: 25 }}>
      <div  className="blogo">
        <img src={CSS} alt="Logo 1" />
      </div>
    </div>
    <div className="ball" options={{ max: 25 }}>
      <div  className="blogo">
        <img src={git} alt="Logo 2" />
      </div>
    </div>
    <div className="ball" options={{ max: 25 }}>
      <div className="blogo">
        <img src={html} alt="Logo 3" />
      </div>
    </div>
    <div className="ball" options={{ max: 25 }}>
      <div className="blogo">
        <img src={javascript} alt="Logo 3" />
      </div>
    </div> 
    <div className="ball" options={{ max: 25 }}>
      <div className="blogo">
        <img src={mongodb} alt="Logo 3" />
      </div>
    </div>
    <div className="ball" options={{ max: 25 }}>
      <div className="blogo">
        <img src={reactjs} alt="Logo 3" />
      </div>
    </div><div className="ball" options={{ max: 25 }}>
      <div className="blogo">
        <img src={redux} alt="Logo 3" />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Balls