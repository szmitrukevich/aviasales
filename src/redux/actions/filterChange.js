import { FILTER_CHANGE } from './actionTypes'

const filterChange = (filterList) => ({
  type: FILTER_CHANGE,
  payload: filterList,
})

export default filterChange
