import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import {  DeleteOffreByUser, selectOffre } from '../../features/offre/offreSlice'
import { GetUser, selectusers, DeleteUser } from '../../features/user/userSlice'
import UserItemAdmin from './UserItemAdmin'

function UserAdmin() {
    const dispatch = useDispatch()
    const user = useSelector(selectusers)
    const offre = useSelector(selectOffre)

    useEffect(() => {

        dispatch(GetUser())

    }, [])

    return (
        <div >
            <div >
                <SiderBar />
                <div id="content" style={{ paddingTop: '51px' }}>
                    <div className=" full_height" >
                        <div className="midde_cont">
                            <div className="container-fluid " >
                                <div className="row column_title">
                                    <div className="col-md-12">
                                        <div className="page_title">
                                            <h2 style={{ margintop: "25px" }}>Liste_Utilisateurs</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row column_title"></div>
                                <div className="col-md-12">
                                    <div className="white_shd full margin_bottom_30">
                                        <div className="full graph_head">
                                            <div className="heading1 margin_0">
                                                <h2>Liste_Utilisateurs</h2>
                                            </div>
                                        </div>
                                        <div className="table_section padding_infor_info">
                                            <div className="table-responsive-sm">
                                                <table className="table">
                                                    <thead>
                                                        <tr style={{ color: '#3b5998' }}>
                                                            <th>#</th>
                                                            <th>Image</th>
                                                            <th>Nom</th>
                                                            <th>Email</th>
                                                            <th>Role</th>
                                                            <th>Adresse</th>
                                                            <th>Telephone</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        user.map((user, i) => {
                                                            return (

                                                                <UserItemAdmin user={user} i={i} DeleteUser={DeleteUser} DeleteOffreByUser={DeleteOffreByUser} offre={offre} />

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
        </div>
    )
}

export default UserAdmin