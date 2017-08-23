import React from 'react';
import { observe, action } from 'mobx';
import Dock from './components/Dock';
import FormOptions from './components/FormOptions';

import store from './store';
import actions from './actions';
import handlers from './handlers';

const $actions = actions(store);
const $handlers = handlers($actions);

observe(store.dock, 'size', action((change) => {
  const w = window.innerWidth; // eslint-disable-line
  if (change.newValue >= w) store.dock.size = w;
  if (change.newValue < 350) store.dock.size = 350;
}));

export default {

  theme: $actions.theme,

  open: $actions.open,

  register: $actions.registerForm,

  select: $actions.selectForm,

  UI: () => (<Dock store={store} handlers={$handlers} />),

  Options: () => (<FormOptions form={store.formOptions} />),

};
