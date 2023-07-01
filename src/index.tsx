import React from 'react';
import { observe, action } from 'mobx';
import Dock from './components/Dock';
import FormOptions from './components/FormOptions';
import { WindowPortal } from './components/WindowPortal';

import store from './store';
import actions from './actions';
import handlers from './handlers';
import { observer } from 'mobx-react';
import Window from './components/Window';

const $actions = actions(store);
const $handlers = handlers($actions);

observe(store.dock, 'size', action((change) => {
  const w = window.innerWidth;
  if (change.newValue >= w) store.dock.size = w;
  if (change.newValue < 350) store.dock.size = 350;
}));

export default {

  theme: $actions.theme,

  open: $actions.open,

  register: $actions.registerForm,

  select: $actions.selectForm,

  Options: () => <FormOptions form={store.formOptions} />,

  UI: observer(() =>
    store.windowIsOpen
      ?<WindowPortal closeWindowPortal={$handlers.handleOnCloseWindow}>
        <Window store={store} handlers={$handlers} />
      </WindowPortal>
      : <Dock store={store} handlers={$handlers} />
  ),

};
