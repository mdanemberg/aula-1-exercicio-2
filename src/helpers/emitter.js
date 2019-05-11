export default class Emitter {
  constructor () {
    this.subscribers = []
  }

  subscribe (event, callback) {
    this.subscribers.push({
      event,
      callback
    })
  }

  emit ({event, data}) {
    console.log('Event', {event, data})
    this.subscribers.forEach((subscriber) => {
      if (subscriber.event === event) {
        subscriber.callback(data)
      }
    })
  }
}
