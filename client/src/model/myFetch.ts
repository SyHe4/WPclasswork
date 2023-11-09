const API_ROOT = 'http://localhost:3000/api/v1';

export function rest(url: string){
    return fetch(url)
        .then(response => response.json())
}

export function api(action: string){
    return rest(`${API_ROOT}/${action}`);
}