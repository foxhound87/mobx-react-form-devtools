import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import _ from 'lodash';

import DebugForm from './Debug';

const store = observable({
  forms: {},
  menu: {},
  select: {},
  selected: {
    key: null,
    form: null,
  },
});

const select = action((key) => {
  _.map(store.select, ($val, $key) => _.set(store.select, $key, false));
  _.set(store.select, key, true);
  _.set(store.selected, 'key', key);
  _.set(store.selected, 'form', store.forms[key]);
});

const register = action((forms) => {
  _.merge(store.forms, forms);
  _.map(forms, ($form, $key) => _.set(store.select, $key, false));
  _.map(forms, ($form, $key) => _.set(store.menu, $key, $form.name || $key));
});

export default {

  register,

  select,

  UI: observer(() =>
    <div className="mobx-react-form-devtools">
      <DebugForm store={store} actions={{ select }} />
    </div>
  ),

};
