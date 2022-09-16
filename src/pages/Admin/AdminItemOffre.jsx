import React from 'react'
import { useHistory } from 'react-router-dom'

function AdminItemOffre({offre,DeleteOffre, dispatch,i}) {
    const history = useHistory()
    const onSubmit = () => {
        if (window.confirm("Souhaitez-vous supprimer l'offre")) {
            dispatch(DeleteOffre(offre._id))
        }
    }
  return (
        <tbody>
            <tr>
                <td>{i + 1}</td>
                <td>{offre.title} </td>
                <td>{offre.jobType}</td>
                <td>{offre.skills}</td>
                <td>{offre.duration} mois</td>
                <td>{offre.date.slice(0, 10)}</td>
                {/*<td><span><button type="button" className="btn cur-p btn-primary" onClick={() => {  localStorage.setItem('singleOffreId', offre._id)  ; history.push('/myOffre') }} ><i class="fa fa-eye"></i></button>
                </span>
                <button type="button" className="btn cur-p btn-primary" onClick={() => {  localStorage.setItem('singleOffreId', offre._id)  ; history.push('/') }} ><i class="fa fa-eye"></i></button>
                 <span>
                <button type="button" className="btn cur-p btn-danger" onClick={onSubmit}><i class="fa fa-trash-o white_color"></i></button>
                </span></td>*/}

                <td><span><i class="fa fa-eye blue1_color"  onClick={() => {  localStorage.setItem('singleOffreId', offre._id)  ; history.push('/myOffre') }}></i>
                </span>  <span>
                <i class="fa fa-edit green_color"  onClick={() => {  localStorage.setItem('singleOffreId', offre._id)  ; history.push('/UpdateOffre') }}></i>
                </span>  <span>
                <i class="fa fa-trash-o red_color"  onClick={onSubmit}></i></span></td>
            </tr>
        </tbody>
  )
}

export default AdminItemOffre