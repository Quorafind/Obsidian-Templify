<div align="center">
<img height="48" width="48" src="./media/layout-template.svg"> 
<p>Templify [/ˈtem.plɪ.faɪ/]: make your notes into different layouts.</p>
</div>

<p align="center">
<a href="https://github.com/Quorafind/Obsidian-Templify/blob/main/README.md">English</a> | <a href="https://github.com/Quorafind/Obsidian-Templify/blob/main/README-ZH.md">中文</a>
</p>

![templify](https://raw.githubusercontent.com/quorafind/obsidian-templify/main/media/templify.gif)

> [!warning]
> The Templify plugin **is not open-source**. However, the Obsidian team has the authority to review the source code of Templify.

A more detailed video tutorial is available [here](https://raw.githubusercontent.com/quorafind/obsidian-templify/main/media/templify-demo.mp4).


## Features

Render your notes with different layouts based on the selected template.

## Templify Embed

You can copy view state via any view's header menu and paste it into Templify codeblock, like this:

````markdown
```templify-embed
{"state":{"query":"templify","matchingCase":false,"explainSearch":true,"collapseAll":true,"extraContext":true,"sortOrder":"byCreatedTime"},"type":"search"}
```
````

Or :

> You need to open the project/graph/kanban/canvas/etc. view in another tab, 
> then go back to the note you want to embed it into, and then you can run the Embed view into current note command where you can select that tab. And you can close it afterwards.
> Or right-click on the editor and select Embed view.

And it will be rendered like:

![templify-embed](https://raw.githubusercontent.com/quorafind/obsidian-templify/main/media/templify-3.png)

## Current Templates

- **Cornell template**: The Cornell method provides a systematic format for condensing and organizing notes.
- **Eisenhower template**: The Eisenhower Matrix is a method for organizing your tasks. It is a simple 2x2 matrix that helps you prioritize tasks based on their urgency and importance.
- **Custom template**: You can create your own template by using the `Templify` plugin.

## How to create a custom template

Not yet available

## Verification

Some features of Templify require a [PKMer](https://pkmer.cn) account. To unlock these features:

1. Register an account at [pkmer.cn](https://pkmer.cn).
2. Open the Templify plugin settings in Obsidian.
3. Click **Login with PKMer** and follow the authentication flow.
4. Once logged in, all premium features will be available.

## How to use

1. Open the plugin by clicking the Templify icon in the left sidebar.
2. Choose a template from the list.
3. Click to create a new note with the selected template.
4. Now the note is rendered with layout and content based on the selected template.
5. You can start taking notes in the new note.

## How to install

### From Obsidian

Not yet available

### From GitHub

1. Download the `main.js`, `styles.css` and `manifest.json` from the [latest release](https://github.com/quorafind/templify/releases/latest).
2. Copy these files into your Obsidian vault folder under `.obsidian/plugins/templify/`.
3. Reload plugins in Obsidian.
4. Go to the Community plugins tab in the settings and enable the Templify plugin.
5. The Templify plugin should now be available in the left sidebar.

