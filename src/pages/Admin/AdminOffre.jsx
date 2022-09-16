import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { AuthContext } from '../../Context/AuthContext'
import { DeleteOffre, GetoffreByUser, selectMyOffre } from '../../features/offre/offreSlice'
import AdminItemOffre from './AdminItemOffre'
import AdminOffreItem from './AdminOffreItem'

function AdminOffre() {
   const { user } = useContext(AuthContext)
   const dispatch = useDispatch()
   const Offres = useSelector(selectMyOffre)

   useEffect(() => {

      dispatch(GetoffreByUser(user._id))

   }, [Offres])
   return (
      <div>
         <SiderBar />
        {Offres ?
         <div id="content" style={{  paddingTop: '51px' }}>
            <div className=" full_height">
                <div className="midde_cont">
                    <div className="container-fluid " >
                        <div className="row column_title">
                            <div className="col-md-12">
                                <div className="page_title">
                                    <h2 style={{ margintop: "25px" }}>Mes Offres</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row column_title"></div>
                        <div className="col-md-12">
                            <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Mes Offres</h2>
                                    </div>
                                </div>
                                <div className="table_section padding_infor_info">
                                    <div className="table-responsive-sm">
                                        <table className="table">
                                            <thead>
                                          <tr style={{ color: '#3b5998' }}>
                                             <th>#</th>
                                             <th>Titre</th>
                                             <th>Type d'emploi</th>
                                             <th>Compétences</th>
                                             <th>Durée</th>
                                             <th>Date</th>
                                             <th></th>
                                             <th></th>

                                          </tr>
                                       </thead>
                                       {
                                          Offres.map((offre, i) => {
                                             return (
                                                <AdminItemOffre offre={offre} i={i} DeleteOffre={DeleteOffre} dispatch={dispatch} />
                                             )
                                          })
                                       }
                                    </table>
                                 
                              </div>
                           </div>
                        </div>
                        <div className="col-md-2"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div> : <body className="dashboard dashboard_1">
            <div id="content">
               <div className="container">
                  <div className="center verticle_center "style={{marginTop:'45px'}} >
                     <div className="login_section">
                     <div className="login_form">
                     <div className="compte">
                       <p> Bonjour " Utilisateur "</p>
                       </div>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
         </body>
       }
      </div>
   )
}

export default AdminOffre