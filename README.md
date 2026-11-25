# fundamental

一个用于学习前端基础、JavaScript 练习和工程化工具的中文仓库。

## 技术栈

- 应用：React 19 + TypeScript，使用 TSX 编写组件，CSS 编写样式。
- 原有示例：原生 HTML、CSS、JavaScript，使用 ES Modules。
- 笔记：Markdown，包含 React Hooks、工程化和面试题等内容。
- 开发与构建：Vite + React 插件，支持 TSX、React Fast Refresh 和生产构建。
- 工程工具：ESLint 10、Prettier 3、Husky 9、lint-staged、Commitlint 和 GitHub Actions。
- 运行环境：Node.js 22.22.1+，包管理器固定为 pnpm 12.18.0。

## 目录

```text
fundamental/
├── src/                      # React 应用
│   ├── main.tsx              # 挂载入口
│   ├── App.tsx               # 主组件
│   └── styles/index.css      # 全局样式
├── examples/                 # 独立运行的原生示例
│   ├── coding/               # JavaScript 练习
│   └── tools/                # 秒表等 HTML 工具
├── docs/                     # 学习资料
│   ├── react/                # React 笔记
│   ├── 工程化/               # ESLint、Prettier、Husky 笔记
│   ├── 真题/                 # 面试题
│   └── superpowers/          # 历史工程计划
├── config/vite/              # HTML 生成、旧地址兼容插件
├── scripts/                  # 包管理器检查等工程脚本
├── .github/workflows/        # CI
├── .husky/                   # Git hooks
├── vite.config.ts            # TSX 入口与 Vite 配置
└── tsconfig.json             # TypeScript 配置
```

根目录保留包管理器、ESLint、Prettier 等工具的标准配置文件，方便工具自动识别。
应用的新组件放入 `src/components/`；独立原生示例放入 `examples/`，笔记放入 `docs/`。

`examples/` 及 `docs/react/`、`docs/工程化/`、`docs/真题/` 中的原有学习内容保持冻结，
未经明确同意，不应修改、移动或格式化其中的文件。
新增的 React 应用文件可正常开发。

## 开始使用

需要 Node.js `22.22.1` 或更高版本，包管理器固定为 pnpm `12.18.0`。可通过 Corepack 启用：

```bash
corepack enable
corepack install
pnpm install --frozen-lockfile
pnpm dev
```

打开终端输出的本地地址（默认 `http://127.0.0.1:5173/`），即可看到 React 计数器示例。
编辑 `src/App.tsx` 并保存，即可通过 Fast Refresh 查看修改。新组件可放在
`src/components/`，然后在 `App.tsx` 中导入并使用。按 `Ctrl+C` 停止服务；默认端口
被占用时，Vite 会选择下一个端口。

入口流程：Vite 自动生成的 HTML → `src/main.tsx` → `src/App.tsx`。
TSX 的转译由 Vite 处理，类型检查由 `pnpm typecheck` 单独执行，`pnpm build` 会先检查类型。

### 设置 TSX 入口

在 `vite.config.ts` 中修改：

```ts
const entry = '/src/main.tsx';
```

该路径同时用于开发服务和生产构建。`config/vite/tsx-entry.ts` 中的 `tsxEntry()` 插件在开发时自动返回包含
`#root` 容器的 HTML，并通过 `transformIndexHtml` 注入热更新支持；构建时使用
`build.rolldownOptions.input` 打包 TSX，再自动生成引用构建后 JS、CSS 的 `dist/index.html`。
浏览器仍然需要 HTML 文档，但源码中不再需要单独的 HTML 文件。
如需修改页面标题或容器，可以调整该插件中的 `createHtml()`。

开发服务可访问 `/examples/tools/秒表.html` 和 `/examples/coding/demo.html` 等原生页面。
`config/vite/legacy-paths.ts` 保留旧 `/src/tools/`、`/src/coding/` 及学习笔记地址的兼容访问。
这些兼容映射只作用于开发服务。默认生产构建仍只打包 React 应用，不包含原生页面和笔记。

常用命令：

```bash
pnpm dev               # 启动本地开发服务
pnpm typecheck         # 检查 TypeScript 类型
pnpm build             # 类型检查并构建到 dist/
pnpm preview           # 本地预览 dist/（先运行 pnpm build）
pnpm run lint          # 检查 JavaScript、TypeScript 和 React Hooks
pnpm run format:check  # 检查格式
pnpm test              # 运行全部质量检查
pnpm run format        # 格式化可写文件
```

仅使用 pnpm 安装依赖；安装检查会拒绝 npm、yarn 及版本不匹配的 pnpm。
提交 `pnpm-lock.yaml`，不要生成或提交其他包管理器的锁文件。CI 使用
`pnpm install --frozen-lockfile`，依赖声明与锁文件不一致时会直接失败。
新增依赖使用 `pnpm add <包名>`（开发依赖加 `-D`），默认保存精确版本。

提交前会通过 Husky 运行 lint-staged；提交信息由 Commitlint 按 Conventional Commits 规范校验。
