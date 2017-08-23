import { observable } from 'mobx';
import theme from './styles/_.theme';
import makeFormOptions from './form.options';

export default observable({
  theme,
  showOptions: false,
  open: false,
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
});
