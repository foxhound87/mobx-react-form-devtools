import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import {
  ChevronRight,
  BookOpen,
  Monitor,
} from '../icons';

import $U from '../styles/_.utils';
import style from '../styles/Header';

export default observer(({ store, handlers }) => (
  <div className={cx(style.heading, (!store.open && !store.windowIsOpen) && $U.hidden)}>
    <div className={cx($U.left)}>
      <b className={cx(style.hli)}>
        MOBX FORMKIT
      </b>
      <b className={cx(style.hlb)}>
        DEVTOOLS
      </b>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {!store.windowIsOpen && <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOnCloseTools}
        title="Close Tools"
      >
        <ChevronRight size={20} className={cx(style.icon)} />
      </button>}
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOnOpenDoc}
        title="Open Documentation"
      >
        <BookOpen size={18} className={style.icon} />
      </button>
      {!store.windowIsOpen && <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOpenInWindow}
        title="Open in new Window"
      >
        <Monitor size={18} className={cx(style.icon)} />
      </button>}
    </div>
  </div>
));
