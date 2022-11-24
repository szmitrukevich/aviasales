import { TICKETS_LOAD, GET_SEARCH_ID, GET_TICKETS, GET_ERROR } from './actionTypes'

export const toggleIsLoading = (isLoading) => ({ type: TICKETS_LOAD, payload: isLoading })
export const updateSearchId = (id) => ({ type: GET_SEARCH_ID, payload: id })
export const updateTicketList = (array) => ({ type: GET_TICKETS, payload: array })
export const throwError = (error) => ({ type: GET_ERROR, payload: error })
