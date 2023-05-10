// @ts-nocheck
import React from 'react'

type Props = {
    slideTicket: boolean,
    setSlideTicket: React.Dispatch<React.SetStateAction<boolean>>

}
import { useState } from 'react'
export const Ticketcomp = ({ slideTicket, setSlideTicket }: Props) => {

    return (
        <>
            <div className={`tickets ${slideTicket ? 'active-tickets' : ""}`}>
                <div className="amount">
                    <div className="price">ფასი : 38$</div>
                    <div className="raod">რაოდენობა : 20</div>
                </div>
                <div className="ticket">
                    <div className="ticket-component"></div>
                    <div className="ticket-component"></div>
                    <div className="ticket-component"></div>
                    <div className="ticket-component"></div>
                    <div className="ticket-component"></div>
                    <div className="ticket-component"></div>
                </div>
                <div className="addition-buttons">
                    <button className='dec'>გაუქმება</button>
                    <button>გადახდა</button>
                </div>
            </div>
        </>
    )
}