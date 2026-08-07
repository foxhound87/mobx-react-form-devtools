import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  btn: css({
    "float": 'right',
    "margin": '2px',
    "display": 'flex',
    "alignItems": 'center',
    "justifyContent": 'center',
    "padding": '6px',
    "borderRadius": '4px',
    "background": 'transparent',
    "transition": 'background 120ms ease',
    ':hover': {
      background: theme.base01,
    },
  }),
  icon: css({
    "color": theme.base0B,
    "display": 'flex',
    ':hover': {
      color: theme.base0A,
    },
  }),
  hli: css({
    color: theme.base0D,
    paddingLeft: '25px',
    letterSpacing: '0.5px',
    display: 'block',
  }),
  hlb: css({
    color: theme.base09,
    paddingLeft: '25px',
    letterSpacing: '0.5px',
    display: 'block',
  }),
  heading: css({
    fontSize: '13px',
    background: theme.base00,
    color: theme.base00,
    fontWeight: 600,
    textTransform: 'uppercase',
    padding: '14px 8px 13px 0',
    margin: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  }),
};
