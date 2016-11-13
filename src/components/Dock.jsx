import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';
import Dock from 'react-dock';
import ReactTooltip from 'react-tooltip';

import Header from './Header';
import Draggable from './Draggable';
import SelectInitialForm from './SelectInitialForm';
import RenderFormData from './RenderFormData';

import $U from '../styles/_.utils';
import style from '../styles/Dock';

export default observer(({ store, handlers }) => (
  <div className={style.dock}>
    <ReactTooltip />
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
      <div className={merge(style.draggable, store.open && $U.hidden)}>
        <Draggable handlers={handlers} />
      </div>

      <Header store={store} handlers={handlers} />

      {(store.selected.form && store.selected.key)
        ? <RenderFormData store={store} handlers={handlers} />
        : <SelectInitialForm store={store} handlers={handlers} />}

    </Dock>
  </div>
));
