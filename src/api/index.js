const API_URL = 'https://nva-backend-45i2l.ondigitalocean.app/api'


function getToken() {
    const AUTH_TOKEN = localStorage.getItem('authToken')
    return AUTH_TOKEN
}



export default {
    apiUrl: API_URL,
    getToken
}