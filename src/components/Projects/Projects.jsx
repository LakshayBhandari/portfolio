import React from 'react'

import Balls from "../Balls/Balls.jsx";

import './Projects.css';


const Projects = () => {
  return (
    <div className='pcontainer'>
      <h1 className='ballheading'>Projects...</h1>
      <div className='projects'>


        <div className='projectcard' >

          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className='cardimg' src='./img/ytclone.png' alt='' />
              </div>
            </div>
          </div>

          <p className='pdesc'>Created a YouTube clone using the YouTube 3 API available on RapidAPI, utilizing React.js and
            Material UI to design and develop the front-end interface. Implemented features such as searching for videos,
            displaying video details, and playing videos in the browser
          </p>
          <div className='link'>
            <a href="https://ytclone-xi.vercel.app/" target="_blank" rel="noopener"  >LINK</a>
          </div>
        </div>

        <div className='projectcard'>

          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className='cardimg' src='./img/cryptophoto.png' alt='' />
              </div>
            </div>
          </div>

          <p className='pdesc'>A Website to track cryptocurrencies and get exchanges,Coingecko API integration for real-time data tracking,
            Line charts for tracking the price trend of cryptocurrencies over time through Chartjs also added Pagination functionality for
            navigation.
          </p>
          <div className='link'>
            <a href="https://cryptotracker-theta.vercel.app/" target="_blank" rel="noopener">LINK</a>
          </div>
        </div>


        <div className='projectcard'>

          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className='cardimg' src='./img/ecom.png' alt='' />
              </div>
            </div>
          </div>

          <p className='pdesc'>Created a visually appealing and intuitive shopping experience using React js,HTML and Sass.
            Made a slider to view trending items. Also added different page routes through react-router like
            for product description and featured products etc.
          </p>
          <div className='link'>
            <a href="https://client-iota-seven.vercel.app/" target="_blank" rel="noopener" >LINK</a>
          </div>
        </div>



      </div>
      <h1 className='ballheading'>Technologies...</h1>
      <Balls />
    </div>

  )
}

export default Projects