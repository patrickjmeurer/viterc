# Vite + React + TypeScript + Eslint (Airbnb) + Prettier = 🔥

A modern minimal Vite + React + TypeScript template with pre-configured ESLint (with Airbnb JS/React rules), Prettier out of the box 📦

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

![Screenshot](https://i.imgur.com/nqqArrR.png)

## Features

- 🦾 Up to date libraries version and their features
- 🔎 Pre-configured and extensible ESLint configuration without wrong and unused rules designed for old React versions
- 💅 Pre-configured and extensible Prettier configuration
- 🔬 Git hooks for code formatting and linting pre-commit

## Usage

```bash
npx degit potreco/viterc my-app

cd my-app

# Required if you want a repository and work with Git hooks
git init

yarn install

yarn dev
```

## Available commands

Run in development mode

```bash
  yarn dev
```

Create production build

```bash
  yarn build
```

Run ESLint linting

```bash
  yarn lint
```

Run Prettier formatting

```bash
  yarn format
```

Run TypeScript compiling

```bash
  yarn compile
```

Serve production build locally

```bash
  yarn preview
```

## Resources

- [Vite](https://github.com/vitejs/vite)
- [Airbnb JS Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Husky](https://github.com/typicode/husky)

## License

[MIT](https://choosealicense.com/licenses/mit/)
