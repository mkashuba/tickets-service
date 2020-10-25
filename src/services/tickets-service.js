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
        return res;
    }
    

}