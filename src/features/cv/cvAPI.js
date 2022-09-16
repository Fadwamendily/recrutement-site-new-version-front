import { requests } from "../requests"
import axios from 'axios'
export function ALLCv() {

    return axios.get(requests.cvapi + '/ALLCv')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function createCV(cvIonfo) {
    return axios.post(requests.cvapi + '/AddCv', cvIonfo)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function deleteCv(id) {
    return axios.delete(requests.cvapi + `/deleteCv/` + id)
        .then(res => {
            console.log(res)
            return id
        })
        .catch(err => {
            return err
        })
}
/*export function getCVBySearch(searchQuery) {

    return axios.get(requests.cvapi + `/search?searchQuery=${searchQuery}`)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}*/
export function search(data) {

    return axios.get(`http://localhost:5000/cv/search?keyword=${data.keyword}`)
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )

}
export function getCvByID(id) {

    return axios.get(requests.cvapi + '/getCvByID/' + localStorage.getItem('singleCVId'))
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


}

export function getcvByUser(userId) {

    return axios.get(requests.cvapi + '/getcvByUser/' + userId)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


}
