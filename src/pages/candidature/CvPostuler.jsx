import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { AuthContext } from '../../Context/AuthContext'
import { CreateCandidat, selectmessage, selectshow } from '../../features/candidatCv/candidatCvSlice'
import { selectoffreById } from '../../features/offre/offreSlice'

function CvPostuler() {

   //const [values, setValues] = useState({})
   const { user } = useContext(AuthContext)
   const show = useSelector(selectshow)
   const message = useSelector(selectmessage)
   const dispatch = useDispatch()
   const offre = useSelector(selectoffreById)
   const [cv, setcv] = useState(null)
   const [autreCV, setAutreCV] = useState(null)
   /*const [values, setValues] = useState({
      domaine: "",
      skills: "",
      lm: ""

   });*/

   const [domaine, setDomaine] = useState("")
   const [skills, setSkills] = useState("")
   const [lm, setLm] = useState("")

  /* const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }*/
   /*const onChangeHandlerCV = (e) => {
      setcv({
         ...cv,
         [e.target.name]: e.target.files[0]
      })
   }
      const onChangeHandlerAutreCV = (e) => {
         setAutreCV({
            ...autreCV,
            [e.target.name]: e.target.files[0]
         })
      }*/

   const HandleCreateCV = (e) => {
      e.preventDefault();

      let d = new FormData()

      d.append('domaine', domaine)
      d.append('skills', skills)
      d.append('lm', lm)
      
      d.append('userId', user._id)
      d.append('offreId', localStorage.getItem('singleOffreId'))
      d.append('cv', cv)
      d.append('autreCV', autreCV)
        console.log('dddd',d)
      dispatch(CreateCandidat(d))
   }

   /*const onSubmit = (e) => {
      e.preventDefault();
      values.userId = user
      dispatch(CreateCandidat(values))
      console.log(values)
   }*/
   return (
      <div>
         <SiderBar />
         <div id="content">
            <div className="container">
               <br />
               <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none" }} >{message} </div>
               <div className="center verticle_center full_height">
                  <div className="login_section">
                     <div className="logo_login">
                        <div className="center">
                           <img width="210" src="images/logo/logo.png" alt="#" />
                        </div>
                     </div>
                     <div className="login_form">
                        <form onSubmit={HandleCreateCV}>
                           <fieldset>
                              <div className="form-group">
                                 <label for="formGroupExampleInput1" className="active">Domaine <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='domaine' className="form-control" id="formGroupExampleInput1" placeHolder="Saisissez votre domaine" onChange={(e) => setDomaine( e.target.value)} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput2" className="active">Compétences <color style={{ color: 'red' }}>*</color></label>
                                 <input type="text" name='skills' className="form-control" id="formGroupExampleInput2" placeHolder="Saisissez votre compétences" onChange={(e) => setSkills( e.target.value)} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput3" className="active">Lettre de motivation <color style={{ color: 'red' }}>*</color></label>
                                 <textarea name='lm' className="form-control" id="formGroupExampleInput3" placeHolder="Lettre de motivation " onChange={(e) => setLm( e.target.value)} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput4" className="active">CV <color style={{ color: 'red' }}>*</color></label>
                                 <input type="file" name='cv' className="form-control" id="formGroupExampleInput4" placeHolder="Another input" onChange={(e) => setcv( e.target.files[0])} required />
                              </div>
                              <div className="form-group">
                                 <label for="formGroupExampleInput5" className="active">Autre_CV</label>
                                 <input type="file" name='autreCV' className="form-control" id="formGroupExampleInput5" placeHolder="Another input" onChange={(e) => setAutreCV( e.target.files[0])} />
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