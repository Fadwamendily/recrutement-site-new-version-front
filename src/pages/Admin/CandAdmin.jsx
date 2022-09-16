import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { DeleteCondidat, Getallcandidat, selectCandidat } from '../../features/candidatCv/candidatCvSlice'
import CandItemAdmin from './CandItemAdmin'

function CandAdmin() {
    const dispatch = useDispatch()
    const candidatCv = useSelector(selectCandidat)

    useEffect(() => {
        dispatch(Getallcandidat())
    }, [])
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
                                                  {  /*<th>Email</th>*/}
                                                    <th>Titre</th>
                                                    <th>Adresse</th>
                                                    <th>Domaine</th>
                                                    <th>Compétences</th>
                                                    <th>Lettre de motivation </th>
                                                    <th></th>
                                                    <th></th>
                                                    
                                                </tr>
                                            </thead>
                                            {
                                                candidatCv.map((condidat, i) => {
                                                    return (
                                                        <CandItemAdmin candidat={condidat} i={i} DeleteCondidat={DeleteCondidat} dispatch={dispatch} />
                                                    )
                                                })
                                            }
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

export default CandAdmin