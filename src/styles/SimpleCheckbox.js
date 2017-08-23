import { style } from 'glamor';
import theme from './_.theme';

export default {
  label: style({
    'display': 'block',
    'fontSize': '15px',
    'padding': '0 0 0 20px',
    'margin': '0',
    'color': theme.base04,
    ':hover': {
      color: theme.base0B,
    },
  }),
  input: style({
    margin: '0 5px 0 0',
  }),
};
