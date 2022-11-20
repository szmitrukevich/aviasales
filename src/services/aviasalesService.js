/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class AviasalesService {
  _apiBase = 'https://aviasales-test-api.kata.academy/'

  async getSearchId() {
    const res = await fetch(`${this._apiBase}search`)
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return res.json()
  }

  async getTickets(id) {
    const res = await fetch(`${this._apiBase}tickets?searchId=${id}`)
    return res.json()
  }
}
