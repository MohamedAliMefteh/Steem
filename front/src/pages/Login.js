import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/slices/authSlice';


const Login = () => {
  const {isAuth}=useSelector((state)=>state.auth)
  const navigate =useNavigate()
    useEffect(()=>{
      if (isAuth){
        navigate("/")
       
      }
    },[isAuth])
  const dispatch =useDispatch()
  const { register ,handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
     dispatch(LoginUser(data))
   }
   console.log(errors)
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="password" {...register("password", {required: true})} />

      <input type="submit" />
    </form>
    </>
  )
}

export default Login
