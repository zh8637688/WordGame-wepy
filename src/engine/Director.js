import Playwright from './Playwright.js'
import Actor from './Actor.js'
import Player from './Player.js'

export default class Director {

  prepare() {
    this.playwright = this._initPlaywright()
    this.totalChapterCount = this.playwright.getCountOfChapter()
    this.curChapterID = this._initChapterIdxFromHistory()
    this.curScriptID = this._initScriptIdxFromHistory()
    this.scripts = this.playwright.getScriptByChapter(this.curChapterID)
    let roleList = this.playwright.getRoleList()
    this.actors = this._initActors(roleList)
  }

  async action() {
    if (this.curScriptID < this.scripts.length) {
      let script = this._getScriptByID(this.curScriptID)
      await this._dispatchScript(script)
      this.curScriptID = this._getNextScriptID()
      this.action()
    }
  }

  restoreHistory() {

  }

  _initPlaywright() {
    return new Playwright()
  }

  _initChapterIdxFromHistory() {
    return 0
  }

  _initScriptIdxFromHistory() {
    return 0
  }

  _initActors(roleList) {
    let actors = []
    for (let idx in roleList) {
      let role = roleList[idx]
      if (role.type == 0) {
        actors.push(new Actor(role))
      } else if (role.type == 1) {
        actors.push(new Player(role))
      }
    }
    return actors
  }

  _getNextScriptID() {
    let goto
    let curScript = this.scripts[this.curScriptID]
    if (curScript.goto != undefined) {
      goto = curScript.goto
    } else {
      goto = this.curScriptID + 1
    }
    return goto
  }

  _getScriptByID(id) {
    return this.scripts[id]
  }

  async _dispatchScript(script) {
    let actor = this._getActorByRoleID(script.roleID)
    await actor.prepare(script)
    actor.act(script)
  }

  _getRoleByID(roleID) {
    for (let idx in this.roleList) {
      if (this.roleList[idx].id == roleID) {
        return this.roleList[idx]
      }
    }
  }

  _getActorByRoleID(roleID) {
    for (let idx in this.actors) {
      if (this.actors[idx].getID() == roleID) {
        return this.actors[idx]
      }
    }
  }

  onPause() {

  }

  onResume() {

  }

  onDestory() {

  }
}
