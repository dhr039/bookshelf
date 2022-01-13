function client(endpoint, customConfig = {}) {
    //    make the method default to "GET"
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const config = {
        method: 'GET',
        ...customConfig,
    }
    return fetch(endpoint, config)
        .then(response => {
            return response.json()
        });
}

export {client}
