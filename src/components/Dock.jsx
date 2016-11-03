import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';
import Dock from 'react-dock';
import ReactTooltip from 'react-tooltip';

import Draggable from './Draggable';
import SelectInitialForm from './SelectInitialForm';
import RenderFormData from './RenderFormData';

import Icons from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/Dock';

export default observer(({ store, handlers }) => (
  <div className={style.dock}>
    <Dock
      defaultSize={store.tools.open ? store.dock.size : 0}
      size={store.tools.open ? store.dock.size : 0}
      onSizeChange={handlers.handleOnSizeChange}
      position={store.dock.position}
      fluid={store.dock.fluid}
      isVisible={store.dock.visible}
      dimMode={store.dock.mode}
      dockStyle={store.dock.style}
    >
      <ReactTooltip />

      <div className={merge(style.draggable, store.tools.open && $U.hidden)}>
        <Draggable handlers={handlers} />
      </div>

      <div className={merge(style.heading, !store.tools.open && $U.hidden)}>
        <div className={$U.left}>
          <b className={merge(style.hli, !store.tools.heading.name && $U.hidden)}>
            MOBX-REACT-FORM
          </b>
          <b className={merge(style.hlb, !store.tools.heading.sub && $U.hidden)}>
            DEVTOOLS
          </b>
        </div>
        <button
          className={merge($U.button, style.btn)}
          onClick={handlers.handleOnCloseTools}
          data-tip="CLOSE"
        >
          <Icons.FaChevronCircleRight className={style.icon} />
        </button>
        <button
          className={merge($U.button, style.btn)}
          onClick={handlers.handleOnOpenDoc}
          data-tip="DOCS"
        >
          <Icons.FaBook className={style.icon} />
        </button>
      </div>

      {(store.selected.form && store.selected.key)
        ? <RenderFormData store={store} handlers={handlers} />
        : <SelectInitialForm store={store} handlers={handlers} />}

    </Dock>
  </div>
));
