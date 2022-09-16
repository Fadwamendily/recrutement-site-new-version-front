import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {toast} from 'react-toastify'
function OffreItemAdmin({ offre, i, DeleteOffre, dispatch }) {
    const history = useHistory()
    const onSubmit = () => {
        if (window.confirm("Souhaitez-vous supprimer l'offre")) {
            dispatch(DeleteOffre(offre._id, {toast}))
        }
    }
    return (

        <tbody>
            <tr>
                <td>{i + 1}</td>
                <td>{offre.userId.name}</td>
                <td>{offre.title} </td>
                <td>{offre.jobType}</td>
                <td>{offre.userId.adress}</td>
                <td>{offre.date.slice(0, 10)}</td>
                {/*<td><span className="Admin_view"><button type="button" className="btn cur-p btn-outline-primary" style={{ right: '50px' }} onClick={() => window.location.href = '/Offre'}>Afficher</button></span>
                </td>
    <td><span className="Admin_dlt"><button type="button" className="btn cur-p btn-outline-danger">Supprimer</button></span></td>*/}
                <td><span><button type="button" className="btn cur-p btn-primary" onClick={() => {  localStorage.setItem('singleOffreId', offre._id)  ; history.push('/oneOffre') }} ><i class="fa fa-eye"></i></button>
                </span> <span>
                <button type="button" className="btn cur-p btn-danger" onClick={onSubmit}><i class="fa fa-trash-o white_color"></i></button>
                </span></td>
            </tr>
        </tbody>

    )
}

export default OffreItemAdmin