import React from 'react'

function CandidatureItem({candidat, i}) {
    return (
            <tbody>
                <tr>
                    <td>{i + 1} </td>
                    <td>{candidat.userId.name} </td>
                    <td>{candidat.userId.email}</td>
                    <td>{candidat.offreId.title}</td>
                    <td>{candidat.userId.adress}</td>
                    <td>{candidat.domaine}</td>
                    <td>{candidat.skills}</td>
                    <td>{candidat.lm} </td>
                    <td><a href={'http://localhost:5000/getfile/' + candidat.cv} target='_blank' ><button type="button" className="btn btn-primary btn-xs"> 
                        <i className="fa fa-user"> </i> Voir CV
                    </button></a>
                    <br/>
                    <br/>
                    { candidat.autreCV &&
                    <a href={'http://localhost:5000/getfile/' + candidat.autreCV} target='_blank' ><button type="button" className="btn btn-success btn-xs"> 
                        <i className="fa fa-user"> </i> Voir CV   
                    </button> </a> }</td>
                </tr>
            </tbody>

    )
}

export default CandidatureItem