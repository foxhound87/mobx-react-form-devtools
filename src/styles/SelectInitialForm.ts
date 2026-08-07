import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  icon: css({
    color: theme.base0A,
    flexShrink: 0,
  }),
  btn: css({
    "margin": 0,
    "width": '100%',
    "color": theme.base04,
    "display": 'flex',
    "alignItems": 'center',
    "gap": '10px',
    "padding": '15px 30px',
    "fontSize": '14px',
    "textAlign": 'left',
    "letterSpacing": '0.5px',
    ':hover': {
      background: theme.base01,
    },
  }),
};
