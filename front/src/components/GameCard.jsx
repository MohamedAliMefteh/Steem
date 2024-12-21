import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({game}) => {
  return (
    
    
      <Link className='gamecard' to={`/${game.title}`}>
        <img  className='poster' src="steemlogo.png"/>
        <div className='info'>
          <h1 className='gametitle'>{game.title}</h1>
          <h2 className='gametitle'>{game.genre.map((genre)=>genre.title)}</h2>
          <h3 className='gametitle'>{game.price}</h3>
          
          <h2 className='gametitle'>{game.publisher.companyname}</h2>
          </div>
        <button className='orderbtn'>ORDER</button>
      </Link>
   
  )
}

export default GameCard