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

## Demo

[MobX React Form DevTools Demo](https://foxhound87.github.io/mobx-react-form/demo.html)

## Usage

```javascript
import MobxReactFormDevTools from 'mobx-react-form-devtools';

// register forms
MobxReactFormDevTools.register({
  loginForm,
  registerForm,
  supportForm,
});

// select form to show into the devtools
MobxReactFormDevTools.select('registerForm');

// open the devtools (closed by default)
MobxReactFormDevTools.open(true);

// render the component
<MobxReactFormDevTools.UI />
```

## Theme

```javascript
// custom theme colors
MobxReactFormDevTools.theme({
  base00: '#2b303b',
  base01: '#343d46',
  base02: '#4f5b66',
  base03: '#65737e',
  base04: '#a7adba',
  base05: '#c0c5ce',
  base06: '#dfe1e8',
  base07: '#eff1f5',
  base08: '#bf616a',
  base09: '#d08770',
  base0A: '#ebcb8b',
  base0B: '#a3be8c',
  base0C: '#96b5b4',
  base0D: '#8fa1b3',
  base0E: '#b48ead',
  base0F: '#ab7967',
});
```

## Screenshot

![DevTools](https://github.com/foxhound87/mobx-react-form-devtools/blob/master/screenshot.png?raw=true)

## Link DevTools to Demo

```bash
❯ git clone -b master git@github.com:foxhound87/mobx-react-form-devtools.git mobx-react-form-devtools--master
❯ ln -s ../mobx-react-form-devtools--master ./mobx-react-form--demo/devtools
```

## Contributing

If you want to contribute to the development, do not hesitate to fork the repo and send pull requests.

And don't forget to star the repo, I will ensure more frequent updates! Thanks!

