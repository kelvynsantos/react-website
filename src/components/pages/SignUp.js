import React from 'react';
import {useState, useEffect} from "react";
import './SignUp.css';
export default function SignUp() {
  const initialValues = {usuario:"", email:"",senha:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubtmit,setIsSubtmit] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({...formValues,[name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubtmit(true);
  };
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubtmit){
    console.log(formValues);
    }
  },[formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.usuario) {
      errors.usuario = "Usuário é requerido!!!"
    }
    if (!values.email){
      errors.email = "Email é requerido!!!";
    } else if(!regex.test(values.email)){
      errors.email = "Formato de E-mail não é válido!!!"
    }
    if (!values.senha){
      errors.senha = "Senha é requerida!!!"
    } else if(values.senha.length < 4){
      errors.senha = "Senha muito curta, precisa ser mais que 4 caracteres!!"
    } else if(values.senha.length > 15) {
      errors.senha = "Senha não pode passar  de 15 caracteres"
    }
    return errors;
  };
  return ( 
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubtmit} {
        <div className="ui message sucess">Cadastrado com sucesso</div>
      }
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        <div className="ui divider">
        </div>
        <div className="ui form">
          <div className="field">
              <label>Usuário </label>
              <input 
              type="text" 
              name='usuario' 
              placeholder="Usuário" 
              value={formValues.usuario}
              onChange={handleChange}
              />
          </div>
          <p>{formErrors.usuario}</p>
          <div>
            <label>Email </label>
            <input 
            type="email"
            name="email" 
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div>
            <label>Senha </label>
            <input 
            type="password"
            name="senha"
            placeholder="Senha"
            value={formValues.senha}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.senh}</p>
          <button class="fluid ui button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}