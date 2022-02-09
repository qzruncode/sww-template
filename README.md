## 运行命令

+ npm start           运行
+ npm run build       编译
+ npm run preview     预览
+ npm run build:docs  文档
+ npm run reinstall   重新安装依赖
+ npm run tsc         验证ts
+ npm run fix         eslint格式化配合husky使用
+ npm run fix:all     eslint格式化所有文件
+ npm run fix:config  eslint格式化配置文件
+ npm run prepare     husky预install

## husky钩子

+ npx husky add .husky/pre-commit "npx lint-staged"
+ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

## 具备的功能

### 代码风格

+ 利用husky添加pre-commit钩子，在提交到git暂存区之前执行 lint-staged
  ```
  lint-staged 执行如下命令
  "prettier --write"  prettier格式化文档
  "npm run fix"       使用eslint修复代码语法格式
  "git add"           提交代码到暂存区
  ```

+ 利用husky添加commit-msg钩子，在提交到git暂存区之前验证提交信息的格式

### 功能点

+ 环境变量在根目录.env中声明，代码中通过process.env获取
+ proxy代理在config中的proxy.js中创建
+ 提供了ForkTsCheckerWebpackPlugin做代码运行时检测，为了提高编译速度默认是关闭的（在命令行中通过runtimeCheck配置）
+ 提供了rem转换，老代码没有做rem处理，默认关闭（在命令行中通过useRem配置）

### 编译提升

+ ts-loader移除，使用babel提供的@babel/preset-typescript做typescript转换
+ happypack创建多进程编译ts文件
+ 文件类的处理用webpack内置的asset处理
+ 编译提供performance配置，对打包的包体积做监控