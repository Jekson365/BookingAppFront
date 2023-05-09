// @ts-nocheck
import React, { useState } from 'react'

type Props = {}

type EachPlace = {
    placeId: number,
    placeName: string
}

export default function Tickets({ }: Props) {
    const [hall, setHall] = useState<EachPlace[]>([
        { placeId: 1, placeName: 'palce 1' },
        { placeId: 2, placeName: 'palce 2' },
        { placeId: 3, placeName: 'palce 3' },
        { placeId: 4, placeName: 'palce 4' },
        { placeId: 5, placeName: 'palce 5' },
        { placeId: 6, placeName: 'palce 6' },
        { placeId: 7, placeName: 'palce 7' },
        { placeId: 8, placeName: 'palce 8' },
        { placeId: 9, placeName: 'palce 9' },
        { placeId: 10, placeName: 'palce 10' },
        { placeId: 11, placeName: 'palce 11' },
        { placeId: 12, placeName: 'palce 12' },
        { placeId: 13, placeName: 'palce 13' },
        { placeId: 14, placeName: 'palce 14' },
        { placeId: 15, placeName: 'palce 15' },
        { placeId: 16, placeName: 'palce 16' },
        { placeId: 17, placeName: 'palce 17' },
        { placeId: 18, placeName: 'palce 18' },
        { placeId: 19, placeName: 'palce 19' },
        { placeId: 20, placeName: 'palce 20' },
        { placeId: 21, placeName: 'palce 21' },
        { placeId: 22, placeName: 'palce 22' },
        { placeId: 23, placeName: 'palce 23' },
        { placeId: 24, placeName: 'palce 24' },
        { placeId: 25, placeName: 'palce 25' },
        { placeId: 26, placeName: 'palce 26' },
        { placeId: 27, placeName: 'palce 27' },
        { placeId: 28, placeName: 'palce 28' },
        { placeId: 29, placeName: 'palce 29' },
        { placeId: 30, placeName: 'palce 30' }
    ])

    const places: Array<EachPlace> = []
    return (
        <div className="col col-2">
            <div className="hall">
                <div className="places">
                    {hall && hall.map((each: EachPlace) => {
                        return (
                            <>
                                <div className="place"></div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="tickets">
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
                    <div className="ticket-component"></div>
                </div>
                <div className="addition-buttons">
                    <button className='dec'>გაუქმება</button>
                    <button>გადახდა</button>
                </div>
            </div>
        </div>
    )
}