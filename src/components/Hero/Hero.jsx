import React from 'react'
import Navbar from '../Navbar/Navbar';

import './Hero.css';



const Hero = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <div className='hcontainer'>
        <div className='left'>
          <h1 className='heading'>Think. Make. solve. </h1>
          <div className='whatido'>
          <img className='line' src="./img/line.png" alt='' />
            <div className='subtitle'>What I Do</div>
          </div>
          <p className='desc'> I am a 4th year B.Tech CSE student who enjoys coding and development. I have a strong foundation in computer science theory and experience in building web applications and mobile apps..</p>
        </div>
        <div className='right'>
          <section>
          <img className='ironman' src="https://media2.giphy.com/media/iIZO5d4IfSa0nkyLju/giphy.gif?cid=ecf05e479nzmcvun3zmhrd0x8l6p3jann7k3177qfe3vps2f&rid=giphy.gif&ct=s" alt=''/>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero