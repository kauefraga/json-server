<h1 align="center">Quicky Server</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/quicky-server.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/quicky-server.svg"
  />
  <a href="https://github.com/kauefraga/quicky-server/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/quicky-server.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/quicky-server.svg"
  />
</p>

<h4 align="center">☂ A fast json server with no dependencies inspired in json-server ☂</h4>

## ⬇️ How to install and use it

```bash
npm install -g quicky-server
quicky-server <port> <mock/path>

# Or

npx quicky-server <port> <mock/path>
```

## ⬇️ How to develop and contribute

```bash
git clone https://github.com/kauefraga/quicky-server.git
cd quicky-server
npm install
npm dev <port> <mock/path>
```
Or downloading with yarn? `yarn && yarn dev <port> <mock/path>`
<br/>
Sincerely, i prefer pnpm, so: `pnpm i && pnpm dev <port> <mock/path>`

## ✨ Features

- **Fancy UI**: A minimal UI that exposes everything you need
- **Colorized Outputs**: Everything looks better with some colors
- **Tiny size**: This package is built with native libraries

## 📑 To do

- [ ] Watch .json changes (here we'll need [Chokidar](https://www.npmjs.com/package/chokidar))
- [ ] Create a easily understandable --help section
- [ ] Write down in .json (POST requests)
- [ ] Log changes with own logger (based in [Winston](https://www.npmjs.com/package/winston))

## 💻 Technologies

- [NodeJS](https://nodejs.org) - A runtime based on V8 JavaScript
  - 🌐 [HTTP](https://nodejs.org/api/http.html) - The native http
  - 🗃 [FS](https://nodejs.org/api/fs.html) - The file system
  - 🗺 [Path](https://nodejs.org/api/path.html) - A way to manipulate paths much easier (cross platform)
- 💄 Code styling with [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
- 🧑‍💻 [Typescript](https://www.typescriptlang.org) - Improve dev experience by adding type safety

## 🗃 Project tree view

```bash
.
├─ src
│  ├─ cli
│  ├─ http
│  ├─ lib
└─ tsconfig.json
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/quicky-server/blob/main/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
