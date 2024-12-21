import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../redux/slices/authSlice';


const Register = () => {
  const {isAuth}=useSelector((state)=>state.auth)
  const navigate =useNavigate()
    useEffect(()=>{
      if (isAuth){
        navigate("/")
      }
    },[isAuth])
  const dispatch =useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    dispatch(RegisterUser(data))
  }
  console.log(errors)
  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("firstname", {required: true})} />
      <input type="text" placeholder="Last name" {...register("secondname", {required: true})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="password" {...register("password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i})} />
      <input type="text" placeholder="Alias" {...register("alias", {required: true})} />

      <input type="submit" />
    </form>
    </>
  )
}

export default Register
