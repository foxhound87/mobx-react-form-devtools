import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import style from '../styles/SelectMenu';

export default observer(({ store, handlers }) =>
  <select
    name="mobx-react-form-devtools-select"
    value={store.selected.key}
    onChange={handlers.handleSelect}
    className={style.select}
  >
    {_.map(store.menu, ($val, $key) =>
      <option key={$key} value={$key}>{$val}</option>
    )}
  </select>
);
