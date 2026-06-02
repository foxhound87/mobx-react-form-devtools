import { makeAutoObservable } from 'mobx';
import theme from './styles/_.theme';
import {makeFormOptions} from './form.options';

const lsOpen = () => {
  try { return localStorage.getItem('mrf-open') === 'true'; }
  catch { return false; }
};

export default makeAutoObservable({
  mode: 'docked',
  theme,
  showOptions: false,
  open: lsOpen(),
  forms: {},
  menu: {},
  select: {},
  selected: {
    key: null,
    form: null,
  },
  dock: {
    visible: true,
    fluid: false,
    size: 350,
    position: 'right',
    mode: 'none',
    style: {
      background: theme.base00,
    },
  },
  get formOptions() {
    return makeFormOptions(this.selected.form);
  },

  get windowIsOpen() {
    return this.mode === 'windowed';
  },

});
