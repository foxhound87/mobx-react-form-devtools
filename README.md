# MobX React Form DevTools

##### DevTools for [MobX React Form](https://github.com/foxhound87/mobx-react-form)

---

[![NPM](https://nodei.co/npm/mobx-react-form-devtools.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mobx-react-form-devtools/)

![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/foxhound87/mobx-react-form-devtools/ci.yml?branch=next)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/foxhound87/mobx-react-form-devtools)
![npm bundle size](https://img.shields.io/bundlephobia/min/mobx-react-form-devtools)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/foxhound87/mobx-react-form-devtools/master.svg)](https://codecov.io/gh/foxhound87/mobx-react-form-devtools)
[![node](https://img.shields.io/node/v/mobx-react-form-devtools.svg)]()
[![GitHub license](https://img.shields.io/github/license/foxhound87/mobx-react-form-devtools.svg)]()
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/foxhound87/mobx-react-form-devtools)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/foxhound87/mobx-react-form-devtools)
[![Downloads](https://img.shields.io/npm/dt/mobx-react-form-devtools.svg)]()
[![Downloads](https://img.shields.io/npm/dm/mobx-react-form-devtools.svg)]()

---

## Install

```bash
npm install --save mobx-react-form-devtools
```

## Demo

[MobX React Form DevTools Demo](https://foxhound87.github.io/mobx-react-form-demo)

## Usage

```javascript
import MobxReactFormDevTools from 'mobx-react-form-devtools';

// register forms (mobx-react-form Instances)
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

## Contributing

If you want to contribute to the development, do not hesitate to fork the repo and send pull requests.

And don't forget to star the repo, I will ensure more frequent updates! Thanks!

