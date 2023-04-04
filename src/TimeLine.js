import React from 'react'
import "./TimeLine.css"

function TimeLine() {
  return (
    <div className="timeline__container">
    <div className="timeline__buttons__container">
        <div className="timeline__button">LIVE</div>
        <div className="timeline__button">1J</div>
        <div className="timeline__button active">1S</div>
        <div className="timeline__button">3M</div>
        <div className="timeline__button">1ANS</div>
        <div className="timeline__button">VIE</div>                                                                                
    </div>
    </div>  
  )
}

export default TimeLine