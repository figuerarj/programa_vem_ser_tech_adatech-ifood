import React, {useState} from 'react'
import "./styles.css"
import LikeButton from '../likeButton'

const Card = ({title, short_description,thumbnail}) => {
  return (
    <article className='cardContainer'>
        <img src={thumbnail} alt="Card image" className='cardImg'/>
        <label className='cardTitle'>{title}</label>
        <p className='cardDescription'>{short_description}</p>
        <div className='LikeButton'>
        <LikeButton />
        </div>
    </article>
  )
}

export default Card