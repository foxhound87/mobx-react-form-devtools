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
};
