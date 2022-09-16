import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SiderBar from '../../components/SiderBar'
import { AuthContext } from '../../Context/AuthContext'
import { CreateOffre, selectmessage, selectshow } from '../../features/offre/offreSlice'
import { Getme, selectuser } from '../../features/user/userSlice'

function OffreForm() {
   const { user } = useContext(AuthContext)

   

   //const [message, setMessage] = useState('')
   //const [show, setSow] = useState(false)
   const show = useSelector(selectshow)
   const message = useSelector(selectmessage)
   const dispatch = useDispatch()

   const [values, setValues] = useState({})
   
   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value,

      })
   }
   const onSubmit = (e) => {
      e.preventDefault();
      //values.userId=user.name
      values.userId = user

      dispatch(CreateOffre(values))

   }
   /* useEffect(()=>{
       dispatch(Getme(id))
       
    })*/


   return (
      <div>
         <SiderBar />
         <div id="content">
            <div className="container">
               <br/>
                     <div class="alert alert-success" role="alert" style={{display: show ? "block" : "none"}} >{message} </div>
               <div className="center verticle_center " style={{ marginTop: '65px' }}>
                  <div className="login_section" >
                     <div className="logo_login">
                        <div className="center">
                           <img width="210" src="images/logo/logo.png" alt="#" />
                        </div>
                     </div>
                     <div className="login_form">
                        <form onSubmit={onSubmit}>
                           <fieldset>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Titre <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='title' class="form-control" id="formGroupExampleInput2" placeHolder="Titre" onChange={onChangeHandler} required />
                              </div>
                              <div class="form-group">
                                 <label for="formGroupExampleInput2" className="active">Type d’emploi  <color style={{ color: 'red' }}>*</color></label>
                                 <select name='jobType' class="form-control" id="sel1" onChange={onChangeHandler} required>
                                    <option ></option>
                                    <option>travail à domicile</option>
                                    <option>à plein temps</option>
                                    <option>à temps partiel</option>
                                 </select>
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Durée <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='duration' className="form-control" id="formGroupExampleInput2" placeHolder="Durée" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Salaire <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='salary' className="form-control" id="formGroupExampleInput2" placeHolder="Salaire" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Nombre maximal de candidats <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='maxApplicant' className="form-control" id="formGroupExampleInput2" placeHolder="Nombre maximal de candidats" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Position disponible <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='posAvailable' className="form-control" id="formGroupExampleInput2" placeHolder="Position disponible" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Compétences <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='skills' className="form-control" id="formGroupExampleInput2" placeHolder="Compétences" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Bio <color style={{ color: 'red' }}>*</color></label>
                                 <textarea name='bio' class="form-control" id="formGroupExampleInput2" placeHolder="Bio" onChange={onChangeHandler} required />
                              </div>
                              <div className="field margin_0">
                                 <label className="label_field hidden">hidden label</label>
                                 <button className="main_bt">Ajouter offre</button>
                              </div>
                           </fieldset>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default OffreForm