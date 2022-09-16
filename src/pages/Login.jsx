import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import AuthService from '../Services/authService'

function Login() {
   const { setUser, setIsAuth, user } = useContext(AuthContext)
   const [values, setValues] = useState({})

   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault();
      AuthService.login(values).then(jsonData => {
         if (!jsonData.error) {
            setUser(jsonData.user);
            setIsAuth(jsonData.isAuthenticated);
            if ((user.role === 'ESN') || (user.role === 'admin')) {
               window.location.href = '/esnProfil'
            }
            if (user.role === 'freelancer') { window.location.href = '/cv' }
            if (user.role === 'client') { window.location.href = '/mesOffre' }

         }
         else {
            console.log("...register error...", jsonData)
         }
      })
      console.log(values)
   }
   return (
      <div>
         <div className="container">
            <div className="center verticle_center full_height">
               <div className="login_section">
                  <div className="logo_login">
                     <div className="center">
                        <img width="210" src="images/logo/logo.png" alt="#" />
                     </div>
                  </div>
                  <div className="login_form">
                     <form onSubmit={onSubmit} class="was-validated" >
                        <fieldset>
                           <div className="field">
                              <label className="label_field">Email <color style={{ color: 'red' }}>*</color> </label>
                              <input class="form-control" id="uname" type="email" name="email" placeHolder="E-mail" onChange={onChangeHandler} required/>
                              <div class="valid-feedback">Valide.</div>
                              <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir l'email.</div>
                           </div>
                           <div className="field">
                              <label className="label_field">Mot de passe <color style={{ color: 'red' }}>*</color></label>
                              <input class="form-control" id="pwd" type="password" name="password" placeHolder="Mot de passe " onChange={onChangeHandler} required/>
                              <div class="valid-feedback">Valide.</div>
                              <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir le mot de passe.</div>
                           </div>
                           <div className="field">
                              <label className="label_field hidden">hidden label</label>
                              <label className="form-check-label">   <input  id="myCheck" type="checkbox" class="form-check-input" required/>  <span>   </span> Remember Me</label>
                              <Link className='forgot' to="/SignUp">Créer un compte maintenant</Link>
                           </div>
                           <div className="field margin_0">
                              <label className="label_field hidden">hidden label</label>
                              <button className="main_bt" >Connexion</button>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login