import { observable } from 'mobx';
import theme from './styles/_.theme';

export default observable({
  theme,
  forms: {},
  menu: {},
  select: {},
  selected: {
    key: null,
    form: null,
  },
  tools: {
    open: true,
    heading: {
      name: true,
      sub: true,
    },
  },
  dock: {
    visible: true,
    fluid: true,
    size: 0.30,
    position: 'right',
    mode: 'none',
    style: {
      background: theme.base00,
    },
  },
});
