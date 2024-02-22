import React from 'react'
import "./styles.css"

const Card = ({title, short_description}) => {
  return (
    <article className='cardContainer'>
        <label>{title}</label>
        <p>{short_description}</p>
    </article>
  )
}

export default Card