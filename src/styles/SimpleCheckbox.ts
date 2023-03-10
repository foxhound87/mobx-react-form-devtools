import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  label: css({
    'display': 'block',
    'fontSize': '15px',
    'padding': '0 0 0 20px',
    'margin': '0',
    'color': theme.base04,
    ':hover': {
      color: theme.base0B,
    },
  }),
  input: css({
    margin: '0 5px 0 0',
  }),
};
