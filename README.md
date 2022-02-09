## 使用

+ npm start           运行
+ npm run build       编译
+ npm run preview     预览
+ npm run reinstall   重新安装依赖
+ npm run tsc         验证ts
+ npm run fix         eslint格式化配合husky使用
+ npm run prepare     husky预install
+ 环境变量在根目录.env中声明，代码中通过process.env获取

## 内置开箱即用的husky钩子

+ npx husky add .husky/pre-commit "npx lint-staged"
+ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
+ 利用husky添加pre-commit钩子，在提交到git暂存区之前执行 lint-staged
  ```
  lint-staged 执行如下命令
  "prettier --write"  prettier格式化文档
  "npm run fix"       使用eslint修复代码语法格式
  "git add"           提交代码到暂存区
  ```
+ 利用husky添加commit-msg钩子，在提交到git暂存区之前验证提交信息的格式
