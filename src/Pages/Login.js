import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const loginMessage = useSelector(state => state.app?.loginMessage);

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
      .then((res) => {
        setError("");
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem('userName', res.data.data.user.firstName + " " + res.data.data.user.lastName);
        navigate('/user');
        Swal.fire({
          icon: 'success',
          text: 'Successfully logged in session!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) {
          alert("Credenciales incorrectas");
        }
      });
  };

  return (
    <div className="login-container">

      <div className="main-container">
        <form className="login" onSubmit={handleSubmit(submit)}>
          <strong>Welcome! Enter your email and password to continue</strong>
          <p className='login-message'>{loginMessage}</p>

          <div className="test-data">
            <b>Test data</b>
            <div className="field">
              <i className="icon-mail"></i>mason@gmail.com
            </div>
            <div className="field">
              <i className="icon-lock"></i>mason1234
            </div>
          </div>



          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              {...register("email")}
            />
          </div>


          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <div className="error-message">{error}</div>
          <button className='submit-button'>
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;

