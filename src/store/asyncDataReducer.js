import AvaisalesService from '../services/aviasalesService'
import { toggleIsLoading, updateSearchId, updateTicketList } from '../actions/apiActions'

const search = new AvaisalesService()

const initialState = {
  isLoading: true,
  searchId: '',
  tickets: [],
}
export const getSearchId = () => (dispatch) => {
  search
    .getSearchId()
    .then((res) => {
      dispatch(updateSearchId(res.searchId))
    })
    .catch(() => dispatch(updateSearchId('')))
}

getSearchId()

export const getTickets = (searchId) => (dispatch) => {
  search
    .getTickets(searchId)
    .then((res) => {
      dispatch(updateTicketList(res.tickets))
      if (res.stop) {
        dispatch(toggleIsLoading(!res.stop))
      }
    })
    .catch(() => updateTicketList([]))
}

const asyncDataReducer = (state = initialState, { type, payload } = {}) => {
  const { tickets } = state
  switch (type) {
    case 'TICKETS_LOAD':
      return { ...state, isLoading: payload }
    case 'GET_SEARCH_ID':
      return { ...state, searchId: payload }
    case 'GET_TICKETS':
      return { ...state, tickets: [...tickets, ...payload] }
    default:
      return state
  }
}

export default asyncDataReducer
