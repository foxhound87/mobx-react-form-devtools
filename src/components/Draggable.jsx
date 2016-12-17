import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';
import Draggable from 'react-draggable';

import Icons from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/Draggable';

export default observer(({ handlers }) => (
  <Draggable
    axis="y"
    handle=".devtools-handle-drag"
    zIndex={99999999999}
    defaultPosition={{ x: 0, y: 0 }}
  >
    <div>
      <div className={style.draggable}>
        <div className="devtools-handle-drag" data-tip="DRAG">
          <Icons.FaBars className={merge(style.icon, style.dragIcon)} />
        </div>
        <button
          className={merge($U.button, style.btn)}
          onClick={handlers.handleOnOpenTools}
          data-tip="OPEN"
        >
          <Icons.FaChevronLeft className={style.icon} />
        </button>
        <button
          className={merge($U.button, style.btn)}
          onClick={handlers.handleOnOpenDoc}
          data-tip="DOCS"
        >
          <Icons.FaBook className={style.icon} />
        </button>
      </div>
    </div>
  </Draggable>
));
