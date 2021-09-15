import axios from 'axios'
import {merge} from 'lodash'

const Config = {
    StoreID: 58958138,
    Token: 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD',
}

const Methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
}

export default class Api {
    static async getList() {
        const requestURL = 'https://app.ecwid.com/api/v3/'+ Config.StoreID +'/products?limit=3&token=' + Config.Token;

        return this.call('getList', requestURL, Methods.GET)
    }

    static async call(loader, url, method, params, data, options = {}) {
        return axios(merge({
            url: url,
            method: method,
            data: data,
            params: params,
            headers: {
                ContentType: 'application/json'
            }
        }, options)).then(result => {
            console.log('API call:', loader, '\nresult:', result.data)
            return result.data
        }).catch(error => {
            console.log(error)
        })
    }
}
