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

  async sendRequest(id) {
    let res
    try {
      res = await fetch(`${this._apiBase}tickets?searchId=${id}`)
      if (res.status === 500) {
        throw new Error('500')
      }
    } catch (e) {
      if (e.message === '500') {
        res = this.sendRequest(id)
        return res
      }
      throw new Error()
    }
    return res
  }

  async getTickets(id) {
    const res = await this.sendRequest(id)
    return res.json()
  }
}
