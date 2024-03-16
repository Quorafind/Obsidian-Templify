<div align="center">
<img height="48" width="48" src="./media/layout-template.svg"> 
<p>Templify [/ˈtem.plɪ.faɪ/]: 将您的笔记转换为不同的布局。</p>
</div>

<p align="center">
<a href="https://github.com/Quorafind/Obsidian-Templify/blob/main/README.md">English</a> | <a href="https://github.com/Quorafind/Obsidian-Templify/blob/main/README-ZH.md">中文</a>
</p>


![templify](https://raw.githubusercontent.com/quorafind/obsidian-templify/main/media/templify.gif)

> [!warning]
> Templify 插件**不是开源**的。但是 Obsidian 团队有权审查 Templify 的源代码。

更详细的说明在[这里](https://raw.githubusercontent.com/quorafind/obsidian-templify/main/media/templify-demo.mp4).

## 特点

根据所选模板以不同的布局呈现您的笔记。

## Templify 嵌入

您可以通过任何视图的标题菜单复制视图状态并将其粘贴到 Templify 代码块中，如下所示：

````markdown
```templify-embed
{"state":{"query":"templify","matchingCase":false,"explainSearch":true,"collapseAll":true,"extraContext":true,"sortOrder":"byCreatedTime"},"type":"search"}
```
````

它将呈现如下：

![templify-embed](https://raw.githubusercontent.com/quorafind/obsidian-templify/main/media/templify-3.png)

## 当前模板

- **康奈尔模板**：康奈尔方法提供了一种压缩和组织笔记的系统化格式。这种记笔记的系统既简单又高效。它是一种将每页分成三个部分的笔记组织格式：左侧的2.5英寸列，右侧的2英寸列和中间的6英寸列。右侧列用于课堂笔记，左侧大列用于根据所记笔记制定问题，底部空间用于总结笔记。
- **艾森豪威尔模板**：艾森豪威尔矩阵是一种组织任务的方法。它是一个简单的2x2矩阵，可帮助您根据任务的紧急性和重要性对任务进行优先排序。
- **自定义模板**：您可以使用 `Templify` 插件创建自己的模板。

## 如何创建自定义模板

尚未提供

## 如何使用

1. 点击左侧边栏中的 Templify 图标打开插件。
2. 从列表中选择一个模板。
3. 单击以使用所选模板创建新笔记。
4. 现在，根据所选模板的布局和内容呈现笔记。
5. 您可以开始在新笔记中记笔记。

## 如何安装

### 从 Obsidian

尚未提供

### 从 GitHub

1. 从 [最新版本](http://github.com/quorafind/obsidian-templify/releases/latest) 下载 `main.js`、`styles.css` 和 `manifest.json`。
2. 将这些文件复制到您的 Obsidian vault 文件夹下的 `.obsidian/plugins/templify/`。
3. 在 Obsidian 中重新加载插件。
4. 转到设置中的社区插件选项卡，并启用 Templify 插件。
5. 现在，Templify 插件应该在左侧边栏中可用。
