import React, { useState } from 'react'
import './styles.css'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const LikeButton = () => {

    const[btnState, setBtnState] = useState(false);

  return (
    <div className='heart' onClick={()=>setBtnState(!btnState)}>
        {btnState?<FaHeart />: <FaRegHeart/>}
    </div>
  )
}

export default LikeButton