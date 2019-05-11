import { deleteItem } from '../services/items'

export default class Item {
  constructor (props) {
    this.id = props.id
    this.name = props.name
    this.category = props.category
  }

  card () {
    return `
      <div class="card column is-one-third">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${this.name}</p>
            </div>
          </div>
          <div class="content">
            ${this.category.name}
          </div>
          <button class="button is-dark is-pulled-right">Excluir</button>
        </div>
      </div>
    `
  }

  async delete () {
    await deleteItem(this.id)
    this.item.remove()
  }

  binds () {
    this.item.getElementsByTagName('button')[0]
      .addEventListener('click', this.delete.bind(this))
  }

  render () {
    const item = document.createElement('div')

    item.classList.add('columns', 'is-multiline', 'is-centered')
    item.innerHTML = this.card(this.name, this.category)

    this.item = item
    this.binds()

    return item
  }
}
