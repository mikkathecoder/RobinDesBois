import React from 'react'
import "./Newsfeed.css"
import LineGraph from './LineGraph'
import TimeLine from "./TimeLine"

function Newsfeed() {
  return (
    <div className='newsfeed'>
        <div className="newsfeed__container">
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>€3,584,102.255</h1>
                    <p>+€2,021.621 (+0.01%) AJD</p>
                </div>
                <div className='newsfeed__chart'>
                   <LineGraph />
                   <TimeLine />
                </div>
            </div>
            <div className='newsfeed__buying__section'>
              <h2>Pouvoir d'Achat</h2>
              <h2>€5,191.001</h2>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed