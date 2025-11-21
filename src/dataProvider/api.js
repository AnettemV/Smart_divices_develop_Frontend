class Api { 
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl
        this._header = headers
    }

    _handleServerResponse(res) {
        return res.ok ? res.json() : Promise.reject('Error: ${res.status}');
    }

    updateCard(cardId, Like) {
        return fetch (`${this._baseUrl}/updateCard/${cardId}`, {
            method: "PATCH",
            headers: this._header,
            body: JSON.stringify({
                 Like }),
    }).then(this._handleServerResponse);
    }

    update(card) {
        return fetch (`${this._baseUrl}/updateCard/${card._id}`, {
            method: "PATCH",
            headers: this._header,
    }).then(this._handleServerResponse);
}

    deleteCard(id) {
  return fetch(`${this._baseUrl}/deleteCard/${id}`, {
    method: "DELETE",
  }).then(this._handleServerResponse);
}

    getAllCards(){
        return fetch(`${this._baseUrl}/getAllCards`, {
            headers: this._header,
        }).then(this._handleServerResponse);
    }
}

const api = new Api({
    baseUrl: "https://smart-divices-develop.onrender.com",
    headers: {
        "Content-Type": "application/json"
    },
});
export default api;