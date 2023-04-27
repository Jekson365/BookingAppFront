import React from 'react'
import { EachMovie } from './EachMovie'
import './movie.scss'

export const Movie = () => {
    const Movies = [
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 4"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
        {
            name: "name 1"
        },
        {
            name: "name 2"
        },
        {
            name: "name 3"
        },
    ]
    return (
        <div className='main'>
            <div className="title">
                <h1>ფილმები</h1>
            </div>
            <div className="container">
                {Movies.map((each) => {
                    return (
                        <>
                            <EachMovie data={each} />
                        </>
                    )
                })}
            </div>
        </div>

    )
}
