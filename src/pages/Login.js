import React, { useState } from 'react';
import RightArrowIcon from '../assets/images/right-arrow.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(json => {
      // authentication error
      if(json.message) {
        setError(json.message);
      }
      // authentication success
      else {
        localStorage.setItem('token',json.token)
        navigate('/dashboard');
      }
    })
  }

  return (
    <div className='login-wrapper vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-11 col-md-6 col-lg-4 mx-auto'>
        <h1 className='section-title text-white text-center'>Login to Your Account</h1>
        <h6 className="description text-secondary text-center my-3">Welcome back, please enter your credentials</h6>

        <form onSubmit={handleSubmit(onSubmit)} className='form mx-auto mt-5'>

          {error &&
            <div className='alert alert-danger'>
              { error }
            </div>
          }

          <div className="form-group mt-3">
            <input type="text" placeholder='Username' className={ errors.username ? 'form-control border-danger':'form-control' } 
              {...register("username", {
                required: "Username is required",
              })}
            />
            <p className="text-danger text-error mt-1">
              {errors.username && errors.username.message}
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
            disabled={errors.username || errors.password}
          >
            <h6 className='text'>
              Login to Your Account
            </h6>
            <img className='arrow-icon' src={RightArrowIcon} alt="icon" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login