const endpoint = `${process.env.REACT_APP_API_URL}/books?query=`

function client(query, customConfig = {}) {
    //    make the method default to "GET"
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const config = {
        method: 'GET',
        ...customConfig,
    }
    return fetch(endpoint + encodeURIComponent(query), config)
        .then(async response => {
            const data = await response.json()
            if(response.ok) {
                return data
            } else {
                return Promise.reject(data)
            }
        })
}

export {client}
