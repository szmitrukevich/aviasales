const filterReducer = (state, action) => {
  const { checked } = state
  const checkedAll = Object.keys(checked).reduce((acc, key) => {
    acc[key] = !checked[key]
    return acc
  }, {})
  switch (action.type) {
    case 'TOGGLE_ALL':
      return { filter: 'all', checkedAll }
    case 'TOGGLE_1':
      return { filter: '1', checked: { ...checked, all: false, 1: true } }
    case 'TOGGLE_2':
      return { filter: '2', checked: { ...checked, all: false, 2: true } }
    case 'TOGGLE_3':
      return { filter: '3', checked: { ...checked, all: false, 3: true } }
    default:
      return state
  }
}

export default filterReducer
