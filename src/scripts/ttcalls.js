const ttcalls = {
    getAllDestinations() {
        return fetch("http://localhost:8088/").then(response => response.json())
    },

    postNewDestinations(newDest) {
        return fetch("http://localhost:8088/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newDest)
        }).then(response => response.json())
    }
}