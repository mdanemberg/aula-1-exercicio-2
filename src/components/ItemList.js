import Item from './Item'
import { getItems } from '../services/items'
import { getCategories } from '../services/categories'

export default class ItemList {
  constructor (props) {
    this.container = document.getElementById(props.container)
    this.emitter = props.emitter
    this.emitter.subscribe('newItem', this.addNewItem.bind(this))
  }

  addNewItem (item) {
    const category = this.categories.filter((category) => category.id === item.categoryId)
    item.category = category[0]
    const newItem = new Item(item)

    this.container.insertBefore(newItem.render(), this.container.firstChild)
  }

  async render () {
    this.categories = await getCategories()

    try {
      this.items = await getItems()

      const html = this.items.map(i => {
        const category = this.categories.filter((category) => {
          return category.id === i.categoryId
        })

        i.category = category[0]

        const item = new Item(i)
        return item.render()
      })

      html.forEach(el => this.container.appendChild(el))
    } catch (e) {
      console.log(e)
    }
  }
}
