import React from 'react'

function CvItemAdmin({ cv, i, dispatch, DeleteCv }) {
    const onSubmit = () => {
        if (window.confirm("Souhaitez-vous supprimer le CV")) {
            dispatch(DeleteCv(cv._id))
        }
    }
    return (
        <tbody>
            <tr>
                <td>{i + 1}</td>
                <td>{cv.userId.name} </td>
                <td>{cv.userId.adress} </td>
                <td>{cv.domaine}</td>
                <td>{cv.skills}</td>
                <td>{cv.lm}</td>
                {/*<td><p className="Admin_view"><button type="button" class="btn cur-p btn-outline-primary">Afficher</button></p>
                </td>
    <td><p className="Admin_dlt"><button type="button" class="btn cur-p btn-outline-danger">Supprimer</button></p></td>*/}
                {/*<td><span><a href={'http://localhost:5000/getfile/' + cv.cv} target='_blank' ><button type="button" className="btn cur-p btn-primary" >  <i class="fa fa-eye "></i></button></a>
                </span> </td><td> <span> 
                <button type="button" className="btn cur-p btn-danger" onClick={onSubmit} ><i class="fa fa-trash-o white_color"></i></button> 
</span></td>*/}

                <span> <td><a href={'http://localhost:5000/getfile/' + cv.cv} target='_blank' ><i class="fa fa-eye blue1_color" ></i></a>
                </td> <td>
            <i class="fa fa-trash-o red_color" onClick={onSubmit}  ></i></td></span>

            </tr>
        </tbody>
    )
}

export default CvItemAdmin