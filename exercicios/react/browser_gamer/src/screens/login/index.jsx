import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(errors);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        console.log(result);

        // Verifica se result.data existe e é uma matriz antes de usar map
        if (Array.isArray(result.data)) {
          // Realiza a lógica apenas se result.data for um array
          result.data.map((user) => {
            if (user.name === data.name && user.password === data.password) {
              alert("Login Successfuly");
              navigate("/games");
            } else {
              alert("Wrong email or password!");
            }
          });
        } else {
          console.error("A resposta da API não é uma matriz:", result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="form-group">
          <label>Login</label>
          <input
            className={errors?.name && "input-error"}
            type="text"
            placeholder="Type your login"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p className="error-message">Name is required.</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className={errors?.password && "input-error"}
            type="password"
            placeholder="Type your password"
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <p className="error-message">Password is required.</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="error-message">
              Password must have at least 7 characters.
            </p>
          )}
        </div>

        <div className="form-group">
          <button onClick={() => handleSubmit(onSubmit)()}>Login</button>
        </div>

        <p className="text-center">
          If you don´t have an account, Please
          <Link to="/subscribe">
            {" "}
            <span>Subscribe Now!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
