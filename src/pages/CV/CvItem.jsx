import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CvItem({ cv }) {
    const history = useHistory()
    return (
        <div>
            <div className="contact_blog">
                <div className="contact_inner">
                    <div className="left">
                        <h3>{cv.userId.name}</h3>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-envelope-o"></i> : {cv.userId.email}</li>
                            <li><i className="fa fa-phone"></i> : {cv.userId.phoneNumber}</li>
                            <li><i className="fa fa-map-marker"></i> : {cv.userId.adress}</li>
                        </ul>
                        <br />
                        <br />
                        <p><strong>Domaine: </strong>{cv.domaine} </p>
                        <p><strong>Compétences: </strong>{cv.skills}</p>

                    </div>
                    <div className="right">
                        <div className="profile_contacts">
                            <img class="img-responsive" src="images/layout_img/msg2.png" alt="#" />
                        </div>
                    </div>
                    <div className="leftr">
                        <p><strong>Lettre de motivation: </strong>{cv.lm}</p>
                    </div>
                    <div className="bottom_list">
                        <div className="right_button">
                        <a href={'http://localhost:5000/getfile/' + cv.cv} target='_blank' ><button type="button" style={{backgroundColor:'#0085BD', color:'white'}} className="btn btn btn-xs" > 
                                <i className="fa fa-user"> </i> Voir CV
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CvItem