import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import useravatar from '../../assets/images/useravatar.png'
import { AuthContext } from '../../Context/AuthContext'
function OffreIteme({ offre }) {
    const history = useHistory()
    const { user } = useContext(AuthContext)
    console.log('useeer', user)
    console.log('offre:', offre.userId.name)

    return (
        <div className="full progress_bar_inner">
            <div className="row">
                <div className="col-lg-12">
                    <div className="msg_section">
                        <div className="msg_list_main">
                            <ul className="msg_list">
                                <li>
                                    <span><img  src={'http://localhost:5000/getfile/' + offre.userId.avatar}  className="img-responsive" alt="#" /></span>
                                    <span>
                                        <span className="name_user">{offre.userId.name}</span>

                                        <span className="msg_user"><p><strong>Titre: </strong>{offre.title}</p>
                                            <p><strong> Type d'emploi: </strong>{offre.jobType} </p></span><br />
                                        <span className="msg_user"><p><strong> bio: </strong>{offre.bio} </p></span>
                                        <div><span className="msg_user"><p><i className="fa fa-clock-o"></i>  {offre.date.slice(0, 10)} <span></span>{` `} <i className="fa fa-map-marker"></i> {offre.userId.adress}</p></span></div>
                                        <span className="Admin_dlt"><button type="button" style={{ top: '65px' , backgroundColor:'#2f6398' , color:'white' }} className="btn cur-p " onClick={() => { localStorage.setItem('singleOffreId', offre._id); history.push('/Offre') }} >Voir l'offre</button></span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default OffreIteme