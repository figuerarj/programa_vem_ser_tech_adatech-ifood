import React from 'react'
import './styles.css'
import {useForm} from 'react-hook-form';

const Subscribe = () => {
  const {
    register, 
    handleSubmit, 
    formState:{errors},
  } = useForm();

  console.log(errors);

  const onSubmit = (data) =>{
    // preventDefault();
    console.log(data)
  };
  
  return (
    <div className='Subscribe-container'>
      <div className='subscribe-group'>
        <label>Login</label>
        <input className={errors?.name && 'input-error'} 
        type="text" 
        placeholder='Type your login' 
        {...register("name", {required: true})}
        />
        {errors?.name?.type === 'required' && <p className='error-message'>Name is required</p>}
      </div>
      <div className='subscribe-group'>
        <label>E-mail</label>
        <input type="email" placeholder='Type your e-mail' 
        {...register("email")}
        />
      </div>
      <div className='subscribe-group'>
        <label>Password</label>
        <input type="password" placeholder='Type your password' 
        {...register("password")}
        />
      </div>
      <div className='subscribe-group'>
        <button onClick={() => handleSubmit(onSubmit)()}>Submit</button>
      </div>
    </div>
  )
}

export default Subscribe