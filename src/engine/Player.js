import wepy from 'wepy'
import Actor from './Actor.js'
import EventBus from './EventBus.js'

export default class Player extends Actor {
  constructor(role) {
    super(role)
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
  }

  async prepare(script) {
    EventBus.publish(EventBus.Events.SetSelection, {
      selections: script.selections
    })
    return new Promise((resolve) => {
      let onChooseSelection = (arg) => {
        EventBus.unsubscribe(EventBus.Events.ChooseSelection, onChooseSelection)
        let selection = script.selections[arg]
        script.content = selection.content
        script.goto = selection.goto
        resolve()
      }
      EventBus.subscribe(EventBus.Events.ChooseSelection, onChooseSelection)
    })
  }

  act(script) {
    EventBus.publish(EventBus.Events.ActionFinish, {
      role: this.role,
      script: script
    })
  }
}
