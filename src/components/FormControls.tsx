import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import {
  CircleDot,
  Eraser,
  RotateCw,
  Settings,
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
      <CircleDot size={16} className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnClear}
      title="Clear Form"
    >
      <Eraser size={16} className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleFormOnReset}
      title="Reset Form"
    >
      <RotateCw size={16} className={icon} />
    </button>
    <button
      type="button"
      className={cx($U.button, style.controls.button, 'tooltip')}
      onClick={handlers.handleToggleOptions}
      title="Form Settings"
    >
      <Settings size={16} className={cx(icon, store.showOptions && iconOptionsActive)} />
    </button>
  </div>
));
