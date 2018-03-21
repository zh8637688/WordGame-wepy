const EventBus = {
  Events: {},
  actionMaps: new Map(),
  subscribe(event, action) {
    let actions = this.actionMaps.get(event)
    if (!actions) {
      actions = []
      this.actionMaps.set(event, actions)
    }
    actions.push(action)
  },
  unsubscribe(event, action) {
    let actions = this.actionMaps.get(event)
    if (actions) {
      for (let i = actions.length - 1; i >= 0; i--) {
        if (actions[i] === action) {
          actions.splice(i, 1)
        }
      }
    }
  },
  publish(event, arg) {
    let actions = this.actionMaps.get(event)
    if (actions) {
      for (let i in actions) {
        actions[i](arg)
      }
    }
  },
  registerEvent(event) {
    this.Events[event] = event
  }
}
module.exports = EventBus
