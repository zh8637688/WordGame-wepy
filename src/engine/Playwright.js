import RoleList from '../script/RoleList.js'
import Scripts from '../script/Scripts.js'
export default class Playwright {

  getRoleList() {
    return RoleList
  }

  getScriptByChapter(chapter) {
    return Scripts
  }

  getCountOfChapter() {
    return 1
  }
}
