import wepy from 'wepy'
import EventBus from './EventBus.js'

export default class Actor {
  constructor(role, director) {
    this.role = role
    this.director = director
  }

  getID() {
    return this.role.id
  }

  async prepare(line) {
    EventBus.publish(EventBus.Events.SetTitle, '对方正在输入...')
    let delay = this._calcTypingTime(line)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }

  act(line) {
    this.director.setTitleWithChapterName()
    EventBus.publish(EventBus.Events.ActionFinish, {
      role: this.role,
      line: line
    })
  }

  _calcTypingTime(line) {
    if (line.contentType == undefined || line.contentType == 0) {
      let numOfWord = line.content.length
      return numOfWord * 80
    } else if (line.contentType == 1) {
      return 800
    }
    return 0
  }
}
