export const checkedAll = (list) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Object.keys(list).reduce((acc, key) => {
    acc[key] = !list.all
    return acc
  }, {})

export const updateFilters = (filter, filterList) => {
  let newList = {}
  if (filter === 'all') {
    newList = checkedAll(filterList)
  } else {
    newList = { ...filterList, [filter]: !filterList[filter], all: false }
  }
  if (Object.values(newList).filter((value) => value).length === 4) {
    newList = { ...newList, all: true }
  }
  return newList
}
