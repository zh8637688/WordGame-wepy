const Scripts = {
  roles: [{
    id: 0,
    name: '小A',
    avatar: '/imgs/avatar_role_one.jpg'
  }, {
    id: 1,
    name: '小B',
    avatar: '/imgs/avatar_role_two.jpg'
  }],
  playerRoleID: 1,
  chapters: [{
    name: '第一章',
    lines: [{
      roleID: 0,
      content: '我是第一条剧本。'
    }, {
      roleID: 1,
      selections: [{
        content: '跳转到第二条剧本',
        goto: '剧本2'
      }, {
        content: '跳转到第三条剧本',
        goto: '剧本3'
      }]
    }, {
      id: '剧本2',
      roleID: 0,
      content: '我是第二条剧本',
      goto: '剧本4'
    }, {
      id: '剧本3',
      roleID: 0,
      content: '我是第三条剧本',
    }, {
      id: '剧本4',
      roleID: 1,
      selections: [{
        content: '发送一条文本',
        goto: '文本'
      }, {
        content: '发送一张图片',
        goto: '图片'
      }]
    }, {
      id: '文本',
      roleID: 0,
      content: '这是文本消息。',
      goto: '剧本5'
    }, {
      id: '图片',
      roleID: 0,
      content: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
      contentType: 1
    }, {
      id: '剧本5',
      roleID: 1,
      selections: [{
        content: '结束游戏',
        goto: '结束游戏'
      }, {
        content: '重新开始',
        restart: true
      }]
    }, {
      id: '结束游戏',
      roleID: 0,
      content: '游戏结束了。'
    }]
  }]
}

module.exports = Scripts
