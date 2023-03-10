import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import { Tooltip } from 'react-tooltip';

import {
  FaDotCircleO,
  FaEraser,
  FaRefresh,
  FaCog,
} from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/RenderFormData';

const { icon, iconOptionsActive } = style.controls;

export default observer(({ store, handlers }) => (
  <div className={cx($U.clearfix)}>
    <Tooltip
      id="mobx-react-form-devtools--form-controls"
      anchorSelect=".tooltip"
    />
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnSubmit}
      data-tooltip-id="SUBMIT"
      data-tooltip-content="SUBMIT"
    >
      <FaDotCircleO className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnClear}
      data-tooltip-id="CLEAR"
      data-tooltip-content="CLEAR"
    >
      <FaEraser className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnReset}
      data-tooltip-id="RESET"
      data-tooltip-content="RESET"
    >
      <FaRefresh className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleToggleOptions}
      data-tooltip-id="OPTIONS"
      data-tooltip-content="OPTIONS"
    >
      <FaCog className={cx(icon, store.showOptions && iconOptionsActive)} />
    </button>
  </div>
));
