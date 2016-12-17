import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';
import JSONTree from 'react-json-tree';
import ReactTooltip from 'react-tooltip';

import SelectMenu from './SelectMenu';

import { parseFormData, parseFieldsData } from '../parser';

import Icons from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/RenderFormData';

export default observer(({ store, handlers }) =>
  <div>
    <ReactTooltip />
    <h4 className={merge(style.heading, $U.clearfix)}>
      <div className={$U.left}>
        <Icons.FaTh className={style.icon} /> Form
      </div>
      <div className={merge($U.right, style.select)}>
        <SelectMenu store={store} handlers={handlers} />
      </div>
    </h4>
    <div className={merge($U.clearfix)}>
      <button type="button"className={style.controls.button} onClick={handlers.handleFormOnSubmit} data-tip="SUBMIT">
        <Icons.FaDotCircleO className={style.controls.icon} />
      </button>
      <button type="button"className={style.controls.button} onClick={handlers.handleFormOnClear} data-tip="CLEAR">
        <Icons.FaEraser className={style.controls.icon} />
      </button>
      <button type="button"className={style.controls.button} onClick={handlers.handleFormOnReset} data-tip="RESET">
        <Icons.FaRefresh className={style.controls.icon} />
      </button>
    </div>
    <JSONTree
      hideRoot
      data={parseFormData(store.selected.form)}
      theme={store.theme}
      isLightTheme={false}
    />
    <h4 className={style.heading}>
      <Icons.FaBars className={style.icon} /> Fields
    </h4>
    <JSONTree
      hideRoot
      data={parseFieldsData(store.selected.form.fields)}
      theme={store.theme}
      isLightTheme={false}
    />
  </div>,
);
