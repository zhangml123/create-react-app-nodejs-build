# create-react-app-nodejs-build


一、创建项目

1、安装 nodejs
安装 nvm 
```
# wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
重启终端
```
# nvm ls-remote
# nvm install v14.15.0
```
1、安装 create-react-app
```
# npm install create-react-app -g 

# create-react-app [PROJECT NAME]   
```
或者 yarn 安装
```
# npm install -g yarn

#yarn global add create-react-app

#create-react-app [PROJECT NAME]
```
修改create-react-app 服务端配置
```
# cd [PROJECT NAME]
# cp -r ./node_modules/react-scripts/config ./config
# cp -r ./node_modules/react-scripts/scripts ./scripts
```

创建项目服务端
```
# mkdir server
# cd server 
# npm init
# vim server.js
```
添加内容
```
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
app.listen(8080, () => console.log('Server listening on port 8080!'));
```
创建路由文件 routes / 数据库配置文件 db


react-create-app 创建接口api
```
# cd ../
vim ./config/webpackDevServer.config.js
```
添加内容
const apiRouter = require('../server/routes/api');

app.use('/api', apiRouter);

设置生成模式配置
```
vim config.js

module.exports = {
  apiUrl:"THE HOST OF API:8080"
};
```
修改文件 env.js , webpack.config.js  修改配置

```
cd ../
```
添加production 启动 script
```
vim package.json
```
```
"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "prod": "cd ./server && node ./server.js",
    "test": "node scripts/test.js"
  }
```
启动项目 

开发模式启动 
修改 server/db/config.json
```
{
	"user": "ROOT",
	"password": "PASSWORD",
	"database": "chain",
	"host": "127.0.0.1",
	"dialect": "mysql"
}
```
```
yarn start
```

生产模式启动 


修改 config/config.js
```
module.exports = {
  apiUrl:"THE HOST OF API:8080"
};
```
```
$ yarn build

$ yarn prod
```