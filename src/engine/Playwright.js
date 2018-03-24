import Scripts from '../script/Scripts.js'
export default class Playwright {

  getRoleList() {
    return Scripts.roles
  }

  getPlayerRoleID() {
    return Scripts.playerRoleID
  }

  getChapter(chapterIndex) {
    if (chapterIndex < this.getCountOfChapter()) {
      return Scripts.chapters[chapterIndex]
    }
  }

  getCountOfChapter() {
    return Scripts.chapters ? Scripts.chapters.length : 0
  }
}
