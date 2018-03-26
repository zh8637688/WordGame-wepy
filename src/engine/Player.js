import wepy from 'wepy'
import Actor from './Actor.js'
import EventBus from './EventBus.js'

export default class Player extends Actor {
  constructor(role, director) {
    super(role, director)
    let userInfo = wepy.$instance.getUserInfo()
    if (userInfo) {
      role.avatar = userInfo.avatarUrl
    } else {
      let onRequestUserInfo = (arg) => {
        EventBus.unsubscribe('RequestUserInfo', onRequestUserInfo)
        role.avatar = arg.avatarUrl
      }
      EventBus.subscribe('RequestUserInfo', onRequestUserInfo)
    }
    role.fromMe = true
  }

  async prepare(line) {
    EventBus.publish(EventBus.Events.SetSelection, {
      selections: line.selections
    })
    return new Promise((resolve, reject) => {
      let onChooseSelection = (arg) => {
        EventBus.unsubscribe(EventBus.Events.ChooseSelection, onChooseSelection)
        let selection = line.selections[arg]
        if (selection.restart) {
          reject()
        } else {
          line.content = selection.content
          line.goto = selection.goto
          resolve()
        }
      }
      EventBus.subscribe(EventBus.Events.ChooseSelection, onChooseSelection)
    })
  }

  act(line) {
    EventBus.publish(EventBus.Events.ActionFinish, {
      role: this.role,
      line: line
    })
  }
}
