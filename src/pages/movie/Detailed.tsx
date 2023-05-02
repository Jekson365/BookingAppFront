import { FC } from 'react'


type props = {
  detMovie: any,
  isActive: boolean,
  deActive: any,
  activeStatus: boolean
}

export const Detailed: FC<props> = ({ detMovie, deActive, activeStatus }) => {
  const rediRect = (loc: string) => {
    window.location.href = `/booking/${loc.toString()}`
    console.log(loc)
  }
  return (
    <>
      <div
        onClick={() => deActive(false)}
        className={`overlay ${!activeStatus ? "" : 'overlay-active'}`
        }></div>
      <div className={`detailed ${activeStatus ? 'active-detailed' : ""}`}>
        <div className="detailed-image"
          style={{ "backgroundImage": `url('${activeStatus ? detMovie.img : ""}')` }}
        ></div>
        <div className="description">
          <h1>{activeStatus ? detMovie.name : ""}</h1>
          <p>ჟანრი: <span className='val'>{detMovie?.genre}</span></p>
          <p>როლებში: <span className='val'>{detMovie?.roles}</span></p>
          <p>აღწერა: <span className='val'>{detMovie?.description}</span></p>
          <p>პრემიერა: <span className='val'>{detMovie?.date}</span></p>
        </div>
        <div className="actions-buttons">
          <button onClick={() => rediRect(detMovie?.id)}>დაჯავშნა</button>
        </div>
      </div>
    </>
  )
}
