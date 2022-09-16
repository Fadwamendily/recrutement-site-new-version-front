import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { DeleteCv, Getallcv, GetallcvAdmin, selectCV } from '../../features/cv/cvSlice'
import CvItemAdmin from './CvItemAdmin'

function CvAdmin() {
    const dispatch = useDispatch()
    const CVss = useSelector(selectCV)

    useEffect(() => {

        dispatch(GetallcvAdmin())

    }, [])

    return (
        <div>
            <SiderBar />
            <div id="content" style={{ minHeight: '150vh', paddingTop: '51px' }}>
                <div className="container-fluid">
                    <div className="row column_title">
                        <div className="col-md-12">
                            <div className="page_title">
                                <h2 style={{ margintop: "25px" }}>Liste_CV</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row column_title"></div>
                    <div className="col-md-12">
                        <div className="white_shd full margin_bottom_30">
                            <div className="full graph_head">
                                <div className="heading1 margin_0">
                                    <h2>Liste_CV</h2>
                                </div>
                            </div>
                            <div className="table_section padding_infor_info">
                                <div className="table-responsive-sm">
                                    <table className="table">
                                        <thead>
                                            <tr >
                                                <th>#</th>
                                                <th>Nom</th>
                                                <th>Adresse</th>
                                                <th>Domaine</th>
                                                <th>Compétences</th>
                                                <th>Lettre de motivation</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {
                                            CVss.map((cv, i) => {
                                                return (
                                                    <CvItemAdmin cv={cv} i={i} DeleteCv={DeleteCv} dispatch={dispatch} />
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
    )
}

export default CvAdmin