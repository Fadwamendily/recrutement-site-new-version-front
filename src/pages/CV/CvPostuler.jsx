import React, { useState } from 'react'
import SiderBar from '../../components/SiderBar'

function CvPostuler() {
   const [values, setValues] = useState({})
   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }
   const onSubmit = (e) => {
      e.preventDefault();
      console.log(values)
   }
   return (
      <div>
         <SiderBar />
         <div id="content">
            <div className="container">

               <div className="center verticle_center full_height">
                  <div className="login_section">
                     <div className="logo_login">
                        <div className="center">
                           <img width="210" src="images/logo/logo.png" alt="#" />
                        </div>
                     </div>
                     <div className="login_form">
                        <form onSubmit={onSubmit}>
                           <fieldset>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Domaine <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='domain' className="form-control" id="formGroupExampleInput2" placeHolder="Saisissez votre domaine" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Compétences <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='skills' className="form-control" id="formGroupExampleInput2" placeHolder="Saisissez votre compétences" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Lettre de motivation <color style={{ color: 'red' }}>*</color></label>
                                 <textarea name='letter' className="form-control" id="formGroupExampleInput2" placeHolder="Lettre de motivation " onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">CV <color style={{ color: 'red' }}>*</color></label>
                                 <input type="file" name='cv' className="form-control" id="formGroupExampleInput2" placeHolder="Another input" onChange={onChangeHandler} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Autre_CV</label>
                                 <input type="file" name='autre-cv' className="form-control" id="formGroupExampleInput2" placeHolder="Another input" onChange={onChangeHandler} />
                              </div>
                              <div className="field margin_0">
                                 <label className="label_field hidden">hidden label</label>
                                 <button className="main_bt">Ajouter CV</button>
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

export default CvPostuler