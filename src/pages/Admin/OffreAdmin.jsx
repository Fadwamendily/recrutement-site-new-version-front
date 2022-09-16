import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { GetallOffre, selectOffre, DeleteOffre } from '../../features/offre/offreSlice'
import OffreItemAdmin from './OffreItemAdmin'

function OffreAdmin() {
    const dispatch = useDispatch()
    const Offres = useSelector(selectOffre)
   
    useEffect(() => {

        dispatch(GetallOffre())


    }, [Offres])
    return (
        <div>
            <SiderBar />
            <div id="content" style={{  paddingTop: '51px' }}>
            <div className=" full_height">
                <div className="midde_cont">
                    <div className="container-fluid " >
                        <div className="row column_title">
                            <div className="col-md-12">
                                <div className="page_title">
                                    <h2 style={{ margintop: "25px" }}>Liste_Offres</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row column_title"></div>
                        <div className="col-md-12">
                            <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Liste_Offres</h2>
                                    </div>
                                </div>
                                <div className="table_section padding_infor_info">
                                    <div className="table-responsive-sm">
                                        <table className="table">
                                            <thead>
                                                <tr style={{ color: '#3b5998' }}>
                                                    <th>#</th>
                                                    <th>Nom</th>
                                                    <th>Titre</th>
                                                    <th>Type d'emploi</th>
                                                    <th>Adresse</th>
                                                    <th>Date</th>
                                                    <th></th>
                                                    
                                                </tr>
                                            </thead>
                                            {
                                                Offres.map((offre, i) => {
                                                    return (
                                                        <OffreItemAdmin offre={offre} i={i} DeleteOffre={DeleteOffre} dispatch={dispatch} />

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
        </div>
    )
}

export default OffreAdmin