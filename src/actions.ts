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

  toggleOptions: action(() => {
    _.set($store, 'showOptions', !$store.showOptions);
  }),

  changeDockSize: action((size) => {
    _.set($store.dock, 'size', size);
  }),

  handleFormControls: action((type) => {
    switch (type) {
      case 'submit': $store.selected.form.submit(); break;
      case 'clear': $store.selected.form.clear(); break;
      case 'reset': $store.selected.form.reset(); break;
      default: $store.selected.form.submit();
    }
  }),

  openInWindow: action(() => {
    _.set($store, 'mode', 'windowed');
    _.set($store.dock, 'position', 'left');
    _.set($store.dock, 'fluid', true);
  }),

  onCloseWindow: action(() => {
    _.set($store, 'mode', 'docked');
    _.set($store.dock, 'position', 'right');
    _.set($store.dock, 'fluid', false);
  }),

});

