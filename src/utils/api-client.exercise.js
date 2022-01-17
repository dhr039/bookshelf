import * as auth from 'auth-provider'
const apiURL = process.env.REACT_APP_API_URL

function client(endpoint, {token, headers: customHeaders, ...customConfig} = {}) {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined, ...customHeaders
        },
        ...customConfig,
    }

    return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
        if(response.status === 401) {
            await auth.logout()

            /*trigger a full page refresh to wipe any data that is in the memory:*/
            window.location.assign(window.location)

            /*for sake of completeness reject the promise (even  thought there will be a refresh anyway):*/
            return Promise.reject({message: 'please re-login'})
        }
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}

export {client}
