import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../Context/AuthContext'
import { avatar } from '../features/user/userAPI'
import { Avatar } from '../features/user/userSlice'

function SiderBar() {
   const { user } = useContext(AuthContext)
   const dispatch = useDispatch()
    
    const onsubmit = (e) => {

      let fdata = new FormData()
      fdata.append('avatar', e.target.files[0])
      console.log('fdata',fdata)
      let data = {
          id: user._id,
          data: fdata
      }
      console.log('data',data)

      dispatch(Avatar(data))
  }

    /*onsubmit(() => {
      dispatch(avatar( data ))
   })*/
   console.log(user.name)
   return (
      <div>
         <nav id="sidebar">
            <div className="sidebar_blog_1">
               <div className="sidebar-header">
                  <div className="logo_section">
                     <a href="index.html"><img class="logo_icon img-responsive rounded-circle" src="images/logo/logo_icon.png" alt="#" /></a>
                  </div>
               </div>
               <div className="sidebar_user_info">
                  <div className="icon_setting"></div>
                  <div className="user_profle_side">
                     <div className="user_img"><img className="img-responsive" src={'http://localhost:5000/getfile/'+ user.avatar }  alt="#" /></div>
                    
                     <div className="user_info">
                        <h6>{user.name}</h6>
                        <p><span className="online_animation"></span> Online</p>
                        
                     </div>  
                     
                  </div>
                  <br/> 
                  <div style={{display:'flex'}}>
                  <div>
                  
                  <i class="fa fa-cloud-upload #0085BD_color" onClick={() => document.getElementById('upload').click()} >
                 
                  </i> <pre>   </pre></div> 
                  <input type="file" name='cv'  id="formGroupExampleInput6" onChange={(e) => onsubmit(e)}  /> 
                  </div>
               </div>
            </div>
            <div className="sidebar_blog_2">
               <h4>{user.role}</h4>
               <ul className="list-unstyled components" >
                  {user.role === 'freelancer' ?
                  <>
                  <li><a href="/cvForm"><i class="fa fa-file-pdf-o green_color"></i> <span> CV</span></a></li>
                  <li>
                     <a href="/allOffre"><i class="fa fa-tasks blue1_color"></i> <span>Catalogue Offres</span></a>
                  </li></> : user.role=== 'client' ?
                  <>
                  <li><a href="offreForm"><i class="fa fa-briefcase blue1_color"></i> <span>D??poser Offre</span></a></li>
                  <li>
                     <a href="/candidature"  ><i class="fa fa-paper-plane red_color"></i> <span>CV Postul??</span></a>
                  </li></> : user.role === 'ESN' ?
                  <>
                  <li><a href="/cvForm"><i class="fa fa-file-pdf-o green_color"></i> <span>D??poser CV</span></a></li>
                  <li><a href="/offreForm"><i class="fa fa-briefcase blue1_color"></i> <span>D??poser Offre</span></a></li>
                  <li><a href="/catalogueFreelance"><i class="fa fa-qrcode green_color"></i> <span>Catalogue CV</span></a></li>
                  <li><a href="/getOffre"><i class="fa fa-tasks blue1_color"></i> <span>Catalogue Offres</span></a></li>
                  <li>
                     <a href="/candidature">
                        <i class="fa fa-paper-plane red_color"></i> <span>CV Postul??</span></a>
                  </li>
                  </> :
                  <>
                  <li><a href="/cvForm"><i class="fa fa-file-pdf-o green_color"></i> <span>D??poser CV</span></a></li>
                  <li><a href="/offreForm"><i class="fa fa-briefcase blue1_color"></i> <span>D??poser Offre</span></a></li>
                  <li><a href="/catalogueFreelance"><i class="fa fa-qrcode green_color"></i> <span>Catalogue CV</span></a></li>
                  <li><a href="/getOffre"><i class="fa fa-tasks blue1_color"></i> <span>Catalogue Offres</span></a></li>
                  
                  <li>
                     <a href="/candidature">
                        <i class="fa fa-paper-plane red_color"></i> <span>CV Postul??</span></a>
                  </li>
                  <li><a href="/CvAdmin"><i class="fa fa-pencil-square-o green_color"></i> <span>G??rer CV</span></a></li>
                  <li><a href="/OffreAdmin"><i class="fa fa-table blue1_color"></i> <span>G??rer Offre</span></a></li>
                  <li><a href="/UserAdmin"><i class="fa fa-users yellow_color"></i> <span>G??rer Utilisateur</span></a></li>
                  <li><a href="/CandAdmin"><i class="fa fa-briefcase blue1_color"></i> <span>G??rer candidat cv</span></a></li>
                  </>}
                  {/* SideBar Freelancer*/}
                  {/*<li>
                     <div className="button_block"><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/cvForm'}>D??poser CV</button></div>
                  </li><br />
                  <li><div className="button_block"><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/allOffre'}>Catalogue Offres</button></div></li><br />
                  SideBar Client 
                  <li><div className="button_block"><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/offreForm'}>D??poser Offre</button></div></li><br />
                  <li><div className="button_block"><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/catalogueCvPostuler'}>CV Postul??</button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/catalogueFreelance'}>Catalogue CV </button></div></li><br />
                   SideBar ESN 
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/cvForm'}>D??poser CV</button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/offreForm'}>D??poser Offre</button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/catalogueFreelance'}>Catalogue CV </button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/getOffre'}>Catalogue Offres</button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/candidature'}>CV Postul??</button></div></li><br />

                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/CvAdmin'}>G??rer CV</button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/OffreAdmin'}>G??rer Offre</button></div></li><br />
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/UserAdmin'}>G??rer User</button></div></li>
                  <li><div ><button type="button" className="btn cur-p btn-light" onClick={() => window.location.href = '/User'}> User</button></div></li>
*/}
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default SiderBar