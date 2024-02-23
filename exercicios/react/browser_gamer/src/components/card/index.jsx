import React from 'react'
import "./styles.css"

const Card = ({title, short_description,thumbnail}) => {
  return (
    <article className='cardContainer'>
        <img src={thumbnail} alt="Card image" className='cardImg'/>
        <label className='cardTitle'>{title}</label>
        <p className='cardDescription'>{short_description}</p>
        
    </article>
  )
}

export default Card