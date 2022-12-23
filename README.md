<div align="center">
  <h1><code>Quicky Server</code></h1>

  <p>
    <strong>☂ A fast json server built to be flexible and easy-to-use. Inspired in json-server.  ☂</strong>
  </p>

  <p>
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
</div>

## ✨ Features

- **Fancy UI**: A minimal UI that exposes everything you need
- **Colorized Outputs**: Everything looks better with some colors
- **Nice help**: If you need some help, just use `quicky-server -h`
- **No config**: You can give it a .json from the web (like [this](https://raw.githubusercontent.com/kauefraga/quicky-server/main/mock/users.json))
- **Configured CORS**: Connect it with all your applications
- **Software Architecture**:
  - [x] Restful
  - [x] GraphQL
  - [ ] RPC

## ⬇️ How to install and use it

```bash
npm install -g quicky-server
quicky-server --port <port> --json <path || url>

# Or

npx quicky-server -p <port> -j <path || url>

# Example (restful)
npx quicky-server -p 8080 -j https://raw.githubusercontent.com/kauefraga/quicky-server/main/mock/users.json

# Example (graphql)
npx quicky-server --graphql -j https://raw.githubusercontent.com/kauefraga/quicky-server/main/mock/users.json
```

## ⬇️ How to develop and contribute

```bash
git clone https://github.com/kauefraga/quicky-server.git
cd quicky-server

npm install
npm run dev -j mock/users.json # -h
```
You are welcome to open issues and pull requests!

## 💻 Technologies

- [NodeJS](https://nodejs.org) - A runtime based on V8 JavaScript
  - 🌐 [HTTP](https://nodejs.org/api/http.html) - The native http
  - 🗃 [FS](https://nodejs.org/api/fs.html) - The file system
  - 🗺 [Path](https://nodejs.org/api/path.html) - A way to manipulate paths much easier (cross platform)
- 🤖 [Commander](https://npm.im/commander) - The command line helper
- 🔮 [Express](https://expressjs.com) - "Fast, minimalist web framework for Nodejs..."
- 🌠 [GraphQL](https://npm.im/graphql) - A software architecture different from restful
- 🧙‍♂️ [Apollo Server](https://npm.im/apollo-server) - A GraphQL server
- 💄 Code styling with [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
- ⚗️ [Vitest](https://vitest.dev) - Test runner that implements Jest but with its own ESbuider (out of box typescript, esmodules...)
- 👩‍💻 [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npm.im/ts-node-dev) - Improve dev experience by adding type safety

## 📑 Coming soon...

- Create a server with GraphQL support
- Watch .json changes (here we'll need [Chokidar](https://www.npmjs.com/package/chokidar))

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/quicky-server/blob/main/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
