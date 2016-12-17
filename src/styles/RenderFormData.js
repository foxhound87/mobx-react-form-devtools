import { style } from 'glamor';
import theme from './_.theme';

export default {
  heading: style({
    color: theme.base00,
    padding: '10px',
    margin: '44px 0 0 0',
    background: theme.base03,
    fontSize: '15px',
    textTransform: 'uppercase',
  }),
  select: style({
    textAlign: 'right',
  }),
  icon: style({
    marginTop: '-3px',
  }),
  controls: {
    button: style({
      'borderRadius': 0,
      'width': '33.333%',
      'display': 'block',
      'float': 'left',
      'fontSize': '20px',
      'padding': '3px 0 6px 0',
      'background': theme.base01,
      ':hover': {
        background: theme.base03,
      },
    }),
    icon: style({
      color: theme.base00,
    }),
  },
};
