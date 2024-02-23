import React from 'react'
import './styles.css'
import {useForm} from 'react-hook-form';

import validator from 'validator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const {
    register, 
    handleSubmit, 
    formState:{errors},
    watch,
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) =>{
    
    // fetch("http://localhost:3000/users",{
    //   method: 'POST', headers:{
    //     'Content-Type':"application/json"
    //   }, body: JSON.stringify(data)
    // })
    axios.post("http://localhost:3000/users", data)
    .then(result => {
      console.log(data)
      alert("Registered Successfully")
      navigate('/login')
    })
    .catch(err => console.log(err))

  };

  const watchPassword = watch('password');

  
  return (
    <div className='Subscribe'>
    <div className='Subscribe-container'>
      <div className='form-group'>
        <label>Login</label>
        <input 
        className={errors?.name && 'input-error'} 
        type="text" 
        placeholder='Type your login' 
        {...register("name", {required: true})}
        />
        {errors?.name?.type === 'required' && <p className='error-message'>Name is required.</p>}
      </div>


      <div className='form-group'>
        <label>E-mail</label>
        <input 
        className={errors?.email && 'input-error'} 
        type="email" 
        placeholder='Type your e-mail' 
        {...register("email", {required: true, validate:(value)=>validator.isEmail(value)})}
        />
        {errors?.email?.type === 'required' && <p className='error-message'>E-mail is required.</p>}
        {errors?.email?.type === 'validate' && <p className='error-message'>E-mail is not valid.</p>}      
      </div>


      <div className='form-group'>
        <label>Password</label>
        <input 
        className={errors?.password && 'input-error'} 
        type="password" 
        placeholder='Type your password' 
        {...register("password", {minLength: 7,required: true})}
        />
        {errors?.password?.type === 'required' && <p className='error-message'>Password is required.</p>}
        {errors?.password?.type === 'minLength' && <p className='error-message'>Password must have at least 7 characters.</p>}
      </div>

      <div className='form-group'>
        <label>Confirm Password</label>
        <input 
        className={errors?.passwordConfirmation && 'input-error'} 
        type="password" 
        placeholder='Type your password again' 
        {...register("passwordConfirmation", {minLength: 7,required: true, validate: (value)=>value === watchPassword})}
        />
        {errors?.passwordConfirmation?.type === 'required' && <p className='error-message'>Password confirmation is required.</p>}
        {errors?.passwordConfirmation?.type === 'minLength' && <p className='error-message'>Password must have at least 7 characters.</p>}

        {errors?.passwordConfirmation?.type === 'validate' && <p className='error-message'>Password is different from password confirmation.</p>}

      </div>


      <div className='form-group'>
        <button onClick={() => handleSubmit(onSubmit)()}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Subscribe