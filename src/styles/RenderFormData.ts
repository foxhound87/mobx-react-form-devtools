import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  container: css({
    marginLeft: '10px',
  }),
  heading: css({
    color: theme.base00,
    padding: '10px',
    margin: '44px 0 0 0',
    background: theme.base03,
    fontSize: '15px',
    textTransform: 'uppercase',
  }),
  select: css({
    textAlign: 'right',
  }),
  icon: css({
    marginTop: '-3px',
  }),
  controls: {
    button: css({
      'borderRadius': 0,
      'width': '25%',
      'display': 'block',
      'float': 'left',
      'fontSize': '20px',
      'padding': '3px 0 6px 0',
      'background': theme.base01,
      'color': theme.base00,
      ':hover': {
        background: theme.base03,
        color: theme.base00,
      },
      ':hover g': {
        color: theme.base00,
      },
    }),
    icon: css({
      color: theme.base00,
    }),
    iconOptionsActive: css({
      'color': theme.base0B,
      ':hover': {
        color: theme.base00,
      },
    }),
  },
};
