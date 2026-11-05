# fundamental

一个用于学习前端基础、JavaScript 练习和工程化工具的中文仓库。

## 目录

- `src/coding/`：JavaScript 练习与演示。
- `src/工程化/`：ESLint、Prettier 和 Husky 的学习笔记。
- 根目录：项目质量工具、Git 钩子和协作说明。

`src/` 当前是冻结的学习内容区；未经明确同意，不应修改、移动或格式化其中的文件。

## 开始使用

需要 Node.js `22.22.1` 或更高版本。使用 npm 安装依赖：

```bash
npm install
```

常用命令：

```bash
npm run lint          # 检查 src/coding/
npm run format:check  # 检查根目录可写文件的格式
npm test              # 运行全部质量检查
npm run format        # 格式化根目录可写文件
```

提交前会通过 Husky 运行 lint-staged；提交信息由 Commitlint 按 Conventional Commits 规范校验。
