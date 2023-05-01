import React, { useEffect, useState } from 'react'

type EachPlace = {
    name: string,
    id: number,
    booked: boolean
}

export const Hall = () => {
    const Places: EachPlace[] = [
        { name: "place 1", id: 1, booked: false },
        { name: "place 2", id: 2, booked: false },
        { name: "place 3", id: 3, booked: false },
        { name: "place 4", id: 4, booked: false },
        { name: "place 5", id: 5, booked: false },
        { name: "place 6", id: 6, booked: false },
        { name: "place 7", id: 7, booked: false },
        { name: "place 8", id: 8, booked: false },
        { name: "place 9", id: 9, booked: false },
        { name: "place 10", id: 10, booked: false },
        { name: "place 11", id: 11, booked: false },
        { name: "place 12", id: 12, booked: false },
        { name: "place 13", id: 13, booked: false },
        { name: "place 14", id: 14, booked: false },
        { name: "place 15", id: 15, booked: false },
        { name: "place 16", id: 16, booked: false },
        { name: "place 17", id: 17, booked: false },
        { name: "place 18", id: 18, booked: false },
        { name: "place 19", id: 19, booked: false },
        { name: "place 20", id: 20, booked: false },
        { name: "place 21", id: 21, booked: false },
        { name: "place 22", id: 22, booked: false },
        { name: "place 23", id: 23, booked: false },
        { name: "place 24", id: 24, booked: false },
        { name: "place 25", id: 25, booked: false },
        { name: "place 26", id: 26, booked: false },
        { name: "place 27", id: 27, booked: false },
        { name: "place 28", id: 28, booked: false },
        { name: "place 29", id: 29, booked: false },
        { name: "place 30", id: 30, booked: false }
    ];
    const [booked, setBooked] = useState<EachPlace[]>(Places)
    const [pickedPlaces, setPickedPlaces] = useState<EachPlace[]>([])

    const BookPlace = (CurrentPlace: EachPlace, id: number) => {

        const updatedArray = booked.map((each) => {
            if (each.id == id) {
                return { ...each, booked: true };
            }
            else {
                return each
            }
        })

        // CurrentPlace.booked = true
        setBooked(updatedArray)
        setPickedPlaces([...pickedPlaces, CurrentPlace])
    }
    useEffect(() => {
        console.log(booked)
        console.log(pickedPlaces)
    }, [booked])

    return (
        <>
            <div className="booking-section">
                <div className="places">
                    {booked.map((each: EachPlace) => {
                        return (
                            <>
                                <div className={`place ${each.booked ? "booked-place" : ""}`}
                                    onClick={(e) => BookPlace(each, each.id)}
                                ></div>
                            </>
                        )
                    })}
                </div >
                <div className="tickets">
                    <div className="ticket-cover">
                        {pickedPlaces.map((each : EachPlace) => {
                            return (
                                <>
                                    <div className="ticket"></div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
