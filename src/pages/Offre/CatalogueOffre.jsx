import React from 'react'
import SiderBar from '../../components/SiderBar'

function CatalogueOffre() {
   return (
      <div>
         <SiderBar />
         <div id="content" style={{ paddingTop: '51px' }}>
            <div className="inner_page contact_page">
               <div className="container-fluid">
                  <div className="row column_title">
                     <div className="col-md-12">
                        <div className="page_title">
                           <h2>Offres</h2>
                        </div>
                     </div>
                  </div>
                  <div className="row column1">
                     <div className="col-md-12">
                        <div className="white_shd full margin_bottom_30">
                           <div className="full graph_head">
                              <div className="heading1 margin_0">
                                 <h2>Offres</h2>
                              </div>
                           </div>
                           <div className="full price_table padding_infor_info">
                              <div className="row">
                                 <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 profile_details margin_bottom_30">
                                    <div className="contact_blog">
                                       <div className="contact_inner">
                                          <div className="left">
                                             <h3>Client/ESN_Name</h3>
                                             <p><strong>Titre: </strong>Web Application</p>
                                             <p><strong>Type d'emploi: </strong>Web Application</p>
                                             <p><strong>Salaire: </strong>Web Application</p>
                                             <p><strong>Compétences: </strong>Web Application</p>
                                             <ul className="list-unstyled">
                                                <li><i className="fa fa-envelope-o"></i> : test@gmail.com</li>
                                                <li><i className="fa fa-phone"></i> : 987 654 3210</li>
                                             </ul>
                                          </div>
                                          <div className="right">
                                             <div className="profile_contacts">
                                                <img class="img-responsive" src="images/layout_img/g7.jpg" alt="#" />
                                             </div>
                                          </div>
                                          <div className="bottom_list">
                                             <div className="right_button">
                                                <button type="button" className="btn btn-primary btn-xs" onClick={() => window.location.href = '/Offre'}>
                                                   <i className="fa fa-user"> </i> Voir Offre
                                                </button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CatalogueOffre