import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import {
  FaChevronCircleRight,
  FaBook,
} from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/Header';

export default observer(({ store, handlers }) => (
  <div className={cx(style.heading, !store.open && $U.hidden)}>
    <div className={cx($U.left)}>
      <b className={cx(style.hli)}>
        MOBX-REACT-FORM
      </b>
      <b className={cx(style.hlb)}>
        DEVTOOLS
      </b>
    </div>
    <button
      className={cx($U.button, style.btn)}
      onClick={handlers.handleOnCloseTools}
      data-tip="CLOSE"
    >
      <FaChevronCircleRight className={cx(style.icon)} />
    </button>
    <button
      className={cx($U.button, style.btn)}
      onClick={handlers.handleOnOpenDoc}
      data-tip="DOCS"
    >
      <FaBook className={style.icon} />
    </button>
  </div>
));
