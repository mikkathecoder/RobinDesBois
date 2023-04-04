import React from 'react'

function Chip() {
  return (
    <div className='chip'>
        <div className='chip__avatar'>
            <img src={props.image} alt="chip" width={10} height={10}></img>
        </div>
        <div className='chip__label'>

        </div>
    </div>
  )
}

export default Chip