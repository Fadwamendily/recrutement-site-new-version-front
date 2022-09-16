//A bunch of API call to the server (all are async functions) // Un tas d’appels d’API vers le serveur (tous sont des fonctions asynchrones)
const AuthService = {

    register: function (userInfo) {
        console.log('jsonData', JSON.data)
        return fetch("http://localhost:5000/users/register",

            {
                method: 'POST',
                body: JSON.stringify(userInfo), // La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON
                headers: {
                    'Content-Type': 'application/json'
                },

                credentials: 'include'  // Fetch Envoie des cookies provenant de users/register req à ce site.
            })
            .then((res, errors) => {
                if (res.status === 404) {
                    return errors
                } else {
                    return res.json()
                        .then(jsonData => jsonData)
                }
            })

    },

    login: function (userInfo) {
        return fetch("http://localhost:5000/users/login",
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // n3adi biha ll Token //gérer token
            }).then((res, errors) => {
                if (res.status === 404) {
                    return errors
                } else {
                    if (res.status !== 401)
                        return res.json().then(jsonData => jsonData)
                    else
                        return { isAuthenticated: false, user: { email: "", role: "", id: "", name: "", avatar: "", phoneNumber: "", adress: "" }  }
                }
            })
    },

    logout: function () {

        return fetch("http://localhost:5000/users/logout", { credentials: 'include' })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    isAuthenticated: function () {
        return fetch("http://localhost:5000/users/authenticated", { credentials: 'include' })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return { isAuthenticated: false, user: { email: "", role: "", name: "", avatar: "", phoneNumber: "", adress: "" } }
            })
    },
    getme: function () {
        return fetch("http://localhost:5000/users/getme", { credentials: 'include' })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return null
            })
    }

}

export default AuthService;