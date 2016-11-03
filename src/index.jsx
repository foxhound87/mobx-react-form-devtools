import React from 'react';
import Dock from './components/Dock';

import store from './store';
import actions from './actions';
import handlers from './handlers';

const $actions = actions(store);
const $handlers = handlers($actions);

export default {

  theme: $actions.theme,

  register: $actions.registerForm,

  select: $actions.selectForm,

  UI: () => (<Dock store={store} handlers={$handlers} />),

};
