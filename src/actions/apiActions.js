export const toggleIsLoading = (isLoading) => ({ type: 'TICKETS_LOAD', payload: isLoading })
export const updateSearchId = (id) => ({ type: 'GET_SEARCH_ID', payload: id })
export const updateTicketList = (array) => ({ type: 'GET_TICKETS', payload: array })
