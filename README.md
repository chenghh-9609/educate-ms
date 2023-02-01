# 教育管理后台系统
后端代码仓库：https://github.com/chenghh-9609/educate-ms-springboot
## UI参考
https://www.doupir.com/2022/169566.html

## 项目目录结构
```
|--|-public （公共文件，包括logo、模板文件index.html等）
|--|-src （开发目录）
|   |-------apis（请求文件）
|   |-------assets（公共文件，例如图片等）
|   |-------components (组件目录）
|   |-------mock（api模拟数据文件）
|   |-------pages （页面目录,例如可以存放首页，管理页等页面）
|   |-------router（react路由配置文件）
|   |-------store（redux配置）
|   |-------styles （存放静态文件，图片等）
|   |-------tests (测试文件）
|   |-------App.jsx （react入口组件）
|   |-------index.js（入口文件）
|
|--|-build （打包输出目录，npm run build后才有）
|--|-node_module （nodejs模块，npm install后才有）
|
|--|-.env.development （开发环境 配置文件）
|--|-.env.production （生产环境 配置文件）
|--|-.gitignore （git忽略文件）
|--|-package.json （npm 配置文件）
```
## 项目启动

1. git clone https://github.com/chenghh-9609/educate-ms-react.git
2. cd educate-ms-react 进入项目目录
3. npm install  安装依赖模块
4. npm start 运行项目