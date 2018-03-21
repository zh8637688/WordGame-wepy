const Scripts = [{
    id: 0,
    roleID: 0,
    content: '我是第一条剧本',
    type: 0
  },
  {
    id: 1,
    roleID: 1,
    type: 0,
    selections: [{
        content: '选项1',
        goto: 2
      },
      {
        content: '选项2',
        goto: 3
      }
    ]
  },
  {
    id: 2,
    roleID: 0,
    content: '我是第二条剧本',
    type: 0
  },
  {
    id: 3,
    roleID: 0,
    content: '我是第三条剧本',
    type: 0
  }
]

module.exports = Scripts
