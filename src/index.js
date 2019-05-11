// Esse import do db é pra criar um "database" fake
import db from './helpers/db'
import { getCategories } from './services/categories'
import { addItem } from './services/items'

db()

getCategories()
  .then((categories) => {
    console.log(categories)
  })

addItem({name: 'OMO', categoryId: 1})
  .then((item) => {
    console.log(item)
  })
