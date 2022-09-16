import { requests } from "../requests"
import axios from 'axios'

export function ALLCandidat() {
    return axios.get(requests.condidatapi + '/ALLCondidat')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}

export function createCandidat(candidatInfo) {

    return axios.post(requests.condidatapi + '/AddCondidat', candidatInfo)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function deleteCondidat(id){
    return axios.delete(requests.condidatapi + `/deleteCondidat/` + id)
    .then(res =>{
        console.log(res)
        return id
    })
    .catch(err => {
        return err
    })
}