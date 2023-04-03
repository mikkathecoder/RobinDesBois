import React from 'react'
import "./Newsfeed.css"
import LineGraph from './LineGraph'

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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed