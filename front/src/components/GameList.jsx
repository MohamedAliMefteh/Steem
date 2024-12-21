import React from 'react'
import GameCard from './GameCard'
import { Link } from 'react-router-dom'

const GameList = ({gameList}) => {
  return (
     <div className='gamelist'>
     {gameList.map((game)=><GameCard key ={game._id}game={game}/> )}  
    </div>
  )
}

export default GameList