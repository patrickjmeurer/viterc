# ViteRC ❤️‍🔥

A modern minimal Vite 5 + React 18 + TypeScript template with pre-configured ESLint 9, Prettier and Absolute imports out of the box 📦

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Commitlint](https://img.shields.io/badge/commitlint-000000?style=for-the-badge&logo=commitlint&logoColor=white)

## Features

- ⚡️ [Vite 5](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - Why not?!
- 🔨 [Eslint 9](https://eslint.org/) - Pluggable JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention
- ⌨️ Absolute Imports

## Why

This template arose out of a need to unite all the above libraries, which were not found in the existing Vite templates. This template has an active contributors that will update everything on this template as needed

## Usage

```bash
npx degit patrickjmeurer/viterc my-app

cd my-app
```

## Available commands

<p>In this project, you can run the following scripts:</p>

| Script     | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| dev        | Runs the app in the development mode.                                       |
| build      | Builds the app for production to the `dist` folder.                         |
| lint       | Runs the Eslint and show code problems                                      |
| preview    | Builds the app for production to the `dist` folder, and run locally server. |

## About the absolute imports

To correctly functioning (code and tests) of absolute imports, you should add some codes in some files, like:

- vite.config.ts
- tsconfig.app.json

We already writed some absolute imports on these files, so if you wanna more paths or edit some, feel free to do it.
If your not safe about it or have some question, send us a thread on [Github Discussions](https://github.com/potreco/viterc/discussions/new?category=q-a) asking for, we were happy to help

## License

[MIT](https://choosealicense.com/licenses/mit/)
