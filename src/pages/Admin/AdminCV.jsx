import React from 'react'
import SiderBar from '../../components/SiderBar'

function AdminCV() {
   return (
      <div>
         <SiderBar />
         <div id="content" style={{ paddingTop: '51px' }}>
            <div class="midde_cont">
               <div class="container-fluid">
                  <div class="row column_title">
                     <div class="col-md-12">
                        <div class="page_title">
                           <h2>AdminCV</h2>
                        </div>
                     </div>
                  </div>
                  <div className="row column1">
                     <div className="col-md-2"></div>
                     <div className="col-md-12">
                        <div className="white_shd full margin_bottom_30">
                           <div className="full graph_head">
                              <div className="heading1 margin_0">
                                 <h2>CV_liste</h2>
                              </div>
                           </div>
                           <div className="full progress_bar_inner">
                              <div className="row">
                                 <div className="col-lg-12">
                                    <div className="msg_section">
                                       <div className="msg_list_main">
                                          <ul className="msg_list">
                                             <li>
                                                <span><img src="images/layout_img/msg2.png" class="img-responsive" alt="#" /></span>
                                                <span>
                                                   <span className="name_user">Freelancer/ESN_Name</span>
                                                   <span className="msg_user"><p><strong>Domaine:  </strong>Frontend Developer  {` `}<span>  </span>{` `}
                                                      <strong>Compétences: </strong>Frontend Developer  </p></span>
                                                   <div><span className="msg_user"><p> <i className="fa fa-map-marker"></i> adresse</p></span></div>
                                                   <span className="Admin_view"><button type="button" class="btn cur-p btn-outline-primary">Afficher</button></span>
                                                   <span className="Admin_dlt"><button type="button" class="btn cur-p btn-outline-danger">Supprimer</button></span>
                                                </span>
                                             </li>
                                             <li>
                                                <span><img src="images/layout_img/msg3.png" class="img-responsive" alt="#" /></span>
                                                <span>
                                                   <span className="name_user">Freelancer/ESN_Name</span>
                                                   <span className="msg_user"><p><strong>Domaine:  </strong>Frontend Developer  {` `}<span>  </span>{` `}
                                                      <strong>Compétences: </strong>Frontend Developer  </p></span>
                                                   <div><span className="msg_user"><p> <i className="fa fa-map-marker"></i> adresse</p></span></div>
                                                   <span className="Admin_view"><button type="button" class="btn cur-p btn-outline-primary">Afficher</button></span>
                                                   <span className="Admin_dlt"><button type="button" class="btn cur-p btn-outline-danger">Supprimer</button></span>
                                                </span>
                                             </li>
                                          </ul>
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
      </div>
   )
}

export default AdminCV