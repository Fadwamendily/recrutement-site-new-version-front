import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import AuthService from '../Services/authService'
import esn from '../assets/images/EESN.png'
import freelance from '../assets/images/freeelancer.webp'
import client from '../assets/images/clllient.png'
import '../assets/css/Register.css'
import { Alert } from 'antd'
export default function SignUp(props) {
   const { user } = useContext(AuthContext)
   const { setUser, setIsAuth } = useContext(AuthContext)
   const [role, setrole] = useState('');
   const [values, setValues] = useState({})
   const [error, setError] = useState('')
   const [errorPWD, setErrorPWD] = useState(false)


   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
      
   }

   const onSubmit = (e) => {
      e.preventDefault();
      console.log('Success:', values);
      values.role = role
      var pw1 = document.getElementById("pwd").value;
      var pw2 = document.getElementById("pwd1").value;
      console.log('pw1',pw1,'pw2',pw2)
      if (pw1 !== pw2) {
         setErrorPWD(true)
         alert('mot de passe invalide')
      }else{

      
      /*if (errorPWD===true){
      }*/
      AuthService.register(values).then(jsonData => {
         if (jsonData.error)   {
            console.log('errorPWD', errorPWD)
            alert("...register error...")
            setError(jsonData.error)
         }
         else {
            
            setUser(jsonData.user);
            setError(true)
            
            //setIsAuth(jsonData.isAuthenticated);
            props.history.replace("/Login")
            console.log('errorPWD', errorPWD)
         }

      })}


      /* const errorHandler = ({ name }) => {
          return (
              <>
                {
 
                   error.map((errors) => {
                      return (
                              <>
                            {
                               errors 
                               &&
                               <span style={{ color: "red" }}  >{e.message}</span>
                            }
                            
                            </>
                             )
                     })
 
                 }
             </>
         )
     }*/



   }
   return (
      <div>
         <div className='registerform' >
            {role === '' &&
               <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} >
                  <div  >
                     <span className='spanf' style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}  >
                        Vous l'êtes?
                     </span>
                  </div>
                  <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                     <div >
                        <div className="Author">
                           <img onClick={() => setrole('ESN')} src={esn} alt="" align="center" />
                           <h4>ESN</h4>
                        </div>
                     </div>
                     <div   >
                        <div className="Author">
                           <img onClick={() => setrole('freelancer')} src={freelance} alt="" align="left" />
                           <h4>Freelancer</h4>
                        </div>
                     </div>
                     <div   >
                        <div className="Author">
                           <img onClick={() => setrole('client')} src={client} alt="" align="left" />
                           <h4> Client </h4>
                        </div>
                     </div>
                  </div>

               </div>
            }
            {
               (role === 'ESN' || role === 'client' || role === 'freelancer') && <>

                  <div>
                     <div className="container" >
                        <div className="center verticle_center full_height">
                           <div className="login_section">
                              <div className="logo_login">
                                 <div className="center">
                                    <img width="210" src="images/logo/logo.png" alt="#" />
                                 </div>
                              </div>
                              <div className="login_form">
                                 <form onSubmit={onSubmit} class="was-validated" /* oninput='confirmPassword.setCustomValidity(confirmPassword.value != password.value ? "Passwords do not match." : "")'*/>
                                    {/*error.length > 0
                                       ?
                                       <>
                                          <Alert message={
                                             <>
                                                {
                                                   error.map(e => {
                                                      return (
                                                         <span>{e.message}  </span>
                                                      )
                                                   })
                                                }
                                             </>
                                          }
                                             type='error'
                                             showIcon

                                          />
                                       </>
                                       :

                                       <Alert message="vvvvvvv" type="success" showIcon style={{ fontSize: '18px' }} />*/}

                                    <fieldset>
                                       <div className="field">
                                          <label className="label_field">Nom <color style={{ color: 'red' }}>*</color> </label>
                                          <input class="form-control" id="uname" type="name" name="name" placeHolder="Nom" onChange={onChangeHandler} required />
                                          <div class="valid-feedback"> <pre>   </pre>Valide</div>
                                          <div class="invalid-feedback" style={{ alignSelf: 'center' }}>Veuillez remplir le Nom.</div>
                                          {/*<span style={{ color: 'red', marginLeft: '15px' }}>{error && error.errors.name.message}</span>
                                          <errorHandler name='name' />*/}
                                       </div>
                                       <div className="field">
                                          <label className="label_field">Téléphone <color style={{ color: 'red' }}>*</color> </label>
                                          <input class="form-control" id="uname" type="PhoneNumber" name="phoneNumber" placeHolder="Numéro de téléphone" onChange={onChangeHandler} required />
                                          <div class="valid-feedback">Valide.</div>
                                          <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir le Numéro de téléphone.</div>
                                          {/*<span style={{ color: 'red', marginLeft: '15px' }}>{error && error.errors.phoneNumber.message}</span>*/}
                                       </div>
                                       <div className="field">
                                          <label className="label_field">Adresse <color style={{ color: 'red' }}>*</color></label>
                                          <input class="form-control" id="uname" type="Adress" name="adress" placeHolder="Adresse" onChange={onChangeHandler} required />

                                          <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir l'adresse.</div>
                                       </div>
                                       <div className="field">
                                          <label className="label_field">Email <color style={{ color: 'red' }}>*</color></label>
                                          {!error ?
                                             <input class="form-control" id="uname" type="email" name="email" placeHolder="E-mail" onChange={onChangeHandler} required /> :
                                             <input style={{ borderColor: 'red' }} id="uname" type="email" name="email" placeHolder="E-mail" onChange={onChangeHandler} required />
                                          }
                                          <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir l'email.</div>
                                          <span style={{ color: 'red', marginLeft: '15px' }}>{error && error}</span>

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Mot de passe <color style={{ color: 'red' }}>*</color></label>
                                          <input class="form-control" id="pwd"  type="password" name="password" placeHolder="Mot de passe" onChange={onChangeHandler}   required  />
                                          <div class="valid-feedback">Valide.</div>
                                          <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir le mot de passe.</div>
                                       </div>
                                       <div className="field">
                                          <label className="label_field">Confirmer MDP<color style={{ color: 'red' }}>*</color> </label>
                                          <input class="form-control"  id="pwd1" type="password" name="confirmPassword" placeHolder="Confirmer le mot de passe" onChange={onChangeHandler}  required />
                                          {(errorPWD===true) &&
                                             <span style={{ color: 'red', marginLeft: '15px' }}>mot de passe invalide</span>
                                          }
                                          <div class="valid-feedback">Valide.</div>
                                          <div class="invalid-feedback" style={{ alignItem: 'center' }}>Veuillez remplir la confirmation mot de passe.</div>
                                       </div>
                                       <div className="field margin_0">
                                          <label className="label_field hidden">hidden label</label>
                                          <button className="main_bt">S'inscrire</button>
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            }

         </div>
      </div>
   )

}

