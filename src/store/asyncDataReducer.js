import AvaisalesService from '../services/aviasalesService'
import { toggleIsLoading, updateSearchId, updateTicketList, throwError } from '../actions/apiActions'
import { TICKETS_LOAD, GET_SEARCH_ID, GET_TICKETS, GET_ERROR } from '../actions/actionTypes'

const search = new AvaisalesService()

const initialState = {
  isLoading: true,
  searchId: '',
  tickets: [],
  error: false,
}
export const getSearchId = () => (dispatch) => {
  search
    .getSearchId()
    .then((res) => {
      dispatch(updateSearchId(res.searchId))
    })
    .catch(() => {
      dispatch(toggleIsLoading(false))
      dispatch(throwError(true))
    })
}

export const getTickets = (searchId) => (dispatch) => {
  dispatch(toggleIsLoading(true))
  search
    .getTickets(searchId)
    .then((res) => {
      dispatch(updateTicketList(res.tickets))
      if (!res.stop) {
        getTickets(searchId)
      } else {
        dispatch(toggleIsLoading(false))
      }
    })
    .catch(() => {
      dispatch(toggleIsLoading(false))
      dispatch(throwError(true))
    })
}

const asyncDataReducer = (state = initialState, { type, payload } = {}) => {
  const { tickets } = state
  switch (type) {
    case TICKETS_LOAD:
      return { ...state, isLoading: payload }
    case GET_SEARCH_ID:
      return { ...state, searchId: payload }
    case GET_TICKETS:
      return { ...state, tickets: [...tickets, ...payload] }
    case GET_ERROR:
      return { ...state, error: true }
    default:
      return state
  }
}

export default asyncDataReducer
