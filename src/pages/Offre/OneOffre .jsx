import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { GetOffreByID, selectoffreById } from '../../features/offre/offreSlice'

function OneOffre() {

   const offreById = useSelector(selectoffreById)
   const dispatch = useDispatch()

   useEffect(() => 
     dispatch(GetOffreByID({id: offreById._id}))
   , [])
   
   
   return (
      <div>
         <SiderBar />
         {offreById && 
         <div>
            <div id="content" style={{ paddingTop: '51px' }}>
               <div className="midde_cont">
                  <div className="container-fluid">
                     <div className="row column_title">
                        <div className="col-md-12">
                           <div className="page_title">
                              <h2>Offre</h2>
                           </div>
                        </div>
                     </div>
                     <div className="row column1">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                           <div className="white_shd full margin_bottom_30">
                              <div className="full graph_head">
                                 <div className="heading1 margin_0">
                                    <h2>Offre</h2>
                                 </div>
                              </div>
                              <div className="full price_table padding_infor_info">
                                 <div className="row">
                                    <div className="col-lg-12">
                                       <div className="full dis_flex center_text">
                                          <div class="profile_img"><img width="130" class="rounded-circle" src="images/layout_img/" alt="#" />
                                          <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                             <br/>
                                          <div ><a href='/OffreAdmin'><i  class="fa fa-angle-double-left" > <u>Retour</u></i></a></div></div>
                                          
                                          <div className="profile_contant">
                                             <div className="contact_inner">
                                                <h3>Name</h3>
                                                <p><strong>Titre: </strong>{offreById.title} </p>
                                                <p><strong>Type d'emploi: </strong>{offreById.jobType}</p>
                                                <p><strong>Durée (mois): </strong>{offreById.duration}</p>
                                                <p><strong>salaire: </strong>{offreById.salary}</p>
                                                <p><strong>Nombre maximal de candidats: </strong>{offreById.maxApplicant}</p>
                                                <p><strong>Position disponible: </strong>{offreById.posAvailable}</p>
                                                <p><strong>Compétences: </strong>{offreById.skills}</p>
                                                <p><strong>Bio: </strong>{offreById.bio}</p>
                                                <ul className="list-unstyled">
                                                   <li><i className="fa fa-envelope-o"></i> : test@gmail.com</li>
                                                   <li><i className="fa fa-phone"></i> : 987 654 3210</li>
                                                   <li><i className="fa fa-map-marker"></i> : adress</li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-2"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>}
      </div>
   )
}

export default OneOffre