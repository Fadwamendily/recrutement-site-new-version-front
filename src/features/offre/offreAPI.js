import { requests } from "../requests"
import axios from 'axios'
export function getallOffre() {

    return axios.get(requests.offreapi + '/ALLOffre')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


}

export function createOffre(offreInfo) {

    return axios.post(requests.offreapi + '/AddOffre', offreInfo)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function deleteOffre(id){
    return axios.delete(requests.offreapi + `/deleteOffre/` + id)
    .then(res =>{
        console.log(res)
        return id
    })
    .catch(err => {
        return err
    })
}
export function deleteOffreByUser(userId){
    return axios.delete(requests.offreapi + `/deleteOffreByUser/` + userId)
    .then(res =>{
        console.log(res)
        return userId
    })
    .catch(err => {
        return err
    })
}

export function getoffreByUser(userId) {

    return axios.get(requests.offreapi + '/getoffreByUser/' + userId)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


}

export function getOffreByID(id) {

    return axios.get(requests.offreapi + '/getOffreByID/' + localStorage.getItem('singleOffreId'))
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


}
export function updateOffre(id, offreInfo) {

    return axios.put(requests.offreapi + '/updateOffre/' + id , offreInfo )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


}
