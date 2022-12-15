import { FILTER_CHANGE } from '../actions/actionTypes'

const initialState = {
  checked: {
    all: true,
    0: true,
    1: true,
    2: true,
    3: true,
  },
}

const filterReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FILTER_CHANGE:
      return { checked: payload }
    default:
      return state
  }
}

export default filterReducer
