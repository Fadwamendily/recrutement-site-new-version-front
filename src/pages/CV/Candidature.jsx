import React from 'react'
import SiderBar from '../../components/SiderBar'

function Candidature() {
    return (
        <div>
            <SiderBar />
            <div id="content" style={{ minHeight: '160vh', paddingTop: '51px' }}>
                <div className="inner_page contact_page">
                    <div className="container-fluid">
                        <div className="row column_title">
                            <div className="col-md-12">
                                <div className="page_title">
                                    <h2 style={{ margintop: "25px" }}>Candidature</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row column_title"></div>
                        <div className="col-md-12">
                            <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Candidature</h2>
                                    </div>
                                </div>
                                <div className="table_section padding_infor_info">
                                    <div className="table-responsive-sm">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nom</th>
                                                    <th>Email</th>
                                                    <th>Tel</th>
                                                    <th>Adresse</th>
                                                    <th>Domaine</th>
                                                    <th>Compétences</th>
                                                    <th>Lettre de motivation </th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Freelancer/ESN_Name</td>
                                                    <td>test@gmail.com</td>
                                                    <td>987 654 3210</td>
                                                    <td>adress</td>
                                                    <td>Frontend Developer</td>
                                                    <td>Frontend Developer</td>
                                                    <td>Frontend Developer Frontend Developer Frontend Developer Frontend Developer </td>
                                                    <td><button type="button" className="btn btn-primary btn-xs">
                                                        <i className="fa fa-user"> </i> Voir CV
                                                    </button></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Freelancer/ESN_Name</td>
                                                    <td>test@gmail.com</td>
                                                    <td>987 654 3210</td>
                                                    <td>adress</td>
                                                    <td>Frontend Developer</td>
                                                    <td>Frontend Developer</td>
                                                    <td>Frontend Developer Frontend Developer Frontend Developer Frontend Developer </td>
                                                    <td><button type="button" className="btn btn-primary btn-xs">
                                                        <i className="fa fa-user"> </i> Voir CV
                                                    </button></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Freelancer/ESN_Name</td>
                                                    <td>test@gmail.com</td>
                                                    <td>987 654 3210</td>
                                                    <td>adress</td>
                                                    <td>Frontend Developer</td>
                                                    <td>Frontend Developer</td>
                                                    <td>Frontend Developer Frontend Developer Frontend Developer Frontend Developer </td>
                                                    <td><button type="button" className="btn btn-primary btn-xs">
                                                        <i className="fa fa-user"> </i> Voir CV
                                                    </button></td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Candidature