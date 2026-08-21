import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authEmployee } from "../state/auth/authThunk";
import {useDispatch} from 'react-redux'

const authHooks = () => {
  let dispatch = useDispatch()
    let navigate = useNavigate();
    

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onLogin(data){
    dispatch(authEmployee(data))
    reset()
  }
  function onRegister(data){

  }



  return {
    register,
    reset,
    handleSubmit,
    onLogin,
    onRegister,
    navigate,
    formState: { errors },
  }; 
};

export default authHooks;
