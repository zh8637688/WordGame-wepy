# WordGame
基于wepy实现的微信小程序，一款文字游戏

<img src="https://github.com/zh8637688/WordGame/blob/master/image/screen.gif?raw=true" width = "272" height = "426" alt="截图" align=center />

### 1. 安装 [wepy](https://github.com/wepyjs/wepy)
```bash
npm install wepy-cli -g
```

### 2. 安装依赖库
```bash
cd wordgame
npm install
```

### 3. 编译代码，转换至小程序代码
```bash
wepy build
```

### 4.预览
在微信开发工具中导入项目，项目路径为`dist`目录


### 游戏剧本
```
Scripts = {
  // 游戏角色列表
  roles: [{
    id: 0,          // 角色id
    name: 'X',      // 角色名称
    avatar: ''      // 角色头像
  }],
  playerRoleID: 0,  // 玩家扮演的角色id
  chapters: [{
    name: '第一章',  // 章节名称
    lines: [{       // 台词
      roleID: 0,
      content: 'https://xxx.png',
      contentType: 1,   // 台词类型，0表示文本，1表示图片
      goto: '剧本2'      // 下一条台词的id
    }, {
      id: '剧本2'
      roleID: 1,
      selections: [{    // 玩家的选项
        content: '跳转到第二条剧本',
        goto: '剧本3'
      }, {
        content: '跳转到第三条剧本',
        goto: '剧本4'
      }]
    }]
  }]
}
```
