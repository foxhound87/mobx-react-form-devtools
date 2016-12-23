import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';
import ReactTooltip from 'react-tooltip';

import Icons from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/RenderFormData';

export default observer(({ handlers }) =>
  <div className={merge($U.clearfix)}>
    <ReactTooltip />
    <button
      type="button"
      className={merge($U.button, style.controls.button)}
      onClick={handlers.handleFormOnSubmit}
      data-tip="SUBMIT"
    >
      <Icons.FaDotCircleO className={style.controls.icon} />
    </button>
    <button
      type="button"
      className={merge($U.button, style.controls.button)}
      onClick={handlers.handleFormOnClear}
      data-tip="CLEAR"
    >
      <Icons.FaEraser className={style.controls.icon} />
    </button>
    <button
      type="button"
      className={merge($U.button, style.controls.button)}
      onClick={handlers.handleFormOnReset}
      data-tip="RESET"
    >
      <Icons.FaRefresh className={style.controls.icon} />
    </button>
  </div>,
);
