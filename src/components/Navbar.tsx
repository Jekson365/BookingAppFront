
import '../styles/navbar.scss'
import { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

export const Navbar = () => {
    const [bar, setBar] = useState(true);

    return (
        <>
            <div className={`side-bar ${bar ? 'active-bar' : ""}`}>
                <div className={`toggle-button ${bar ? 'rot-button' : ""}`} onClick={() => setBar(!bar)}>
                    <MdArrowForwardIos />
                </div>
                <div className="side-bar-inner">
                    <ul>
                        <a href="">კინო</a>
                        <a href="">თეატრი</a>
                        <a href="">სივრცე</a>
                        <a href="">რკინიგზა</a>
                        <a href="">ავიარეისები</a>
                    </ul>
                    <div className="log-out">
                        <a href="">შესვლა</a>
                    </div>
                </div>
            </div>
        </>
    )
}
