//A bunch of API call to the server (all are async functions)
const AuthService = {

    register: function (userInfo) {
        return fetch("http://localhost:5000/users/register",
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    login: function (userInfo) {
        return fetch("http://localhost:5000/users/login",
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // n3adi biha ll Token //grer token
            }).then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return { isAuthenticated: false, user: { email: "", role: "" } }
            })
    },

    logout: function () {

        return fetch("http://localhost:4000/users/logout", { credentials: 'include' })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    isAuthenticated: function () {
        return fetch("http://localhost:4000/users/authenticated", { credentials: 'include' })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return { isAuthenticated: false, user: { email: "", role: "" } }
            })
    },

    }

    export default AuthService;