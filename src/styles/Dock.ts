import { css } from '@emotion/css'

export default {
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
