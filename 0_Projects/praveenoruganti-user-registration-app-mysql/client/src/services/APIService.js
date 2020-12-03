export const createUser = (userData) => {
    return fetch("/api/V1_0/user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userData.userName,
            userPass: userData.userPass,
            emailId: userData.emailId,
            location: userData.location
        })
    })
        .then(res => res.text())
        .catch(err => 'Backend is Down');
}

export const checkUser = (userData) => {
    return fetch("/api/v1_0/checkUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userData.userName,
            emailId: userData.emailId
        })

    }).then(res => res.text())
        .catch(err => 'Backend is Down');
}

export const getUserInfoFromDB = (userData) => {
    return fetch("/api/v1_0/getUserInfoFromDB", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailId: userData.emailId
        })
    }).then(res => res.text())
        .catch(err => 'Backend is Down');
} 