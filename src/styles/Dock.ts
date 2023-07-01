import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  window: css({
    fontFamily: 'Helvetica Neue',
    background: theme.base00,
    marginTop: '-45px',
    paddingBottom: '20px',
  }),
  dock: css({
    'fontFamily': 'Helvetica Neue',
    '@media (min-width: 0px) and (max-width: 450px)': {
      display: 'none',
    },
  }),
  draggable: css({
    position: 'fixed',
    right: '0px',
    top: '100px',
  }),

};
