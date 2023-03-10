import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  icon: css({
    color: theme.base0A,
  }),
  btn: css({
    'margin': 0,
    'width': '100%',
    'color': theme.base04,
    'display': 'block',
    'padding': '15px 30px',
    'fontSize': '16px',
    'textAlign': 'left',
    'letterSpacing': '3px',
    ':hover': {
      background: theme.base01,
    },
  }),
};
