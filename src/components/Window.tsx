import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import Header from './Header';
import SelectInitialForm from './SelectInitialForm';
import RenderFormData from './RenderFormData';

import style from '../styles/Dock';

export default observer(({ store, handlers }) => (
  <div className={cx(style.window)}>

    <Header store={store} handlers={handlers} />

    {(store.selected.form && store.selected.key)
      ? <RenderFormData store={store} handlers={handlers} />
      : <SelectInitialForm store={store} handlers={handlers} />}

  </div>
));
