const Scripts = {
  roles: [{
    id: 0,
    name: '小A',
    avatar: '/imgs/avatar_role_one.jpg'
  }, {
    id: 1,
    name: '小B',
    avatar: '/imgs/avatar_role_two.jpg'
  }, {
    id: 2,
    name: '小C',
    avatar: '/imgs/avatar_default.png'
  }],
  playerRoleID: 2,
  chapters: [{
    name: '第一章',
    lines: [{
        roleID: 0,
        content: '我是第一条剧本'
      }, {
        roleID: 2,
        selections: [{
          content: '我是选项1',
          goto: '选项1'
        }, {
          content: '我是选项2',
          goto: '选项2'
        }]
      },
      {
        id: '选项1',
        roleID: 0,
        content: '我是第二条剧本',
      },
      {
        id: '选项2',
        roleID: 1,
        content: 'https://github.com/zh8637688/CustomViews/blob/master/slidetoastlayout/screenshot/screenshot.gif?raw=true',
        contentType: 1
      }
    ]
  }]
}

module.exports = Scripts
