import React from 'react';
import '../../App.css';

export default function SignUp() {
  return ( 
    <div className="container-sign-up">
      <form>
        <h1>Loge-se</h1>
        <div className="ui divider">
        </div>
        <div className="ui form">
          <div className="field">
              <label>Usuário</label>
              <input type="text" name='usuario' placeholder="Usuário"></input>
          </div>
        </div>
      </form>
    </div>
  );
}