import axios from 'axios'

export default class Http {
    axiosHttpGet(url: any) {
        return new Promise((resolve: any, reject: any) => {
            axios.get(url).then((res: any) => {
                resolve(res)
            }).catch((err: any) => {
                resolve(err)
            })
        })
    }

    axiosHttpPost(url: any, params: any) {
        return new Promise((resolve: any, reject: any) => {
            axios.post(url, params).then((res: any) => {
                resolve(res)
            }).catch((err: any) => {
                resolve(err)
            })
        })
    }
}