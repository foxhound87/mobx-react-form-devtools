import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames'
import JSONTree from 'react-json-tree';

import SelectMenu from './SelectMenu';
import FormControls from './FormControls';
import FormOptions from './FormOptions';

import { parseFormData, parseFieldsData } from '../parser';

import {
  FaTh,
  FaBars,
} from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/RenderFormData';

export default observer(({ store, handlers }) => (
  <div>
    <h4 className={cx(style.heading, $U.clearfix)}>
      <div className={$U.left}>
        <FaTh className={style.icon} /> Form
      </div>
      <div className={cx($U.rigth, style.select)}>
        <SelectMenu store={store} handlers={handlers} />
      </div>
    </h4>
    <FormControls handlers={handlers} store={store} />

    {store.showOptions
      && <FormOptions form={store.formOptions} />}

    <br />
    <JSONTree
      className={$U.hidden}
      hideRoot
      data={parseFormData(store.selected.form)}
      theme={store.theme}
      invertTheme={false}
    />
    <h4 className={cx(style.heading)}>
      <FaBars className={style.icon} /> Fields
    </h4>
    <div className={cx(style.container)}>
      <JSONTree
        hideRoot
        data={parseFieldsData(store.selected.form.fields)}
        theme={store.theme}
        invertTheme={false}
      />
    </div>
  </div>
));
