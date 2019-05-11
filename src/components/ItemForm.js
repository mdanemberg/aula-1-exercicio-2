import { getCategories } from '../services/categories'
import { addItem } from '../services/items'

export default class ItemForm {
  constructor (props) {
    this.container = document.getElementById(props.container)
    this.emitter = props.emitter
  }

  async add (item) {
    const newItem = await addItem({
      ...item
    })

    this.emitter.emit({
      event: 'newItem',
      data: {
        ...newItem
      }
    })

    this.form['name'].value = ''
    this.form['category'].value = ''
  }

  onSubmit (event) {
    event.preventDefault()
    const name = this.form['name'].value
    const categoryId = +this.form['category'].value

    if (name) {
      this.add({
        name,
        categoryId
      })
    }
  }

  binds () {
    this.form.onsubmit = this.onSubmit.bind(this)
  }

  async render () {
    const categories = await getCategories()
    const form = `<div class="container">
      <div class="columns is-multiline is-centered" style="background: #e1e1e1; padding: 20px">
        <form name="create-item" id="item-form">
          <div class="field">
            <div class="control">
              <input type="text" class="input" name="name" placeholder="Produto">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <select class="select" name="category">
                ${categories.map((category) => `<option value="${category.id}">${category.name}</option>`)}
              </select>
            </div>
          </div>
          <div class="field is-pulled-right">
            <div class="control">
              <button type="submit" class="button is-dark">Adicionar</button>
            </div>
          </div>
        </form>
      </div>
    </div>`

    this.container.innerHTML = form
    this.form = document.getElementById('item-form')
    this.binds()
  }
}
