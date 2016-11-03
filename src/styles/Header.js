import { style } from 'glamor';
import theme from './_.theme';

export default {
  btn: style({
    float: 'right',
    margin: '-3px',
  }),
  icon: style({
    'fontSize': '22px',
    'color': theme.base0B,
    'paddingRight': '10px',
    ':hover': {
      color: theme.base0A,
    },
  }),
  hli: style({
    color: theme.base0D,
    paddingLeft: '25px',
  }),
  hlb: style({
    color: theme.base09,
    paddingLeft: '10px',
  }),
  heading: style({
    fontSize: '14px',
    background: theme.base00,
    color: theme.base00,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '14px 0 13px 0',
    margin: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 99,
  }),
};
