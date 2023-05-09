// @ts-ignore

import React from 'react'

type Props = {}

export const Info = (props: Props) => {
    return (
        <div className="col col-1">
            <div className="container-image"
                style={{ 'backgroundImage': `url("https://static.tkt.ge/img/fa44a27f-ba48-49ce-aed0-084d383fa116.jpeg")` }}
            ></div>
            <div className="container-content">
                <h1>უდიპლომო სასიძო</h1>
                <ul className='detailed-descr'>
                    <li>
                        <p><span>ჟანრი:</span>საშინელებათა</p>
                    </li>
                    <li>
                        <p><span>როლებში:</span>კობი ბრაიანტი,მაიკლ ჯექსონი,მუჰამედ ალი</p>
                    </li>
                    <li>
                        <p><span>აღწერა:</span>სამი მეგობარი გადაწყვეტსს წამოიწყოს სტარტაპი რომელიც მიზნად დაისახავს ხალხში რუსული პროპაგანუდლი აზრების და ყლოებების რეალიზაცია</p>
                    </li>
                    <li>
                        <p><span>პრემიერა:</span>20/20/23</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}