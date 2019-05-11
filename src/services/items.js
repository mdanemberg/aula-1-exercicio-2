export const getItems = () => new Promise((resolve) => {
  const items = window.localStorage.getItem('items')

  resolve(JSON.parse(items))
})

export const addItem = async item => new Promise((resolve) => {
  const items = JSON.parse(window.localStorage.getItem('items'))
  item.id = Date.now()
  items.push(item)
  window.localStorage.setItem('items', JSON.stringify(items))

  resolve(item)
})

export const deleteItem = itemId => new Promise((resolve) => {
  const items = JSON.parse(window.localStorage.getItem('items'))
  const itemsDeleted = items.filter(item => item.id !== itemId)
  window.localStorage.setItem('items', JSON.stringify(itemsDeleted))

  resolve('Deleted')
})
