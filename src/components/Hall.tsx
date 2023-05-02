import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { EachMovieType } from '../pages/movie/Movie';

type EachPlace = {
    name: string,
    id: number,
    booked: boolean,
    price: number,
}

export const Hall = () => {
    const Places: EachPlace[] = [
        { name: "place 1", id: 1, booked: false, price: 10 },
        { name: "place 2", id: 2, booked: false, price: 10 },
        { name: "place 3", id: 3, booked: false, price: 10 },
        { name: "place 4", id: 4, booked: false, price: 10 },
        { name: "place 5", id: 5, booked: false, price: 10 },
        { name: "place 6", id: 6, booked: false, price: 10 },
        { name: "place 7", id: 7, booked: false, price: 10 },
        { name: "place 8", id: 8, booked: false, price: 10 },
        { name: "place 9", id: 9, booked: false, price: 10 },
        { name: "place 10", id: 10, booked: false, price: 8 },
        { name: "place 11", id: 11, booked: false, price: 8 },
        { name: "place 12", id: 12, booked: false, price: 8 },
        { name: "place 13", id: 13, booked: false, price: 8 },
        { name: "place 14", id: 14, booked: false, price: 8 },
        { name: "place 15", id: 15, booked: false, price: 8 },
        { name: "place 16", id: 16, booked: false, price: 8 },
        { name: "place 17", id: 17, booked: false, price: 8 },
        { name: "place 18", id: 18, booked: false, price: 8 },
        { name: "place 19", id: 19, booked: false, price: 8 },
        { name: "place 20", id: 20, booked: false, price: 8 },
        { name: "place 21", id: 21, booked: false, price: 8 },
        { name: "place 22", id: 22, booked: false, price: 8 },
        { name: "place 23", id: 23, booked: false, price: 8 },
        { name: "place 24", id: 24, booked: false, price: 8 },
        { name: "place 25", id: 25, booked: false, price: 8 },
        { name: "place 26", id: 26, booked: false, price: 8 },
        { name: "place 27", id: 27, booked: false, price: 8 },
        { name: "place 28", id: 28, booked: false, price: 8 },
        { name: "place 29", id: 29, booked: false, price: 8 },
        { name: "place 30", id: 30, booked: false, price: 8 }
    ];

    const location = useLocation()

    const [currentMoviId, setCurrentMovieId] = useState<string>(location.pathname.split("/")[2])
    const [booked, setBooked] = useState<EachPlace[]>(Places)
    const [pickedPlaces, setPickedPlaces] = useState<EachPlace[]>([])
    const [amount, setAmount] = useState<number>(0)
    const [pickedMovie, setPickedMovie] = useState<EachMovieType>()

    function CalculateAmount(tickets: EachPlace[]): void {
        var finalAmount = 0
        tickets.map((each) => {
            // setAmount(amount + each.price)
            finalAmount += each.price
        })
        setAmount(finalAmount)
        console.log(finalAmount)
    }
    const BookPlace = (CurrentPlace: EachPlace, id: number) => {
        if (CurrentPlace.booked == false) {

            const updatedArray = booked.map((each) => {
                if (each.id == id) {
                    return { ...each, booked: true };
                }
                else {
                    return each
                }
            })
            setBooked(updatedArray)
            setPickedPlaces([...pickedPlaces, CurrentPlace])
        }
        // CurrentPlace.booked = true
    }
    useEffect(() => {
        console.log(booked)
        console.log(pickedPlaces)
        CalculateAmount(pickedPlaces)
    }, [pickedPlaces])

    const deleteTicket = (id: number, e: React.MouseEvent<HTMLElement>) => {
        var updatedArray = pickedPlaces.filter(item => item.id != id)

        var updatedBooked: any[] = booked.map((each) => {
            if (each.id == id) {
                each.booked = false
            }
        })
        console.log(updatedBooked)
        // setBooked(updatedBooked)


        setPickedPlaces(updatedArray)
    }



    useEffect(() => {
        axios.get("http://localhost:8080/movie")
            .then((res) => {
                res.data.map((each: EachMovieType) => {
                    if (String(each.id) == currentMoviId) {
                        setPickedMovie(each)
                    }
                })
            })
    }, [pickedMovie])
    return (
        <>
            <div className="dasdasn">
                <div className="info-image">
                    <div className="image-laas"
                        style={{ "backgroundImage": `url('${pickedMovie?.img}')` }}
                    ></div>
                    <div className="current-content">
                        <h1>{pickedMovie?.name}</h1>
                        <p>ჟანრი: <span className='val'>{pickedMovie?.genre}</span></p>
                        <p>როლებში: <span className='val'>{pickedMovie?.roles}</span></p>
                        <p>აღწერა: <span className='val'>{pickedMovie?.description}</span></p>
                        <p>პრემიერა: <span className='val'>{pickedMovie?.date}</span></p>
                    </div>
                </div>
                <div className="booking-section">
                    <div className="places">
                        {booked.reverse().map((each: EachPlace) => {
                            return (
                                <>
                                    <div className={`place ${each.booked ? "booked-place" : ""}`}
                                        onClick={(e) => BookPlace(each, each.id)}
                                    >{each.id}</div>
                                </>
                            )
                        })}
                    </div>

                    <div className="tickets">
                        <div className='priceall'>
                            <div className='amount'>რაოდენობა {pickedPlaces.length}</div>
                            <div>ჯამი : {amount}$</div>
                        </div>
                        <div className="ticket-cover">
                            {pickedPlaces.map((each: EachPlace) => {
                                return (
                                    <>
                                        <div className="ticket">
                                            <div className="col-1">
                                                <div>დასახელება</div>
                                                <div className='price'>{each.price.toFixed(2)}</div>
                                            </div>
                                            <div className="col-2">
                                                <div className='time'>17:51</div>
                                                <div className='title'>{each.name}</div>
                                            </div>
                                            <div className="col-3">
                                                <button onClick={(e) => deleteTicket(each.id, e)}>წაშლა</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
