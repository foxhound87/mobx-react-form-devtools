import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import {
  FaChevronCircleRight,
  FaBook,
  FaWindows,
} from '../icons';

import $U from '../styles/_.utils';
import style from '../styles/Header';

export default observer(({ store, handlers }) => (
  <div className={cx(style.heading, (!store.open && !store.windowIsOpen) && $U.hidden)}>
    <div className={cx($U.left)}>
      <b className={cx(style.hli)}>
        MOBX-REACT-FORM
      </b>
      <b className={cx(style.hlb)}>
        DEVTOOLS
      </b>
    </div>
    {!store.windowIsOpen && <button
      className={cx($U.button, style.btn)}
      onClick={handlers.handleOnCloseTools}
      title="Close Tools"
    >
      <FaChevronCircleRight className={cx(style.icon)} />
    </button>}
    <button
      className={cx($U.button, style.btn)}
      onClick={handlers.handleOnOpenDoc}
      title="Open Documentation"
    >
      <FaBook className={style.icon} />
    </button>
    {!store.windowIsOpen && <button
      className={cx($U.button, style.btn)}
      onClick={handlers.handleOpenInWindow}
      title="Open in new Window"
    >
      <FaWindows className={cx(style.icon)} />
    </button>}
  </div>
));
