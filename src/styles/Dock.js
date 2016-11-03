import { style } from 'glamor';

export default {
  dock: style({
    'fontFamily': 'Helvetica Neue',
    '@media (min-width: 0px) and (max-width: 450px)': {
      display: 'none',
    },
  }),
  draggable: style({
    position: 'fixed',
    right: '0px',
    top: '100px',
  }),
};
