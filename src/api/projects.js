import config from './index';

async function getProjects() {
    const response = await fetch(`${apiUrl}/projects`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authentication-Token': config.authToken
        },
    })
    return response.json()
}

export default {
    getProjects,
}