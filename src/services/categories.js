export const getCategories = () => new Promise((resolve) => {
  const categories = window.localStorage.getItem('categories')
  resolve(JSON.parse(categories))
})
