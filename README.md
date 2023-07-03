## install & run
```bash
yarn install --ignore-engines
yarn run docs:dev
```

## package
```bash
yarn run docs:build
cd src/.vuepress/dist && python -m http.server
```