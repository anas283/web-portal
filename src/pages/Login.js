import React, { useState } from 'react';
import RightArrowIcon from '../assets/images/right-arrow.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    navigate('/dashboard');
  }

  return (
    <div className='login-wrapper vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-11 col-md-6 col-lg-4 mx-auto'>
        <h1 className='section-title text-white text-center'>Login to Your Account</h1>
        <h6 className="description text-secondary text-center my-3">Welcome back, please enter your credentials</h6>

        <form onSubmit={handleSubmit(onSubmit)} className='form mx-auto mt-5'>
          <div className="form-group mt-3">
            <input type="email" placeholder='Email' className={ errors.email ? 'form-control border-danger':'form-control' } 
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            <p className="text-danger text-error mt-1">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="form-group mt-3">
            <input type="password" placeholder='Password' className={ errors.password ? 'form-control border-danger':'form-control' } 
              {...register("password", {
                required: "Password is required"
              })}
            />
            <p className="text-danger text-error mt-1">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button type='submit' className="btn btn-login w-100 mt-3"
            disabled={errors.email || errors.password}
          >
            <h6 className='text'>
              Login to Your Account
            </h6>
            <img className='arrow-icon' src={RightArrowIcon} alt="icon" />
          </button>
          <button className="btn btn-link text-white d-flex mx-auto mt-3">Create an account</button>
        </form>
      </div>
    </div>
  )
}

export default Login