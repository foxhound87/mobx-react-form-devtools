import { action } from 'mobx';
import _ from 'lodash';

export default $store => ({

  open: action(flag => _.set($store, 'open', flag)),

  theme: action(theme => _.merge($store.theme, theme)),

  selectForm: action((key) => {
    _.map($store.select, ($val, $key) => _.set($store.select, $key, false));
    _.set($store.select, key, true);
    _.set($store.selected, 'key', key);
    _.set($store.selected, 'form', $store.forms[key]);
  }),

  registerForm: action((forms) => {
    _.merge($store.forms, forms);
    _.map(forms, ($form, $key) => _.set($store.select, $key, false));
    _.map(forms, ($form, $key) => _.set($store.menu, $key, $form.name || $key));
  }),

  toggleTools: action((toggle) => {
    let $flag;
    if (toggle === 'open') $flag = true;
    if (toggle === 'close') $flag = false;
    _.set($store, 'open', $flag);
  }),

  changeDockSize: action((size) => {
    _.set($store.dock, 'size', size);
    _.set($store.tools, 'heading.name', (size > 0.22));
    _.set($store.tools, 'heading.sub', (size > 0.11));
  }),

});

