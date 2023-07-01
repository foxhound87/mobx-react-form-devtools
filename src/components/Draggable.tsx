import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
// import Draggable from 'react-draggable';

import {
  FaBars,
  FaChevronLeft,
  FaBook,
  FaWindows,
} from '../icons';

import $U from '../styles/_.utils';
import style from '../styles/Draggable';

export default observer(({ handlers }) => {

  const handleOnDragEnd = (e) => {
    e.target.style.top = (e.clientY - 100) + "px";
  };

  return (
  // <div
  //   axis="y"
  //   handle=".devtools-handle-drag"
  //   defaultPosition={{ x: 0, y: 0 }}
  // >
    <div className={cx(style.draggable)} draggable onDragEnd={handleOnDragEnd}>
      <button className={cx($U.button, style.dragButton)}>
        <FaBars className={cx(style.icon, style.dragIcon)} />
      </button>
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOnOpenTools}
        title="Open Tools"
      >
        <FaChevronLeft className={style.icon} />
      </button>
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOpenInWindow}
        title="Open in new Window"
      >
        <FaWindows className={style.icon} />
      </button>
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOnOpenDoc}
        title="Open Documentation"
      >
        <FaBook className={style.icon} />
      </button>
    </div>
  // </Draggable>
)});
