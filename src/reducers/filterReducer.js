const filterReducer = (state, action) => {
  const { checked } = state
  console.log('reducer ', action)
  const checkedAll = Object.keys(checked).reduce((acc, key) => {
    acc[key] = !checked[key]
    return acc
  }, {})
  // console.log(checked)
  // console.log(action)
  // console.log(checkedAll)
  switch (action.type) {
    case 'TOGGLE_ALL':
      return { ...state, checked: checkedAll }
    case 'TOGGLE_FILTER':
      return { ...state, checked: { ...checked, none: !checked.none, all: false } }
    case 'TOGGLE_1':
      return { ...state, checked: { ...checked, 1: !checked[1], all: false } }
    case 'TOGGLE_2':
      return { ...state, checked: { ...checked, 2: !checked[2], all: false } }
    case 'TOGGLE_3':
      return { ...state, checked: { ...checked, 3: !checked[3], all: false } }
    default:
      return state
  }
}

export default filterReducer
