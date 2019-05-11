export default () => {
  window.localStorage.getItem('categories') || window.localStorage.setItem('categories', JSON.stringify([
    {id: 1, name: 'Limpeza'},
    {id: 2, name: 'Comida'},
    {id: 3, name: 'Congelados'},
    {id: 4, name: 'Açougue'}
  ]))

  window.localStorage.getItem('items') || window.localStorage.setItem('items', '[]')
}
