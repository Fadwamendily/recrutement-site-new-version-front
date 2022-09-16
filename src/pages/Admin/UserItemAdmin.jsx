import React from 'react'
import { useDispatch } from 'react-redux'

function UserItemAdmin({ user, i, DeleteUser,DeleteOffreByUser,offre }) {
    const dispatch = useDispatch()
    const onSubmit = () => {
        if (window.confirm("Souhaitez-vous supprimer l'utilisateur")) {
            console.log('offre', offre)
            
            dispatch(DeleteUser(user._id))
            dispatch(DeleteOffreByUser(offre.userId._id))
            
        }
    }
    return (
        <tbody>
            { user.role !== 'admin' &&
            <tr>
                <td>{i + 1}</td>
                <td className="profile_contacts">
                    <img className="img-responsive " style={{ maxWidth: '80px' }} src={'http://localhost:5000/getfile/' + user.avatar} alt="#" />
                </td>
                <td>{user.name}</td>
                <td>{user.email} </td>
                <td>{user.role}</td>
                <td>{user.adress}</td>
                <td>{user.phoneNumber}</td>
                {/*<td><span className="Admin_dlt"><button type="button" className="btn cur-p btn-outline-danger" onClick={onSubmit} >Supprimer</button></span></td>*/}
                <td><span>
                    <button type="button" className="btn cur-p btn-danger" onClick={onSubmit}><i class="fa fa-trash-o white_color"></i></button>
                </span></td>
            </tr>
}
        </tbody>

    )
}

export default UserItemAdmin