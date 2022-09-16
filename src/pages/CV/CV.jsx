import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SiderBar from '../../components/SiderBar'
import { AuthContext } from '../../Context/AuthContext'
import { GetCvByID, GetcvByUser, selectCVById, selectMycv } from '../../features/cv/cvSlice'

function CV() {

    const CV = useSelector(selectCVById)
    const cvv = useSelector(selectMycv)
    const dispatch = useDispatch()
    console.log('cvvv', cvv)
    const { isAuth, user } = useContext(AuthContext)


    const { id } = useParams()
    useEffect(() =>
        dispatch(GetcvByUser(user._id))
        , [])

    const GetCv = () => {
        dispatch(GetcvByUser(user._id))
    }


    return (
        <div>
            <SiderBar />
            <div>
                <div id="content" style={{ paddingTop: '51px' }}>
                    <div className="midde_cont">
                        <div className="container-fluid">
                            <div className="row column_title">
                                <div className="col-md-12">
                                    <div className="page_title">
                                        <h2>Mon Profil</h2>
                                    </div>
                                </div>
                                <div className="row column2">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-8">
                                        <div className="white_shd full margin_bottom_30">
                                            <div className="full graph_head">
                                                <div className="heading1 margin_0">
                                                    <h2>CV</h2>
                                                </div>

                                            </div>
                                            <div className="full price_table padding_infor_info">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="full dis_flex center_text">

                                                            <div class="profile_img"><img width="120" src={'http://localhost:5000/getfile/' + user.avatar} className=" rounded-circle" alt="#" />
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <br/>

                                                                { (user.role === 'ESN') ||(user.role=== 'admin') ?
                                                                    <div><a href='/esnProfil'><i class="fa fa-angle-double-left" > <u> Retour</u></i></a>
                                                                </div>: ""
                                                                }
                                                            </div>
                                                            <div className="profile_contant">
                                                                <div className="contact_inner">
                                                                    <h3>{ }</h3>
                                                                    <p style={{ fontSize: '20px' }} ><strong >Nom: </strong></p><p style={{ fontSize: '18px' }}>{user.name}</p>
                                                                    <ul className="list-unstyled">
                                                                        <li > <p style={{ fontSize: '20px' }}><i className="fa fa-envelope-o"></i><strong> Email : </strong></p><p style={{ fontSize: '18px' }}>{user.email}</p></li>
                                                                        <li style={{ fontSize: '18px' }}><i className="fa fa-phone"></i>  <strong style={{ fontSize: '20px' }}> Teléphone:</strong>  {user.phoneNumber} <p></p></li>
                                                                        <li style={{ fontSize: '18px' }}> <i className="fa fa-map-marker"></i><strong style={{ fontSize: '20px' }}> Adresse:</strong>    {user.adress}<p></p> <br/> </li>
                                                                    </ul>
                                                                    <br />
                                                                    <br />
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                                <div >

                                                                    <div> <a href={'http://localhost:5000/getfile/' + cvv} target='_blank' >

                                                                        <button type="button" className="btn btn-primary btn-xs" onClick={GetCv} >
                                                                            <i className="fa fa-user"> </i> Voir CV
                                                                        </button>
                                                                    </a></div>
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
                </div>


            </div>

        </div>
    )
}

export default CV