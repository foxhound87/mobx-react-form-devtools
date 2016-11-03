import { style } from 'glamor';
import theme from './_.theme';

export default {
  icon: style({
    fontSize: '15px',
  }),
  dragIcon: style({
    fontSize: '22px',
    color: theme.base04,
  }),
  draggable: style({
    padding: '5px 5px 7px 5px',
    background: theme.base00,
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  }),
  btn: style({
    'display': 'block',
    'width': '20px',
    'height': '20px',
    'padding': 0,
    'margin': '4px 0 0 1px',
    'background': theme.base0B,
    'borderRadius': '2px',
    ':hover': {
      background: theme.base0A,
    },
  }),
};
