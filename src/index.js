// Esse import do db é pra criar um "database" fake
import db from './helpers/db'
import Emitter from './helpers/emitter'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

db()
const emitter = new Emitter()

const itemForm = new ItemForm({
  container: 'form-container',
  emitter
})
const itemList = new ItemList({
  container: 'item-list-container',
  emitter
})

itemForm.render()
itemList.render()
