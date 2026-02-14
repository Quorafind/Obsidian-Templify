# 0.5.0

> [!note]+ English
>
> ### New Features
> - feat: replace verification system with PKMer OAuth login (register at [pkmer.cn](https://pkmer.cn))
> - feat: add custom grid system (TemplifyGrid) replacing react-grid-layout, with drag, resize, and external drop support
> - feat: add local widget types — clocks, calendars, todos, and misc widgets (pomodoro, countdown, habit tracker, etc.)
> - feat: add Dataview widget type for rendering Dataview queries in layouts
> - feat: add Base widget type for generic embedded content
> - feat: add background customization — patterns, images, and videos with opacity/blur/size controls
> - feat: add banner (cover image) support with repositioning
> - feat: add page icon support (icons and emoji)
> - feat: add background pattern styles (dots, grid, lines, diagonal, cross, zigzag, boxes, diamonds)
>
> ### Improvements
> - refactor: migrate to Tailwind CSS v4 with colon prefix (`tpfy:`) for better build performance
> - refactor: update all UI components to new Tailwind prefix convention
> - refactor: improve document sync logic and conflict resolution
> - refactor: improve overall rendering performance
> - refactor: update widget configuration and registry system
> - feat: update translations for all new features (English and Chinese)
>
> ### Fixes
> - fix: kanban compatibility issue
> - fix: widget rendering issues

> [!note]- 中文
>
> ### 新功能
> - 新增：使用 PKMer OAuth 登录替代原有验证系统（请在 [pkmer.cn](https://pkmer.cn) 注册）
> - 新增：自定义网格系统（TemplifyGrid）替代 react-grid-layout，支持拖拽、调整大小和外部拖放
> - 新增：本地小组件类型 — 时钟、日历、待办事项和其他小组件（番茄钟、倒计时、习惯追踪器等）
> - 新增：Dataview 小组件类型，可在布局中渲染 Dataview 查询
> - 新增：Base 小组件类型，用于通用嵌入内容
> - 新增：背景自定义 — 图案、图片和视频，支持透明度/模糊/大小控制
> - 新增：横幅（封面图片）支持，可调整位置
> - 新增：页面图标支持（图标和表情符号）
> - 新增：背景图案样式（点、网格、线条、对角线、十字、锯齿、方块、菱形）
>
> ### 改进
> - 重构：迁移到 Tailwind CSS v4，使用冒号前缀（`tpfy:`）以提升构建性能
> - 重构：更新所有 UI 组件以适配新的 Tailwind 前缀规范
> - 重构：改进文档同步逻辑和冲突解决
> - 重构：提升整体渲染性能
> - 重构：更新小组件配置和注册系统
> - 新增：为所有新功能更新翻译（英文和中文）
>
> ### 修复
> - 修复：看板兼容性问题
> - 修复：小组件渲染问题

# 0.2.0

> [!note]+ English
>
> - fix: compatibility issue with kanban.
> - improve: new layout editor.

> [!note]- 中文
>
> - 修复：与看板插件的兼容性问题；
> - 改进：新的布局编辑器。

# 0.1.x

> [!note]+ English
>
> - feat: support templify embed;
> - feat: support custom template;
> - feat: support tag cloud/caption/heading widget;
> - fix: cannot create note correctly;
> - feat: alert when select a new layout when using layout editor;
> - fix: cannot parse title in editing note correctly;
> - feat: support verify token in settings;
> - feat: support using class to update color/font-size/font-family/background;
> - feat: support using icon in editor title;
> - fix: cannot view widget correctly;

> [!note]- 中文
>
> - 新增：支持嵌入视图；
> - 新增：支持自定义模板；
> - 新增：支持标签云/标题/标题小部件；
> - 修复：无法正确创建笔记；
> - 新增：使用布局编辑器时，选择新布局时会弹窗提示；
> - 修复：无法正确解析笔记标题；
> - 新增：支持在设置中验证令牌；
> - 新增：支持使用类更新颜色/字体大小/字体/背景；
> - 新增：支持在编辑器标题中使用图标；
> - 修复：无法正确查看小部件；

# 0.0.16

> [!note]+ English
>
> - fix: cannot save folder path correctly
> - fix: cannot edit file correctly

> [!note]- 中文
>
> - 修复：无法正确保存文件夹路径
> - 修复：无法正确编辑文件

# 0.0.14 ~ 0.0.15

- feat: support better daily note template;

# 0.0.13

- style: add icon to templify note(default);
- feat: support recent files;
- feat: support new template `daily-note`
- chore: update readme

# 0.0.12

- style: update border and background color style;
- settings: support toggle paper like in settings;
- doc: update readme

# 0.0.10 ~ 0.0.11

- chore: update i18n
- style: update i18n
- style: update background;
- fix: dark mode background;

# 0.0.9

- feat: support context menu to embed view;

# 0.0.7 ~ 0.0.8

- feat: support settings for folder and hide header;
- style: fixed too high view;

# 0.0.6

- fix: cannot save content correctly;
- feat: support embed view via modal(You can set hotkey for this);

# 0.0.5

- doc: support english template by default.
- fix: emoji not support in template.

# 0.0.1~0.0.4

- feat: support daily/cornell/eisenhower template;
- feat: support templify market;
- feat: support create note based on template;
- feat: support eisenhower color;
- style: add class for editor or widget component;
- style: add all style for default templates;
