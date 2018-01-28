
## install

```shell
yarn install sme-log
```

or

```shell
npm install sme-log
```

## usage

```js
import logSome from 'sme-log';

// only log when NODE_ENV: 'development' or 'dev' 只在 dev 环境打印
window.logs = logSome(process.env.NODE_ENV);

logs('hallo world');

// custom style 自定义样式
window.logs = logSome(process.env.NODE_ENV, 'color: yellowgreen;');

// Always log if force equal true 当 force 为 true 时，总是会打印
const force = true;
logs('hallo world~~', force);
```

**Note**: if you want to assign window, you have better change your eslint config

```js
globals: {
  'logs': false
}
```
