import React from 'react'
import "./StatsRow.css"

function StatsRow() {
  return (
    <div className="row">
      <div className="row__intro">
        <h1>AAPL</h1>
        <p>200 shares</p>
      </div>
      <div className="row__chart">
        
      </div>
      <div className="row__numbers">
        <p className="row__price">€200</p>
        <p className="row__percentage"> +200%</p>
      </div>
    </div>
  )
}

export default StatsRow