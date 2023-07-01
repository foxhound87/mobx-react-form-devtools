import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

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
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnSubmit}
      title="Submit Form"
    >
      <FaDotCircleO className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnClear}
      title="Clear Form"
    >
      <FaEraser className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnReset}
      title="Reset Form"
    >
      <FaRefresh className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleToggleOptions}
      title="Form Settings"
    >
      <FaCog className={cx(icon, store.showOptions && iconOptionsActive)} />
    </button>
  </div>
));
