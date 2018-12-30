class EventDispatcher {
  constructor(types) {
    this.types = types
    this.listeners = {}

    for (let type of types) {
      this.listeners[type] = []
    }
  }

  validateType = type => {
    if (this.types.indexOf(type) === -1) {
      throw new Error(
        `EventDispatcher child class ${this.constructor.name} has no event of type "${type}".`
      )
    }
  }

  addEventListener = (type, listener) => {
    this.validateType(type)

    if (this.listeners[type].indexOf(listener) === -1) {
      this.listeners[type].push(listener)
    } else {
      console.log(
        `EventDispatcher child class ${
          this.constructor.name
        } will not add redundant listener for event "${type}".`
      )
    }
  }

  removeEventListener = (type, listener) => {
    this.validateType(type)

    const listenerIndex = this.listeners[type].indexOf(listener)
    if (listenerIndex === -1) {
      throw new Error(
        `EventDispatcher child class ${
          this.constructor.name
        } has no listener ${listener} of type ${type}.`
      )
    } else {
      this.listeners[type].splice(listenerIndex, 1)
    }
  }

  dispatchEvent = (type, data) => {
    this.validateType(type)

    for (let listener of this.listeners[type]) {
      listener({ ...data, type })
    }
  }
}

export default EventDispatcher
