import React from 'react'
import { useEffect } from 'react'

export const Detailed = (detMovie: Object) => {
  useEffect(() => {
    console.log(detMovie.detMovie.name)
  }, [])
  return (
    <div className='detailed'>
      <div className="detailed-image"
        style={{ "backgroundImage": `url('${detMovie.detMovie.img}')` }}
      ></div>
      <div className="description">
        <h1>{detMovie.detMovie.name}</h1>
      </div>
    </div>
  )
}
