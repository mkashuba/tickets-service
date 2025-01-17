export default class TicketsServiceApi {
    _apiBase = 'https://api.mlab.com/api/1/databases/tickets-service-db/collections/';
    _apiKey = '?apiKey=ZOY2UdsgMzY3I9T7pkP6QQ4XvH3k7bR1';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}${this._apiKey}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllEvents = async () => {
        const res = await this.getResource('events');
        return res;
    }

    getEventDetails = async (id) => {
        const res = await this.getResource(`events/${id}`);
        return this._transformEventDetails(res);
    }

    _transformEventDetails = (event) => {
        const transformedEvent = {
            eventName: null,
            artist: null,
            eventStart: null,
            description: null,
            images: null,
            ticketsStatus: null,
            ticketsAmount: null,
            ticketsSold: null,
            priceRanges: null
        }

        const res = {...transformedEvent, ...event};
        return res;
    }

    setResource = async (url, data) => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            redirect: 'follow'
          };

        const res = await fetch(`${this._apiBase}${url}${this._apiKey}`, requestOptions);

        if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }

        return await res.json();

    };

    setUser = async (user) => {
        const res = await this.setResource('users', user);
        return res;
    }
    

}