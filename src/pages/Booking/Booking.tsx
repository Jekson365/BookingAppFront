// @ts-nocheck

import '../../styles/booking.scss'
import { Hall } from '../../components/Hall'
import { Info } from './Info'
import Tickets from './Tickets'

export const Booking = () => {
  return (
    <>
      <div className='main-booking'>
        <div className="hall-container">
          <Info />
          <Tickets />
        </div>
      </div>
    </>
  )
}
