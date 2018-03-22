import wepy from 'wepy'
import EventBus from './EventBus.js'

export default class Actor {
  constructor(role) {
    this.role = role
  }

  getID() {
    return this.role.id
  }

  async prepare(script) {
    wepy.setNavigationBarTitle({
      title: '对方正在输入...'
    })
    let delay = this._calcTypingTime(script)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }

  act(script) {
    wepy.setNavigationBarTitle({
      title: ''
    })
    EventBus.publish(EventBus.Events.ActionFinish, {
      role: this.role,
      script: script
    })
  }

  _calcTypingTime(script) {
    let numOfWord = script.content.length
    return numOfWord * 80
  }
}
