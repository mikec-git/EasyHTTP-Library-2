/**
* EasyHTTP Library
* Library for making HTTP requests
* 
* @version 2.0.0
* @author Mike Choi
* @license MIT
**/

class EasyHTTP {
    // Make an HTTP GET request
    get(url) {
        return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }

    // Make an HTTP POST request
    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }

    // Make an HTTP PUT request
    put(url, data) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }

    // Make an HTTP DELETE request
    delete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok){
                return 'Resource Deleted';
            } else { 
                throw new Error('Something went wrong');
            }
        })
        .catch(err => Promise.reject(err));
    }
}