import React, { useContext } from 'react'
import SiderBar from '../components/SiderBar'
import { AuthContext } from '../Context/AuthContext'

function EsnProfil() {
    const { isAuth, user } = useContext(AuthContext)

    return (
        <div>
            <SiderBar />
            <div>
                <div id="content" style={{ paddingTop: '51px' }}>
                    <div className="midde_cont">
                        <div className="container-fluid">
                            <div className="row column_title"></div>
                            <div className="row column_title">
                                <div className="col-md-12">
                                    <div className="page_title">
                                        <h2 style={{ margintop: "25px" }}>Mon Profil</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 " style={{ marginLeft: '275px' }} >
                                <div className="dark_bg full margin_bottom_30">
                                    <div className="full graph_head">
                                        <div className="heading1 margin_0">
                                            <h2 >mon profil</h2>
                                        </div>
                                    </div>
                                    <div className="full graph_revenue">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="content testimonial">
                                                    <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="item carousel-item active">
                                                                <div class="img-box"><img src={'http://localhost:5000/getfile/' + user.avatar} alt="" /></div>  
                                                                <p className="overview"><b /*style={{color:'#0085BD'}}*/ >{user.name}</b><pre /*style={{color:'#0085BD'}}*/></pre>ESN</p>
                                                                <b><p className="testimonial" /*style={{color:'#0085BD'}}*/ >tu peux visiter ton CV</p></b>
                                                                <div class="button_block"><button type="button" class="btn cur-p btn-light"  onClick={() => window.location.href = '/cv'}>Voir CV</button></div>
                                                            </div>
                                                            <div className="item carousel-item">
                                                                <div class="img-box"><img src={'http://localhost:5000/getfile/' + user.avatar} alt="" /></div>
                                                                <p className="overview"><b>{user.name}</b><pre></pre>ESN</p>
                                                                <p className="testimonial">tu peux visiter tes offres</p>
                                                                <div class="button_block"><button type="button" class="btn cur-p btn-light" onClick={() => window.location.href = '/mesOffre'}>Voir Offres</button></div>

                                                            </div>
                                                        </div>
                                                        <a class="carousel-control left carousel-control-prev"  href="#testimonial_slider" data-slide="prev">
                                                            <i className="fa fa-angle-left" ></i>
                                                        </a>
                                                        <a class="carousel-control right carousel-control-next" href="#testimonial_slider" data-slide="next">
                                                            <i className="fa fa-angle-right"></i>
                                                        </a>
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

export default EsnProfil