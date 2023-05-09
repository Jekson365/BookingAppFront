// @ts-nocheck
import React from 'react'

type Props = {}

export default function Tickets({ }: Props) {
    const places = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
        <div className="col col-2">
            <div className="hall">
                <div className="places"></div>
            </div>
            <div className="tickets">
                <div className="ticket"></div>
            </div>
        </div>
    )
}