import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { AuthContext } from '../../Context/AuthContext'
import { CreateCV, selectmessage, selectshow } from '../../features/cv/cvSlice'

function CvForm() {
   const dispatch = useDispatch()
   const { user } = useContext(AuthContext)

   const [cv, setcv] = useState(null)
   /*const [values, setValues] = useState({
      domaine: "",
      skills: "",
      lm: ""

   });*/
   const [domaine, setDomaine] = useState("")
   const [skills, setSkills] = useState("")
   const [lm, setLm] = useState("")


   const show = useSelector(selectshow)
   const message = useSelector(selectmessage)
   
   /*const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setValues(prevState => ({
          ...prevState,
          [name]: values
      }));
   }*/
   /*const onChangeHandlerCV = (e) => {
      setcv({
         ...cv,
         [e.target.name]: e.target.value
      })
   }*/
   const HandleCreateCV = (e) => {
      e.preventDefault();

      let d = new FormData()
      d.append('userId', user._id)
      d.append('domaine', domaine)
      d.append('skills', skills)
      d.append('lm', lm)
      d.append('cv', cv)
        console.log('dddd',d)
      dispatch(CreateCV(d))
   }
   /*const onSubmit = (e) => {
      e.preventDefault();
      d.userId = user
      dispatch(CreateCV(d))
   }*/
   return (
      <div>
         <SiderBar />
         <body className="dashboard dashboard_1">
            <div id="content">
               <div className="container">
                  <br />
                  <br/>
                  <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none" }} >{message} </div>
                  <div className="center verticle_center full_height">
                     <div className="login_section">
                        <div className="logo_login">
                           <div className="center">
                              <img width="210" src="images/logo/logo.png" alt="#" />
                           </div>
                        </div>
                        <div className="login_form">
                           <form >
                              <fieldset>
                                 <div className="form-group">
                                    <label for="formGroupExampleInput1" className="active">Domaine <color style={{ color: 'red' }}>*</color></label>
                                    <input type="text" className="form-control" name='domaine' value={domaine}  id="formGroupExampleInput1" placeHolder="Saisissez votre domaine" onChange={(e) => setDomaine( e.target.value)} required />
                                 </div>
                                 <div className="form-group">
                                    <label for="formGroupExampleInput2" className="active">Compétences <color style={{ color: 'red' }}>*</color></label>
                                    <input type="text" className="form-control" name='skills' /*value={skills} */ id="formGroupExampleInput2" placeHolder="Saisissez votre compétences" onChange={(e) => setSkills( e.target.value)} required />
                                 </div>
                                 <div className="form-group">
                                    <label for="formGroupExampleInput3" className="active">lettre de motivation <color style={{ color: 'red' }}>*</color></label>
                                    <textarea className="form-control" name='lm' /*value={lm} */ id="formGroupExampleInput3" placeHolder="lettre de motivation" onChange={(e) => setLm( e.target.value)} required />
                                 </div>
                                 <div className="form-group">
                                    <label for="formGroupExampleInput4" className="active">CV <color style={{ color: 'red' }}>*</color></label>
                                    <input type="file" name='cv'   className="form-control" id="formGroupExampleInput4" placeHolder="Another input" onChange={(e) => setcv( e.target.files[0])} required />
                                 </div>
                                 <div className="field margin_0">
                                    <label className="label_field hidden">hidden label</label>
                                    <button className="main_bt" onClick={HandleCreateCV} >Ajouter CV</button>
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </body>
      </div>
   )
}

export default CvForm