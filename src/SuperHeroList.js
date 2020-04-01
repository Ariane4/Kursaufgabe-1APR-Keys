import React from 'react';
import './SuperHeroList.css';

function SuperHeroList(props) {
    console.log(props)
    const SuperHero = props.Ariane.map(items =>
        < div >
            <img src={items.urlImage} alt="" />
            <p>{items.id}</p>
            <h2>{items.name}</h2>
            <h3>{items.email}</h3>
        </div >
    )
    return (
        <div className="super-hero" >{SuperHero}</div>
    )
}

export default SuperHeroList