import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import Dock from 'react-dock';

import Header from './Header';
import Draggable from './Draggable';
import SelectInitialForm from './SelectInitialForm';
import RenderFormData from './RenderFormData';

import $U from '../styles/_.utils';
import style from '../styles/Dock';

export default observer(({ store, handlers }) => (
  <div className={cx(style.dock)}>
    <Dock
      defaultSize={store.open ? store.dock.size : 0}
      size={store.open ? store.dock.size : 0}
      onSizeChange={handlers.handleOnSizeChange}
      position={store.dock.position}
      fluid={store.dock.fluid}
      isVisible={store.dock.visible}
      dimMode={store.dock.mode}
      dockStyle={store.dock.style}
    >
      <div className={cx(style.draggable, store.open && $U.hidden)}>
        <Draggable handlers={handlers} />
      </div>

      <Header store={store} handlers={handlers} />

      {(store.selected.form && store.selected.key)
        ? <RenderFormData store={store} handlers={handlers} />
        : <SelectInitialForm store={store} handlers={handlers} />}

    </Dock>
  </div>
));
