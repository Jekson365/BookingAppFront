import React from 'react'
import { useEffect } from 'react'

export const Detailed = (data: Object) => {
  useEffect(() => {
    console.log(data)
  })

  return (
    <>
      <div
        onClick={() => data.deActive(false)}
        className={`overlay ${!data.activeStatus ? "" : 'overlay-active'}`
        }></div>
      <div className={`detailed ${data.activeStatus ? 'active-detailed' : ""}`}>
        <div className="detailed-image"
        style={{ "backgroundImage": `url('${data.activeStatus ? data.detMovie.img : ""}')` }}
        ></div>
        <div className="description">
          <h1>{data.activeStatus ? data.detMovie.name : ""}</h1>
        </div>
      </div>
    </>
  )
}
