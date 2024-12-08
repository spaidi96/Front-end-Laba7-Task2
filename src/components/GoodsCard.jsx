import React from 'react';

export default function GoodsCard(props) {
    return (
        <div className="goods-card">
            <img src={props.image} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>Cost: {props.cost}</p>
        </div>
    )
}