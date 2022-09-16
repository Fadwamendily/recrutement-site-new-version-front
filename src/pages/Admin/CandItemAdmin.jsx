import React from 'react'

function CandItemAdmin({ candidat, i, DeleteCondidat, dispatch }) {
    const onSubmit = () => {
        if (window.confirm("Souhaitez-vous supprimer l'offre")) {
            dispatch(DeleteCondidat(candidat._id))
        }
    }
    return (
        <tbody>
            <tr>
                <td>{i + 1} </td>
                <td>{candidat.userId.name} </td>
                { /* <td>{candidat.userId.email}</td>*/}
                <td>{candidat.offreId.title}</td>
                <td>{candidat.userId.adress}</td>
                <td>{candidat.domaine}</td>
                <td>{candidat.skills}</td>
                <td>{candidat.lm} </td>
                {/*<td><button type="button" className="btn btn-primary btn-xs">
                        <i className="fa fa-user"> </i> Voir CV
    </button></td>*/}
                <td style={{ display: 'flex' }}><a href={'http://localhost:5000/getfile/' + candidat.cv} target='_blank' >
                    <button type="button" className="btn cur-p btn-primary " >
                        <i class="fa fa-eye "></i>
                    </button></a>

                    {`  `}<span></span> <pre> </pre>
                    <a href={'http://localhost:5000/getfile/' + candidat.autreCV} target='_blank' >
                        <button type="button" className="btn cur-p btn-success " >
                            <i class="fa fa-eye "></i>
                        </button> </a>
                    <pre> </pre>
                    <button type="button" className="btn cur-p btn-danger " onClick={onSubmit} >   <i class="fa fa-trash-o white_color"></i></button>
                </td>
                {/*<td><span><a href={'http://localhost:5000/getfile/' + candidat.cv} target='_blank' ><i class="fa fa-eye blue1_color" ></i></a>
                </span>  <span>
                        <a href={'http://localhost:5000/getfile/' + candidat.autreCV} target='_blank' > <i class="fa fa-edit green_color"  ></i></a>
                    </span>  <span>
                        <i class="fa fa-trash-o red_color" onClick={onSubmit}  ></i></span></td>*/}
            </tr>
        </tbody>

    )
}

export default CandItemAdmin