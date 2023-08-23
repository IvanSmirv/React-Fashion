import React from 'react'
import './Card.css'

const Card = (props) => {
    const { img, text } = props
    return (
        <div className="arrivals__card card">
            <div className="card__img">
                <img src={img} alt="" />
            </div>
            <div className="card__description">
                <div className="card__text">
                    <p>{text}</p>
                </div>
                <div>→</div>
            </div>
        </div>
    )
}

export default Card