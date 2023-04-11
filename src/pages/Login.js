import React from 'react';
import RightArrowIcon from '../assets/images/right-arrow.png';

const Login = () => {
  return (
    <div className='login-wrapper vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-11 col-md-6 col-lg-4 mx-auto'>
        <h1 className='section-title text-white text-center'>Login to Your Account</h1>
        <h6 class="description text-secondary text-center my-3">Welcome back, please enter your credentials</h6>

        <form className='form mx-auto mt-5'>
          <div className="form-group mt-3">
            <input type="email" class="form-control" placeholder='Email' />
          </div>
          <div className="form-group mt-3">
            <input type="email" class="form-control" placeholder='Password' />
          </div>
          <button class="btn btn-login w-100 mt-3">
            <h6 className='text'>
              Login to Your Account
            </h6>
            <img className='arrow-icon' src={RightArrowIcon} alt="icon" />
          </button>
          <button class="btn btn-link text-white d-flex mx-auto mt-3">Create an account</button>
        </form>
      </div>
    </div>
  )
}

export default Login