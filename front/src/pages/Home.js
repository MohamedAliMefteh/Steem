import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllGames } from '../redux/slices/gameSlice'
import GameList from '../components/GameList'


const Home = () => {
   const{gameList,isLoading,error}=useSelector((state)=>state.games)
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(GetAllGames())}
  ,[])

console.log(gameList)
const latestGames=gameList.slice(0,10)
console.log(latestGames)


 
      
     
      
   

  return (
    <>
    
    {isLoading && <h2>Loading</h2>}
    {!isLoading && <GameList gameList={latestGames} />}
    

    </>
  )
}

export default Home