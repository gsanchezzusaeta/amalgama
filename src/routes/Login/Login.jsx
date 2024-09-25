import React, { useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SpinnerLoader from '../../components/Loaders/SpinnerLoader'
import Button from "../../components/Button/Button";
import axiosInstance from "../../utils/axiosClient";
import './Login.css'
import { useDispatch } from "react-redux";
import { setAuthorizationToken } from "../../redux/reducers/mainReducer";

const SwalAlert = withReactContent(Swal)

export default function Login() {

  const [isPending, setIsPending] = useState(false)
  
  const dispatch = useDispatch()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isPending) {
      handleSubmit()
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsPending(true)

    const formData = new FormData(event.currentTarget);

    postResponse(formData)
    
  };

  const postResponse = async (body) => {

    console.log(body);

    await axiosInstance.post(`/login`, body)
      .then(({data}) => dispatch(setAuthorizationToken(data?.token)))
      .catch(({response}) => {

        let description = response?.data?.description

        Swal.fire({
          icon: 'error',
          title: 'Ups.. Hubo un problema',
          text: description,
          timer: 2000
        }).then(() => {
          setIsPending(false)
        })
      })
  }

  return (
    <div className="login-container" >
      <div className="login-card">
        <div className="login-header">
          <span className="lg-txt-title">Bienvenido</span>
          <span className="lg-txt-subtitle">Ingrese su usuario y contraseña</span>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input id="email" name="email" type="text" />
          <input id="password" name="password" type="password" />

          <Button hasLoader={true} loader={<SpinnerLoader login={true} />}
            pendingState={isPending} type={'submit'} text={'Iniciar Sesión'} />
        </form>
      </div>
    </div>
  );
};