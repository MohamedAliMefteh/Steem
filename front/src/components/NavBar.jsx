import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/authSlice'

const NavBar = () => {
  const {isAuth,userInfo}=useSelector((state)=>state.auth)
  const dispatch =useDispatch()
  return (
    <div className='NavBar'>
      <div>STEEM</div>
      <Link to={"/"} className='.store' >Store</Link> 
      <div className='rightsidebar'>{(isAuth)? 
          <div className='rightsidenavbar1'>
            <button className='logout' onClick={()=>dispatch(logout())} >LogOut</button>
            <div className='profile'>{userInfo.alias}</div>
            
          </div>
          :
          <div className='rightsidenavbar2'>
          <Link to={"/register"} >Register</Link>
          <Link to={"/login"} >Login</Link>
          </div>
}     </div>
</div>
  )
}

export default NavBar