# MobX React Form DevTools

##### DevTools for [MobX React Form](https://github.com/foxhound87/mobx-react-form)

[![Travis Build](https://img.shields.io/travis/foxhound87/mobx-react-form-devtools/master.svg)](https://travis-ci.org/foxhound87/mobx-react-form-devtools)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/foxhound87/mobx-react-form-devtools/master.svg)](https://codecov.io/gh/foxhound87/mobx-react-form-devtools)
[![Downloads](https://img.shields.io/npm/dt/mobx-react-form-devtools.svg)]()
[![npm](https://img.shields.io/npm/v/mobx-react-form-devtools.svg)]()
[![node](https://img.shields.io/node/v/mobx-react-form-devtools.svg)]()
[![GitHub license](https://img.shields.io/github/license/foxhound87/mobx-react-form-devtools.svg)]()

[![NPM](https://nodei.co/npm/mobx-react-form-devtools.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mobx-react-form-devtools/)

---

<br>

## Install

```bash
npm install --save mobx-react-form-devtools
```

## Usage

```javascript
import MobxReactFormDevTools from 'mobx-react-form-devtools';
import 'mobx-react-form-devtools/style/devtools.css';

// register forms
MobxReactFormDevTools.register({
  loginForm,
  registerForm,
  supportForm,
});

// select form to show into the devtools
MobxReactFormDevTools.select('registerForm');
```

## Link DevTools to Demo

```bash
❯ git clone -b master git@github.com:foxhound87/mobx-react-form-devtools.git mobx-react-form-devtools--master
❯ ln -s ../mobx-react-form-devtools--master ./mobx-react-form--demo/devtools
```

## Contributing

If you want to contribute to the development, do not hesitate to fork the repo and send pull requests.

And don't forget to star the repo, I will ensure more frequent updates! Thanks!

