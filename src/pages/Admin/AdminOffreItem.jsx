import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../Context/AuthContext';

function AdminOffreItem({ offre }) {
    const history = useHistory()
    
    return (
        <div>
            <div className="full progress_bar_inner">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="msg_section">
                            <div className="msg_list_main">
                                <ul className="msg_list">
                                    <li>
                                        <span><img src="images/layout_img/msg2.png" class="img-responsive" alt="#" /></span>
                                        <span>
                                            <span className="name_user">{offre.userId.name}</span>
                                            <span className="msg_user"><p><strong>Titre: </strong>{offre.title}      <span>  </span> <span>  </span>
                                                <strong>Type d'emploi: </strong>{offre.jobType} </p></span><br />
                                            <div><span className="msg_user"><p><i className="fa fa-clock-o"></i>  {offre.date.slice(0, 10)} <span></span>{` `} <i className="fa fa-map-marker"></i> {offre.userId.adress}</p></span></div>
                                            <span className="Admin_view"><button type="button" className="btn cur-p btn-outline-primary" style={{ top: '65px' }} onClick={() => {  localStorage.setItem('singleOffreId', offre._id)  ; history.push('/myOffre') }}  >Afficher</button></span>
                                            <span className="Admin_dlt"><button type="button" className="btn cur-p btn-outline-danger" style={{ top: '65px' }}>Supprimer</button></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOffreItem