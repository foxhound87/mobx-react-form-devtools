import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import Draggable from 'react-draggable';

import {
  FaBars,
  FaChevronLeft,
  FaBook,
} from '../icons';

import $U from '../styles/_.utils';
import style from '../styles/Draggable';

export default observer(({ handlers }) => (
  <Draggable
    axis="y"
    handle=".devtools-handle-drag"
    defaultPosition={{ x: 0, y: 0 }}
  >
    <div>
      <div className={cx(style.draggable)}>
        <div className="devtools-handle-drag">
          <FaBars className={cx(style.icon, style.dragIcon)} />
        </div>
        <button
          className={cx($U.button, style.btn)}
          onClick={handlers.handleOnOpenTools}
        >
          <FaChevronLeft className={style.icon} />
        </button>
        <button
          className={cx($U.button, style.btn)}
          onClick={handlers.handleOnOpenDoc}
        >
          <FaBook className={style.icon} />
        </button>
      </div>
    </div>
  </Draggable>
));
