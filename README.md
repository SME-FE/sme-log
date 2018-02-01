
## sme-log

A lovely logs

![download](https://img.shields.io/npm/dm/sme-log.svg?style=flat-square)
![version](https://img.shields.io/npm/v/sme-log.svg?style=flat-square)
![license](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)

## install

```shell
yarn install sme-log
```

or

```shell
npm install sme-log
```

## usage

![hi](./docs/hi.png)

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/6712767?v=4" width="100px;"/><br /><sub>hwen</sub>](https://github.com/hwen)<br />[🤔](#ideas "Ideas & Planning") [💻](https://github.com/SME-FE/sme-log/commits?author=hwen "Code") [🎨](#design "Design") [📖](https://github.com/SME-FE/sme-log/commits?author=hwen "Documentation") [💡](#example "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, hwen <hwenleung@gmail.com>
